import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Line } from "@react-three/drei";
import * as THREE from "three";

function NodeNetwork() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.6;
      pts.push(new THREE.Vector3(r * Math.cos(theta) * Math.sin(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(phi)));
    }
    return pts;
  }, []);

  const lines = useMemo(() => {
    const segs: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.6) segs.push([nodes[i], nodes[j]]);
      }
    }
    return segs;
  }, [nodes]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <MeshDistortMaterial
          color="#1a1e14"
          emissive="#3f4d12"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.7}
          distort={0.28}
          speed={1.6}
        />
      </mesh>
      <mesh scale={1.05}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#c5fe37" wireframe transparent opacity={0.1} />
      </mesh>

      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#c5fe37" : "#6b6f5e"} />
        </mesh>
      ))}

      {lines.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color="#c5fe37" transparent opacity={0.12} lineWidth={1} />
      ))}
    </group>
  );
}

function PointerRig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 1.1 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.7 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function NetworkScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.8]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={70} color="#c5fe37" />
          <pointLight position={[-5, -3, -5]} intensity={40} color="#8890ad" />
          <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
            <NodeNetwork />
          </Float>
          <Sparkles count={60} scale={7} size={2} speed={0.25} color="#c5fe37" opacity={0.35} />
          <PointerRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
