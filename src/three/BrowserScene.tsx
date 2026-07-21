import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function LayoutPanel({ position, rotation, size, opacity, wire }: { position: [number, number, number]; rotation: [number, number, number]; size: [number, number, number]; opacity: number; wire?: boolean }) {
  return (
    <RoundedBox args={size} radius={0.06} smoothness={4} position={position} rotation={rotation}>
      {wire ? (
        <meshBasicMaterial color="#c5fe37" wireframe transparent opacity={opacity} />
      ) : (
        <meshPhysicalMaterial
          color="#14170d"
          emissive="#3f4d12"
          emissiveIntensity={0.25}
          roughness={0.25}
          metalness={0.4}
          transparent
          opacity={opacity}
        />
      )}
    </RoundedBox>
  );
}

function BrowserStack() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={group}>
      {/* Back layout layers */}
      <LayoutPanel position={[0.5, -0.3, -1.4]} rotation={[0.05, 0.35, -0.03]} size={[3.2, 2, 0.06]} opacity={0.35} />
      <LayoutPanel position={[-0.6, 0.25, -0.7]} rotation={[-0.04, -0.25, 0.02]} size={[3.2, 2, 0.06]} opacity={0.5} />

      {/* Front browser window */}
      <group position={[0, 0, 0.4]}>
        <RoundedBox args={[3.4, 2.15, 0.08]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial color="#0d0f08" roughness={0.2} metalness={0.5} emissive="#1f2610" emissiveIntensity={0.3} />
        </RoundedBox>
        {/* browser chrome bar */}
        <mesh position={[0, 0.95, 0.05]}>
          <boxGeometry args={[3.4, 0.24, 0.02]} />
          <meshBasicMaterial color="#c5fe37" transparent opacity={0.14} />
        </mesh>
        {[-1.5, -1.32, -1.14].map((x, i) => (
          <mesh key={i} position={[x, 0.95, 0.07]}>
            <circleGeometry args={[0.035, 16]} />
            <meshBasicMaterial color="#c5fe37" transparent opacity={0.6} />
          </mesh>
        ))}
        {/* content blocks */}
        {[
          [-0.85, 0.45, 1.3, 0.22],
          [0.3, 0.45, 1.7, 0.22],
          [-0.9, 0.05, 1.1, 0.4],
          [0.65, 0.05, 1.2, 0.4],
        ].map(([x, y, w, h], i) => (
          <mesh key={i} position={[x, y, 0.06]}>
            <planeGeometry args={[w, h]} />
            <meshBasicMaterial color="#c5fe37" transparent opacity={0.08 + (i % 2) * 0.05} />
          </mesh>
        ))}
      </group>

      {/* thin wireframe echo, slightly offset */}
      <LayoutPanel position={[0.15, -0.1, 0.55]} rotation={[0, 0, 0]} size={[3.55, 2.3, 0.02]} opacity={0.18} wire />
    </group>
  );
}

function PointerRig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 1.0 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.6 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function BrowserScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }} dpr={[1, 1.8]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[4, 4, 5]} intensity={60} color="#c5fe37" />
          <pointLight position={[-4, -2, -4]} intensity={35} color="#6b6f5e" />
          <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.55}>
            <BrowserStack />
          </Float>
          <Sparkles count={40} scale={6} size={2} speed={0.2} color="#c5fe37" opacity={0.3} />
          <PointerRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
