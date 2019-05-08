(function(){


    var panorama, streetViewPanorama, viewer, infospot;

    var cancello, logo, porta, ingresso;

    infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
    infospot.position.set( 3957.4, -744.48, 2956.61 );
    infospot.addHoverText( 'Di qua per la cucina' );

    //panorama = new PANOLENS.ImagePanorama( 'img/salotto.png' );
    //streetViewPanorama = new PANOLENS.GoogleStreetviewPanorama( 'y0rbkep4RBcAAAQqZe0GiQ' );

    cancello = new PANOLENS.ImagePanorama( 'img/1.jpg' );
    logo = new PANOLENS.ImagePanorama( 'img/2.jpg' );
    porta = new PANOLENS.ImagePanorama( 'img/3.jpg' );
    ingresso = new PANOLENS.ImagePanorama( 'img/4.jpg' );

    //panorama.add( infospot );

    viewer = new PANOLENS.Viewer({
        output: 'console',
        viewIndicator: true,
        autoHideInfospot: false
    });
    //viewer.add( panorama );
    //viewer.add( streetViewPanorama );

    viewer.add(cancello);
    viewer.add(logo);
    viewer.add(porta);
    viewer.add(ingresso);


    // Linking between panoramas
    
    // Pair
    //panorama.link( streetViewPanorama, new THREE.Vector3( -3145.23, -2000.40, -2549.48 ) );
    //streetViewPanorama.link( panorama, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );

    cancello.link(logo, new THREE.Vector3( 100, -305.40, -2549.48 ));
    logo.link(porta, new THREE.Vector3( 100, -305.40, -2549.48 ));
    porta.link(ingresso, new THREE.Vector3( -3145.23, -2000.40, -2549.48));

    

}())


function setGaze (target) {
    /**
    * Set line of sight for panolens camera.
    *
    * Panolens uses `THREE.OrbitControls` as a way to control the camera
    * so normal `THREE.PerspectiveCamera.rotation` does NOT work.
    *
    * @param  {THREE.Vector} target - Target to look at.
    */

    const { x, y, z } = target.normalize();
    viewer.camera.position.set(x, -y, -z);
}