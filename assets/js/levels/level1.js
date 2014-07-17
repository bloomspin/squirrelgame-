var level = {};

//INIT
level.init = function(){

//add a create
  var crateSize = 5;
  meshes.crate = basicCrate(crateSize);
  meshes.crate.position.set(10, crateSize/2, 0);
  scene.add( meshes.crate);


};