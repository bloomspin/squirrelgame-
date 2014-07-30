console.log("loaded level 1");
var level = new Object();

//INIT
function levelInit(){

	//add a create
  var crateSize = 5;
  meshes.crate = basicCrate(crateSize);
  meshes.crate.position.set(10, crateSize/2, 0);
  scene.add( meshes.crate);
  
   var crateSize = 5;
  meshes.crate = basicCrate(crateSize);
  meshes.crate.position.set(20, crateSize/2, 0);
  scene.add( meshes.crate);
	
	var loader = new THREE.JSONLoader();
    loader.load('./mesh/building1.js', function (geometry) {
			// create a new material
			  meshes.building1 = new THREE.Mesh(
				geometry
			  );
			  meshes.building1.scale.set(2,2,2);
			  meshes.building1.position.set(10, 0, 30);
			  scene.add(meshes.building1);
			  		  
	});		
	

};
