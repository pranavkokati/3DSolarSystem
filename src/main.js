import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {getJulianDate,meanAnomaly,equationOfCenter,trueAnomaly,distanceToSun,helioCoords} from "./solarsystemmodel/formulas";
import {calculateCometPosition, getCometInfo} from "./solarsystemmodel/comet";

let scene, camera, renderer, controls;
let animationId;
let isPlaying = false;
let currentDate;
let speed = 1; // Default speed

// Texture loading
const textures = [];
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const starsTexture = cubeTextureLoader.load([
    "https://i.imgur.com/gLGNnkp.jpeg",
    "https://i.imgur.com/gLGNnkp.jpeg",
    "https://i.imgur.com/gLGNnkp.jpeg",
    "https://i.imgur.com/gLGNnkp.jpeg",
    "https://i.imgur.com/gLGNnkp.jpeg",
    "https://i.imgur.com/gLGNnkp.jpeg",
]);
const sunTexture = textureLoader.load("https://i.imgur.com/zU5oOjt.jpeg");
const mercuryTexture = textureLoader.load(
    "https://i.imgur.com/TJO6Te3.jpeg"
);
const venusTexture = textureLoader.load(
    "https://i.imgur.com/xeaPIjD.jpeg"
);
const earthTexture = textureLoader.load(
    "https://i.imgur.com/vflkkqF.jpeg"
);
const marsTexture = textureLoader.load(
    "https://i.imgur.com/U6upjrv.jpeg"
);
const jupiterTexture = textureLoader.load(
    "https://i.imgur.com/4APG00k.jpeg"
);
const saturnTexture = textureLoader.load(
    "https://i.imgur.com/YKw0m4x.jpeg"
);
const uranusTexture = textureLoader.load(
    "https://i.imgur.com/olpgGMo.jpeg"
);
const neptuneTexture = textureLoader.load(
    "https://i.imgur.com/pycXdLM.jpeg"
);
const plutoTexture = textureLoader.load(
    "https://i.imgur.com/YNsmmHV.jpeg"
);

textures.push(
    starsTexture,
    sunTexture,
    mercuryTexture,
    venusTexture,
    earthTexture,
    marsTexture,
    jupiterTexture,
    saturnTexture,
    uranusTexture,
    neptuneTexture,
    plutoTexture
);

// Initialize Three.js scene
function init() {
    scene = new THREE.Scene();
    scene.background = starsTexture; // Set the background texture

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
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enablePan= true;
    controls.minDistance = 1;
    controls.maxDistance = 300;
    camera.position.set(0, 2, 5); // Set camera position
    controls.update();

    animate();
}

// Animation loop
function animate() {
    animationId = requestAnimationFrame(animate);
    if (isPlaying && currentDate) {
        currentDate.setDate(currentDate.getDate() + speed); // Increment the date
        const julianDate = getJulianDate(currentDate);
        document.getElementById("jd").innerHTML = julianDate;
        document.getElementById("gd").innerHTML = currentDate;
        updatePlanets(julianDate); // Update planet positions
        updateComets(julianDate); // Update comet positions
    }
    controls.update();
    renderer.render(scene, camera);
}

function updateLabels(){

}

function createLabel(text) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "24px Arial";
    context.fillStyle = "white";
    context.fillText(text, 0, 24);
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1, 0.5, 2); // Scale the label size
    return sprite;
}

function createOrbit(planet) {
    const points = [];
    const steps = 360000; // Use 360 points for a smoother orbit

    // Generate points along the orbit
    for (let i = 0; i < steps; i++) {
        i += 1;
        const M = meanAnomaly(2451545 + (i * 365.25) / steps, planet); // Adjust for full orbit
        const C = equationOfCenter(M, planet);
        const v = trueAnomaly(M, C);
        const r = distanceToSun(v, planet);
        const coords = helioCoords(v, planet, r);
        points.push(new THREE.Vector3(coords[0], coords[1], coords[2]));
    }

    // Create geometry from points
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const indices = [];

    // Create pairs of indices for line segments
    for (let i = 0; i < points.length - 1; i++) {
        indices.push(i, i + 1);
    }

    geometry.setIndex(indices);

    const material = new THREE.LineDashedMaterial({
        color: 0xaaaaaa,
        dashSize: 100,
        gapSize: 30,
    });

    const orbitLine = new THREE.LineSegments(geometry, material);
    orbitLine.computeLineDistances(); // Important for dashed lines

    return orbitLine;
}

