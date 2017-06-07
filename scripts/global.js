var camera, scene, renderer, cube, material, mesh, W, H;

function init() {
    scene = new THREE.Scene();

    W = parseInt( window.innerWidth );
    H = parseInt( window.innerHeight );

    camera = new THREE.PerspectiveCamera( 80, W / H, 1, 10000 );

    camera.position.z = 1500;
    scene.add( camera );

    cube = new THREE.CubeGeometry( 300, 300, 300 );

    material = new THREE.MeshBasicMaterial( { color: 0xEF233C, wireframe: true } );
    mesh = new THREE.Mesh( cube, material );
    scene.add( mesh );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( W, H );

    document.body.appendChild( renderer.domElement );

    animate();
}

function animate() {
    requestAnimationFrame( animate );

    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );
}
