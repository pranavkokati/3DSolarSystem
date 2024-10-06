import * as THREE from 'three';
import { addSun } from "./solarsystemmodel/sun";
import { fetchNEOs } from "./solarsystemmodel/neos";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Correct path for OrbitControls
import {getJulianDate, meanAnomaly, equationOfCenter,trueAnomaly, distanceToSun, helioCoords, planetaryData }  from "./solarsystemmodel/formulas"
let scene, camera, renderer, controls;

// Initialize Three.js scene
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("plot").appendChild(renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);

    camera.position.set(0, 2, 5); // Set camera position
    controls.update();
    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function plotPoints(planetData) {
    // Clear previous points
    while (scene.children.length > 1) {
        scene.remove(scene.children[1]);
    }

    // Define colors for each planet and the Sun
    const planetColors = {
        Mercury: 0xa99a8d, // Gray
        Venus: 0xe9cba0, // Yellowish
        Earth: 0x3b5c7a, // Blue
        Mars: 0xd84a3a, // Red
        Jupiter: 0xd1a34d, // Brown
        Saturn: 0xe0c48d, // Light Brown
        Uranus: 0x3aabbf, // Light Blue
        Neptune: 0x4a9dd6, // Dark Blue
        Pluto: 0xb2a1c5, // Light Purple
    };

    // Add the Sun at the origin (0, 0, 0)
    addSun(scene);

    // Plot each planet
    planetData.forEach(({ name, coords }) => {
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: planetColors[name],
        });
        const planetMesh = new THREE.Mesh(geometry, material);
        planetMesh.position.set(coords[0], coords[1], coords[2]);
        scene.add(planetMesh);
    });
}

// Event listener for the button
document
    .getElementById("calculateButton")
    .addEventListener("click", () => {
        const dateInput = document.getElementById("dateInput").value;
        if (dateInput) {
            const date = new Date(dateInput);
            const julianDate = getJulianDate(date); // You need to implement this
            const resultText = `Julian Date: ${julianDate.toFixed(5)}\n\n`;

            // Calculate all necessary values for each planet
            const planetaryNames = [
                "Mercury",
                "Venus",
                "Earth",
                "Mars",
                "Jupiter",
                "Saturn",
                "Uranus",
                "Neptune",
                "Pluto",
            ];
            const results = planetaryNames.map((planet) => {
                const M = meanAnomaly(julianDate, planet); // Implement this
                const C = equationOfCenter(M, planet); // Implement this
                const v = trueAnomaly(M, C); // Implement this
                const r = distanceToSun(v, planet); // Calculate distance to the Sun
                const coords = helioCoords(v, planet, r); // Calculate heliocentric coordinates

                return {
                    name: planet,
                    coords: coords,
                };
            });

            console.log(results.map((planet) => `${planet.name} plotted`).join("\n"));
            // document.getElementById("result").innerText =
            //     resultText +
            //     results.map((planet) => `${planet.name} plotted.`).join("\n");

            // Plot the points
            plotPoints(results);
        } else {
            document.getElementById("result").innerText =
                "Please select a date.";
        }
    });

init();