export function updatePlanets(julianDate) {
    const planetaryNames = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
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


    plotPoints(results); // Plot the updated points
}

export function updateComets(julianDate) {
    const cometNames = [
        "1P/Halley",
        "P/2004 R1 (McNaught)",
        "P/2008 S1 (Catalina-McNaught)",
        "2P/Encke",
        "3D/Biela",
    ];
    const cometResults = cometNames
        .map((cometName) => {
            const cometInfo = getCometInfo(cometName);
            if (cometInfo) {
                const coords = calculateCometPosition(cometInfo, julianDate);
                return {
                    name: cometName,
                    coords: coords,
                };
            }
        })
        .filter(Boolean);

    plotComets(cometResults); // Plot the updated comet positions
}

function plotComets(cometData) {
    // Clear previous comet positions
    const cometMeshes = scene.children.filter(
        (child) => child.userData && child.userData.type === "comet"
    );
    cometMeshes.forEach((cometMesh) => scene.remove(cometMesh));

    // Create comet meshes
    cometData.forEach(({ name, coords }) => {
        const geometry = new THREE.SphereGeometry(0.02, 32, 32); // Smaller size for comets
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const cometMesh = new THREE.Mesh(geometry, material);
        cometMesh.position.set(coords[0], coords[1], coords[2]);
        cometMesh.userData = { type: "comet" }; // Tag the comet mesh
        scene.add(cometMesh);
    });
}

function plotPoints(planetData) {
    // Clear previous points and orbits
    while (scene.children.length > 1) {
        scene.remove(scene.children[1]);
    }

    // Define the textures for each planet and the Sun
    const planetTextures = {
        Mercury: mercuryTexture,
        Venus: venusTexture,
        Earth: earthTexture,
        Mars: marsTexture,
        Jupiter: jupiterTexture,
        Saturn: saturnTexture,
        Uranus: uranusTexture,
        Neptune: neptuneTexture,
        Sun: sunTexture, // Add sun texture
    };

    // Add the Sun at the origin (0, 0, 0), reduced size
    const sunGeometry = new THREE.SphereGeometry(0.1, 16, 16); // 15% smaller
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture }); // Use texture
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.position.set(0, 0, 0); // Ensure the Sun is at the origin
    scene.add(sunMesh); // Add Sun to the scene

    // Plot each planet and its orbit
    planetData.forEach(({ name, coords }) => {
        // Create and add orbit line for Mercury, Venus, and Earth
        if (["Mercury", "Venus", "Earth"].includes(name)) {
            const orbitLine = createOrbit(name);
            scene.add(orbitLine);
        }

        // Create planet mesh
        const geometry = new THREE.SphereGeometry(0.05, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            map: planetTextures[name], // Use corresponding texture
        });
        const planetMesh = new THREE.Mesh(geometry, material);
        planetMesh.position.set(coords[0], coords[1], coords[2]);
        scene.add(planetMesh);

        // Add label for the planet
        const sprite = createLabel(name);
        sprite.position.set(
            coords[0] + 0.25,
            coords[1] + 0,
            coords[2] + 0.01,
        ); // Offset the label
        planetMesh.userData.label = sprite;
        scene.add(sprite);
    });
}

// Event listeners for buttons
document
    .getElementById("calculateButton")
    .addEventListener("click", () => {
        const dateInput = document.getElementById("dateInput").value;
        if (dateInput) {
            currentDate = new Date(dateInput);
            const julianDate = getJulianDate(currentDate);
            document.getElementById("jd").innerHTML = julianDate;
            document.getElementById("gd").innerHTML =
                currentDate.toDateString();
            updatePlanets(julianDate);
        }
    });

document.getElementById("playButton").addEventListener("click", () => {
    isPlaying = true;
});

document.getElementById("pauseButton").addEventListener("click", () => {
    isPlaying = false;
});

document
    .getElementById("speedSlider")
    .addEventListener("input", (event) => {
        speed = parseInt(event.target.value);
    });

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init(); // Initialize the scene