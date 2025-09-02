import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade={true}
        />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <FloatingCube position={[-4, 2, -2]} color="#a855f7" scale={0.8} />
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
          <FloatingCube position={[4, -1, -3]} color="#06b6d4" scale={0.6} />
        </Float>
        
        <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
          <FloatingCube position={[0, 3, -4]} color="#f59e0b" scale={0.4} />
        </Float>
        
        <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.2}>
          <FloatingCube position={[-2, -2, -1]} color="#ec4899" scale={0.5} />
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};