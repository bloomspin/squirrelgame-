console.log("loaded level 1");
var level = new Object();

//INIT
function levelInit(){
	console.log("init");
	//add a create
  var crateSize = 5;
  meshes.crate = basicCrate(crateSize);
  meshes.crate.position.set(10, crateSize/2, 0);
  scene.add( meshes.crate);
  
   var crateSize = 5;
  meshes.crate = basicCrate(crateSize);
  meshes.crate.position.set(20, crateSize/2, 0);
  scene.add( meshes.crate);
	

};