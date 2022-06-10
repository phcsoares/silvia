let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // tentando uma foto por face
    let loader = new THREE.TextureLoader();
    const material = [
        'spatula_bumbum', 'alho', 'babuina', 'joia_no_vaso', 'muffler', 'cansada',
    ].map((text) => new THREE.MeshBasicMaterial({ map: loader.load(`./assets/textures/${text}.png`) }));
    console.log(material);

    // // todas as faces com a mesma foto
    // const texture = new THREE.TextureLoader().load('./assets/textures/alho.png');
    // const material = new THREE.MeshLambertMaterial({ map: texture });

    const cube_edge = 3
    const geometry = new THREE.BoxGeometry(cube_edge, cube_edge, cube_edge);

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.007;
    cube.rotation.y += 0.006;
    cube.rotation.z += 0.005;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();