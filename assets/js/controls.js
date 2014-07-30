var controls;
 
 $(document).ready(function(){ 
 
	$( window ).keydown(function(e) {

		if(e.key=="w"){
			meshes.squirrel.position.set((meshes.squirrel.position.x-0.5)+(meshes.squirrel.rotation.y),meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="s"){
			meshes.squirrel.position.set(meshes.squirrel.position.x+0.5,meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="a"){
			meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z+0.5)
		}
		
		if(e.key=="d"){
			meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z-0.5)
		}
		
		renderScene();
		
	});
	
	
	
	$( window ).mousemove(function(e) {
		var mouseX = e.clientX;
		var mouseY = e.clientY;
		var centerX = $(window).width()/2;
		var centerY = $(window).height()/2;
		console.log(camera);
		
		
		meshes.squirrel.rotation.y=(centerX-mouseX)/180;
	
		
		if(mouseY>centerY){
			if(cameraY>=4){
				cameraY=4;
			}
			cameraY=mouseY;
			
			
			meshes.squirrel.rotateY(-0.10);
			camera.rotateY(0.10);
		
		}
		
		if(mouseY<centerY){
			
			cameraY=mouseY;
			if(cameraY<=1){
				cameraY=1;
			}
		
		}
		camera.position.set(3,cameraY*0.05,0);
		camera.lookAt(new THREE.Vector3());
		
	});
	

	//Add to render;
	//render.controls = render();
  
});