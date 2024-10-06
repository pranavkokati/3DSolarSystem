import * as THREE from 'three';
import {addPlanets} from "./solarsystemmodel/planets";
import {addSun} from "./solarsystemmodel/sun";
import {fetchNEOs} from "./solarsystemmodel/neos";
import {OrbitControls} from "three/addons";

// Set up the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 10);

// Set up the renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);

renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Orbit controls for interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;


let planets = addPlanets(scene);
addSun(scene);

function animate() {
    requestAnimationFrame(animate);
    // planets.forEach((p, index) => {
    //     p.pivot.rotation.y += 0.01 * (index + 1); // Faster rotation for inner planets
    // });
    controls.update();
    renderer.render(scene, camera);
}
console.log("starting animation")
animate();


