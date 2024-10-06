// Set camera position
camera.position.set(0, 30, 30);

// Orbit controls for interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Animation loop for rotation and rendering
function animate() {
    requestAnimationFrame(animate);

    // Rotate each planet around its pivot
    planets.forEach((p, index) => {
        p.pivot.rotation.y += 0.01 * (index + 1); // Faster rotation for inner planets
    });

    controls.update();
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
