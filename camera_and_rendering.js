import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add ambient lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

// Set the camera position
camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
