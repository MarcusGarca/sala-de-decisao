"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { useReducedMotion, useScroll, type MotionValue } from "framer-motion";
import * as THREE from "three";

type CosmosProps = {
  compact: boolean;
  reduceMotion: boolean;
  scrollProgress: MotionValue<number>;
};

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleGalaxy({ compact, reduceMotion }: Pick<CosmosProps, "compact" | "reduceMotion">) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = compact ? 420 : 1050;
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 5 + seededRandom(index + 1) * 25;
      const angle = seededRandom(index + 10) * Math.PI * 2;
      const armOffset = Math.sin(angle * 2.4) * 2.8;
      data[index * 3] = Math.cos(angle) * radius + armOffset;
      data[index * 3 + 1] = (seededRandom(index + 20) - 0.5) * 18;
      data[index * 3 + 2] = -seededRandom(index + 30) * 42 + 8;
    }
    return data;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current && !reduceMotion) pointsRef.current.rotation.z += delta * 0.006;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#7dd3fc" size={compact ? 0.075 : 0.095} sizeAttenuation depthWrite={false} opacity={0.88} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

function ConstellationNetwork({ compact }: Pick<CosmosProps, "compact">) {
  const geometry = useMemo(() => {
    const nodes = compact ? 34 : 72;
    const points: THREE.Vector3[] = [];
    for (let index = 0; index < nodes; index += 1) {
      points.push(new THREE.Vector3((seededRandom(index + 90) - 0.5) * 34, (seededRandom(index + 120) - 0.5) * 17, -seededRandom(index + 150) * 32));
    }
    const segments: number[] = [];
    points.forEach((point, index) => {
      points.slice(index + 1).forEach((other) => {
        if (point.distanceTo(other) < 4.15 && segments.length < (compact ? 240 : 620)) segments.push(point.x, point.y, point.z, other.x, other.y, other.z);
      });
    });
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.Float32BufferAttribute(segments, 3));
    return buffer;
  }, [compact]);

  useEffect(() => () => geometry.dispose(), [geometry]);
  return <lineSegments geometry={geometry}><lineBasicMaterial color="#0ea5e9" transparent opacity={compact ? 0.1 : 0.15} blending={THREE.AdditiveBlending} /></lineSegments>;
}

function CameraRig({ compact, reduceMotion, scrollProgress }: CosmosProps) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const scroll = scrollProgress.get();
    const pointerX = reduceMotion ? 0 : state.pointer.x;
    const pointerY = reduceMotion ? 0 : state.pointer.y;
    const targetX = pointerX * (compact ? 0.22 : 0.55);
    const targetY = pointerY * (compact ? 0.16 : 0.36);
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetX, 2.4, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetY - scroll * 1.8, 2.4, delta);
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, 9 - scroll * 7.5, 2.1, delta);
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, pointerX * 0.08 + scroll * 0.18, 1.8, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -pointerY * 0.05, 1.8, delta);
    }
  });
  return <group ref={groupRef}><ParticleGalaxy compact={compact} reduceMotion={reduceMotion} /><ConstellationNetwork compact={compact} /></group>;
}

function CosmosFallback() {
  return <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(6,182,212,.18),transparent_34%),radial-gradient(circle_at_78%_62%,rgba(37,99,235,.14),transparent_38%),#020617]" />;
}

export default function TechBackground() {
  const [compact, setCompact] = useState(true);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020617]">
      <CosmosFallback />
      <Suspense fallback={null}>
        <Canvas
          className="absolute inset-0"
          camera={{ position: [0, 0, 9], fov: compact ? 67 : 58, near: 0.1, far: 100 }}
          dpr={compact ? 1 : [1, 1.5]}
          gl={{ alpha: true, antialias: !compact, powerPreference: "high-performance" }}
          fallback={<CosmosFallback />}
        >
          <color attach="background" args={["#020617"]} />
          <fog attach="fog" args={["#020617", 16, 54]} />
          <CameraRig compact={compact} reduceMotion={reduceMotion} scrollProgress={scrollYProgress} />
        </Canvas>
      </Suspense>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,.62)_100%)]" />
    </div>
  );
}
