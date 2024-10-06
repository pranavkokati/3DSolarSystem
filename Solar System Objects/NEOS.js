async function fetchNEOs() {
    const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=DEMO_KEY');
    const data = await response.json();
    const neoData = data.near_earth_objects;

    // Loop through NEOs and add them to the scene
    Object.keys(neoData).forEach(date => {
        neoData[date].forEach(neo => {
            const neoGeometry = new THREE.SphereGeometry(0.2, 16, 16);
            const neoMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const neoObject = new THREE.Mesh(neoGeometry, neoMaterial);

            // Approximate position and scale of NEO
            const distanceFromSun = neo.close_approach_data[0].miss_distance.kilometers / 1e6;
            neoObject.position.x = distanceFromSun;
            scene.add(neoObject);
        });
    });
}

fetchNEOs();
