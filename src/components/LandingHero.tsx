import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Geometry, ShaderMaterial } from 'three';

const LandingHero = () => {
    const nodesRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            // Update nodes positions based on mouse movement
            if(nodesRef.current) {
                nodesRef.current.position.x = x * 3;
                nodesRef.current.position.y = y * 3;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh ref={nodesRef} position={[0, 0, 0]}>
                <geometry args={[new Geometry()]}/>
                <shaderMaterial attach='material' args={[{
                    transparent: true,
                    uniforms: {
                        time: { value: 0 },
                        mouse: { value: new THREE.Vector2(0, 0) }
                    },
                    vertexShader: `
                        void main() {
                            vec3 pos = position;
                            // React to mouse position
                            pos += vec3(mouse.x * 0.1, mouse.y * 0.1, 0);
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                        }
                    `,
                    fragmentShader: `
                        void main() {
                            gl_FragColor = vec4(1.0, 0.5, 1.0, 1.0);
                        }
                    `
                }]} />
            </mesh>
        </Canvas>
    );
};

export default LandingHero;
