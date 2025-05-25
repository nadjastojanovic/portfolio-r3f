import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'

import Screen from './Screen'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/mac-draco.glb')

  // Floating animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['Cube008'].geometry} material={materials.aluminium} />
          <mesh geometry={nodes['Cube008_1'].geometry} material={materials['matte.001']} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Html
              className="content"
              transform
              occlude
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
            >
              <Screen />
            </Html>
          </mesh>
        </group>
      </group>
      <mesh geometry={nodes.keyboard.geometry} material={materials.keys} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh geometry={nodes['Cube002'].geometry} material={materials.aluminium} />
        <mesh geometry={nodes['Cube002_1'].geometry} material={materials.trackpad} />
      </group>
      <mesh geometry={nodes.touchbar.geometry} material={materials.touchbar} position={[0, -0.03, 1.2]} />
    </group>
  )
}
