import * as THREE from "three";
import "./GLTFLoader";
/*
Loader for GLTF Models
*/
class MyGLTFLoader
{
    constructor()
    {
        this.loader = new THREE.GLTFLoader();
        this.loaded = (gltf) => {};
    }

    //Loading model to scene
    loadToScene(src, scene)
    {
        this.loader.load(
            // resource URL
            src,
            // called when the resource is loaded
            ( gltf ) =>
            {
                scene.add( gltf.scene );
                gltf.scene.children[0].updateMatrixWorld();
                console.log(this.loaded);
                this.loaded(gltf);
            },
            function ( xhr )
            {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            //Throwing Error
            function ( error )
            {
                console.log( 'An error happened' );
            }
        );
    }
}
export default MyGLTFLoader;