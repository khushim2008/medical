import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./BrainModel.css";

const BrainModel = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup existing renderer
    if (rendererRef.current) {
      rendererRef.current.dispose();
      containerRef.current.innerHTML = "";
    }

    // Create Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / 500, 0.1, 1000);
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, 500);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Load the 3D Brain Model
    const loader = new GLTFLoader();
    loader.load(
      "/medical/human_brain/scene.gltf",  // Update this if the path is different
      (gltf) => {
        if (modelRef.current) {
          scene.remove(modelRef.current);
        }

        modelRef.current = gltf.scene;
        scene.add(gltf.scene);
        gltf.scene.position.set(0, -1, 0);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // Slow rotation
          }
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    return () => {
      // Cleanup when unmounting
      if (modelRef.current) {
        scene.remove(modelRef.current);
        modelRef.current = null;
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="brain-model-container">
      <h1>3D Brain Model</h1>
      <div ref={containerRef} className="threejs-container"></div>
    </div>
  );
};

export default BrainModel;
