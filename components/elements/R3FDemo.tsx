"use client";

import * as THREE from 'three'
// import { createRoot } from 'react-dom/client'
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';
import { useScrollState } from "@/contexts/ScrollContext";
import { damp, easeInOutCubic, lerp } from '../utils/lerp';

const data = {
  start: {
    position: [0, -1, 0] as [number, number, number],
    scale: 2,
    rotation: [-0.5, 0.5, 0.5] as [number, number, number],
  },
  end: {
    position: [0, 0, 0] as [number, number, number],
    scale: 1,
    rotation: [0, 0, 0] as [number, number, number],
  }
};

const Phone = () => {
  const gltf = useGLTF('/scene.gltf'); // or .glb
  return <primitive object={gltf.scene} />;
};

const Box = ((props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { activeIndex, progress } = useScrollState();

  // Chuẩn bị vector đích để tránh cấp phát mỗi frame
  const startPos = useMemo(() => new THREE.Vector3(...data.start.position), []);
  const endPos = useMemo(() => new THREE.Vector3(...data.end.position), []);
  const tmpTargetPos = useMemo(() => new THREE.Vector3(), []);
  const tmpCurrentPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // 1) Quy ước t theo section
    let t = 0;
    if (activeIndex === 0) t = progress;   // đang ở Section A
    else if (activeIndex > 0) t = 1;       // đã lướt qua Section A

    // 2) Easing để vào/ra mượt
    const te = easeInOutCubic(THREE.MathUtils.clamp(t, 0, 1));

    // 3) Tính target “giá trị nội suy theo t”
    // Position
    tmpTargetPos.set(
      lerp(startPos.x, endPos.x, te),
      lerp(startPos.y, endPos.y, te),
      lerp(startPos.z, endPos.z, te)
    );

    // Scale (uniform)
    const targetScale = lerp(data.start.scale, data.end.scale, te);

    // Rotation (Euler XYZ)
    const targetRotX = lerp(data.start.rotation[0], data.end.rotation[0], te);
    const targetRotY = lerp(data.start.rotation[1], data.end.rotation[1], te);
    const targetRotZ = lerp(data.start.rotation[2], data.end.rotation[2], te);

    // 4) DAMP từ trạng thái hiện tại về target (mượt + độc lập FPS)
    // position
    tmpCurrentPos.copy(mesh.position);
    mesh.position.set(
      damp(tmpCurrentPos.x, tmpTargetPos.x, 8, delta), // 8 = hệ số "tốc độ" mượt
      damp(tmpCurrentPos.y, tmpTargetPos.y, 8, delta),
      damp(tmpCurrentPos.z, tmpTargetPos.z, 8, delta)
    );

    // scale
    const cS = mesh.scale.x; // uniform nên lấy x
    const s = damp(cS, targetScale, 8, delta);
    mesh.scale.set(s, s, s);

    // rotation
    mesh.rotation.set(
      damp(mesh.rotation.x, targetRotX, 8, delta),
      damp(mesh.rotation.y, targetRotY, 8, delta),
      damp(mesh.rotation.z, targetRotZ, 8, delta)
    );
  });

  return (
    <mesh {...props} ref={meshRef}>
      <Phone />
    </mesh>
  )
})

export const R3FDemo = () => {

  return <div className="w-dvw h-dvh border border-neutral-900">
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box />

    </Canvas>
  </div >
}