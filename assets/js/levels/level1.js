console.log("loaded level 1");
var level = new Object();

//INIT
function levelInit(){


	
	var loader = new THREE.JSONLoader();
    loader.load('mesh_level1.js', function (geometry) {
			// create a new material
			  meshes.level = new THREE.Mesh(
				geometry
			  );
			  meshes.level.scale.set(100,100,100);
			  meshes.level.position.set(0, 0, 0);
			  scene.add(meshes.level);
			  		  
	});		
	
	
	

};
