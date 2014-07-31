console.log("loaded level 1");

//INIT
function levelInit(){
	
	console.log("levelInit");

	var ObjectLoader = new THREE.ObjectLoader().load('./assets/js/levels/mesh_level1.js', function (geometry) {
			console.log("mesh_level1");
			
			var mat=new THREE.MeshLambertMaterial({ // Three.js material
        color: 0xeeeeee
      });
			  meshes.level=new Physijs.BoxMesh(geometry,mat,0 );
			  meshes.level.scale.set(3,3,3);
			  meshes.level.position.set(0, 0, 0);
			  scene.add(meshes.level);
	});	
	

};
