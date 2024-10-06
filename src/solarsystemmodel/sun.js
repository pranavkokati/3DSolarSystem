// Create the Sun
import * as THREE from "three";

export function addSun (scene){
    const sunGeometry = new THREE.SphereGeometry(1, 12, 12);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
}
