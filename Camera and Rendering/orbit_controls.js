// Import Three.js and OrbitControls
import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

// Global variables
let camera, scene, renderer, controls;

// Initialize the scene
function init() {
    // Create the renderer with antialiasing and set pixel ratio for high-DPI screens
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Create a scene
    scene = new THREE.Scene();

    // Create a camera with perspective projection
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Add orbit controls for smoother user interactions
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (smooth camera movement)
    controls.dampingFactor = 0.05;
    controls.enablePan = false;    // Disable panning
    controls.maxDistance = 100;    // Set maximum zoom-out distance
    controls.minDistance = 1;      // Set minimum zoom-in distance
    
    // Handle window resize events
    window.addEventListener('resize', onWindowResize, false);

    // Start rendering the scene
    animate();
