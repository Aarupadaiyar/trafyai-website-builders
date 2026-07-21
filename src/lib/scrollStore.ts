import { useSyncExternalStore } from "react";

export const scrollStore = {
  progress: 0,
  velocity: 0,
  heroProgress: 0,
};

const listeners = new Set<() => void>();

export function notifyScrollStore() {
  listeners.forEach((l) => l());
}

export function useScrollProgress() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => scrollStore.progress
  );
}
