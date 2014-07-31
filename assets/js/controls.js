var controls;
 
 $(document).ready(function(){ 
	var cameraMoveUp = false;
	var cameraMoveDown = false;
	var cameraMoveLeft = false;
	var cameraMoveRight = false;
	
	var playerUp = false;
	var playerDown = false;
	var playerLeft = false;
	var playerRight = false;
	
	$( window ).keydown(function(e) {

		if(e.key=="w"){
			//meshes.squirrel.position.set((meshes.squirrel.position.x-0.5)+(meshes.squirrel.rotation.y),meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="s"){
			//meshes.squirrel.position.set(meshes.squirrel.position.x+0.5,meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="a"){
			//meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z+0.5)
		}
		
		if(e.key=="d"){
			//meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z-0.5)
		}		
		
		renderScene();		
	});
	
	$( window ).on("updateScene", function(e) {
		
	}
	
	$( window ).mousemove(function(e) {
		var mouseX = e.clientX;
		var mouseY = e.clientY;
		var centerX = $(window).width()/2;
		var centerY = $(window).height()/2;
		
		if (mouseX < centerX - centerX * 0.75){
			console.log("left");
			cameraMoveRight = false;
			cameraMoveLeft = true;
		} else if (mouseX > centerX + centerX * 0.75){
			console.log("right");
			cameraMoveRight = true;
			cameraMoveLeft = false;
		} else {
			console.log("Clear left/right");
			cameraMoveRight = false;
			cameraMoveLeft = false;
		}
		
		if(mouseY < centerY - centerY * 0.5){
			console.log("up");
			cameraMoveDown = false;
			cameraMoveUp = true;
		} else if (mouseY > centerY + centerY * 0.5){
			console.log("down");
			cameraMoveDown = true;
			cameraMoveUp = false;
		} else {
			console.log("Clear up/down");
			cameraMoveDown = false;
			cameraMoveUp = false;
		}
		camera.position.set(3, 0.8, 0);
		camera.lookAt(new THREE.Vector3());
		
	});
	

	//Add to render;
	//render.controls = render();
  
});