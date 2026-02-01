import "./Hero.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure = 0.7;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    let camera;
    let controls;

    const keyLight = new THREE.RectAreaLight(0xffffff, 7.5, 1425.9, 732.6);
    keyLight.position.set(1633.3, 265.0, 991.7);
    keyLight.rotation.set(
      (-10.38 * Math.PI) / 180,
      (64.25 * Math.PI) / 180,
      (101.5 * Math.PI) / 180,
    );
    scene.add(keyLight);

    const fillLight = new THREE.RectAreaLight(0xffffff, 2.49, 1425.9, 732.6);
    fillLight.position.set(-177.6, -1659, 991.7);
    fillLight.rotation.set(
      (64.58 * Math.PI) / 180,
      (-5.3 * Math.PI) / 180,
      (-2.51 * Math.PI) / 180,
    );
    scene.add(fillLight);

    const backLight = new THREE.RectAreaLight(0xffffff, 3.6, 973, 574.6);
    backLight.position.set(-521.9, 1002, 0.61);
    backLight.rotation.set((-90 * Math.PI) / 180, (-45.3 * Math.PI) / 180, 0);
    scene.add(backLight);

    const shadowLight = new THREE.DirectionalLight(0xffffff, 2);
    shadowLight.position.set(1633.3, 265.0, 991.7);
    shadowLight.castShadow = true;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;
    shadowLight.shadow.camera.near = 0.5;
    shadowLight.shadow.camera.far = 5000;
    shadowLight.shadow.camera.left = -1000;
    shadowLight.shadow.camera.right = 1000;
    shadowLight.shadow.camera.top = 1000;
    shadowLight.shadow.camera.bottom = -1000;
    scene.add(shadowLight);

    // Optional: Add minimal ambient light for very dark areas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(
      "/src/assets/models/ari-web-head-3d.glb",
      function (gltf) {
        scene.add(gltf.scene);

        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              const originalColor = child.material.color.clone();
              const gray =
                originalColor.r * 0.299 +
                originalColor.g * 0.587 +
                originalColor.b * 0.114;
              child.material.color.r = gray + (originalColor.r - gray) * 0.5;
              child.material.color.g = gray + (originalColor.g - gray) * 0.5;
              child.material.color.b = gray + (originalColor.b - gray) * 0.5;

              // If it's the ground plane, enhance reflectivity
              if (
                child.name.toLowerCase().includes("floor") ||
                child.name.toLowerCase().includes("ground") ||
                child.name.toLowerCase().includes("plane")
              ) {
                child.material.roughness = 1; // Make it more reflective
                child.material.metalness = 0.1;
              }

              child.material.needsUpdate = true;
            }
          }
        });

        if (gltf.cameras && gltf.cameras.length > 0) {
          camera = gltf.cameras[0];
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        } else {
          camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
          );
          camera.position.set(0, 0, 5);
        }

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;

        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.error("Error loading GLB:", error);
      },
    );

    function animate() {
      requestAnimationFrame(animate);
      if (controls) controls.update();
      if (camera) renderer.render(scene, camera);
    }

    const handleResize = () => {
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (controls) controls.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero">
      {/* <div ref={containerRef} id="hero-background"></div> */}

      <iframe
        src="https://app.vectary.com/p/4Z9cAweXRzUMw2U0NcHia3"
        frameborder="0"
        width="100%"
        height="100%"
        allow="xr-spatial-tracking; fullscreen;"
      ></iframe>
      <div className="hero-content">
        <h1>Alternate Reality Initiative</h1>
        <h2>University of Michigan</h2>
      </div>
    </div>
  );
}

export default Hero;
