// utils/lerp.ts
import * as THREE from "three";

// easing nhẹ nhàng, có thể thay bằng ease khác nếu thích
export const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// nội suy số
export const lerp = THREE.MathUtils.lerp;

// damp số theo thời gian (mượt hơn khi scroll giật)
export const damp = THREE.MathUtils.damp;
