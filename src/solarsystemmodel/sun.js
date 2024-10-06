// Create the Sun
import * as THREE from "three";

export function addSun (scene){
    const sunGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, 0, 0); // Ensure the Sun is at the origin
    scene.add(sun);
}
