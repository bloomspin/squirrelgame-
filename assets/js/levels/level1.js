console.log("loaded level 1");

//INIT
function levelInit(){
	
	console.log("levelInit");
	
	 ObjectLoader.load('./assets/js/levels/meshlevel1.js', function (geometry) {
			  console.log("mesh_level1");
			    meshes.level=[];
				var level = new THREE.Object3D()
				geometry.traverse( function ( child ) {
				
						if ( child instanceof THREE.Mesh ) {
						
						var ground_material =new Physijs.createMaterial( // Physijs material
							child.material,
								.4, // friction
								.8 // restitution
							);
						
							  meshes.level[child.id]=new Physijs.BoxMesh(child.geometry,ground_material,0);
							  console.log(child);
							  meshes.level[child.id].scale.set(child.scale.x, child.scale.y, child.scale.z);	
							  meshes.level[child.id].position.set(child.position.x, child.position.y, child.position.z);	
							  scene.add(meshes.level[child.id]);

						}

					} );
					
					console.log(level);
			//level.scale.set(10, 10, 10);
			level.position.set(0, 0, 0);		
			scene.add(level);//return group;
			  
	});	
	

};
