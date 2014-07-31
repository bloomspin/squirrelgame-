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
	
	var init = false;
	
	$( window ).keyup(function(e) {

		if(e.key=="w"){	
			playerUp = false;
			//meshes.squirrel.position.set((meshes.squirrel.position.x-0.5)+(meshes.squirrel.rotation.y),meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="s"){		
			playerDown = false;
			//meshes.squirrel.position.set(meshes.squirrel.position.x+0.5,meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="a"){
			playerLeft = false;
			//meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z+0.5)
		}
		
		if(e.key=="d"){
			playerRight = false;
			//meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z-0.5)
		}		
		});
	
	$( window ).keydown(function(e) {

		if(e.key=="w"){	
			playerUp = true;
			//meshes.squirrel.position.set((meshes.squirrel.position.x-0.5)+(meshes.squirrel.rotation.y),meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="s"){		
			playerDown = true;
			//meshes.squirrel.position.set(meshes.squirrel.position.x+0.5,meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(e.key=="a"){
			playerLeft = true;
			//meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z+0.5)
		}
		
		if(e.key=="d"){
			playerRight = true;
			//meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z-0.5)
		}		
		
		if (e.key == " "){			
		}
		
		renderScene();		
	});
	
	$( window ).on("updateScene", function(e) {
		if (cameraMoveDown){			
			// Orbit camera up
		}
		
		if (cameraMoveUp){		
			// Orbit camera down
		}
		
		if (cameraMoveLeft){			
			camera.rotateY(0.01);
		}
		
		if (cameraMoveRight){
			camera.rotateY(-0.01);
		}		
		
		if(playerUp){
			meshes.squirrel.position.set((meshes.squirrel.position.x-0.5)+(meshes.squirrel.rotation.y),meshes.squirrel.position.y,meshes.squirrel.position.z)		
		}
		
		if(playerDown){
			meshes.squirrel.position.set(meshes.squirrel.position.x+0.5,meshes.squirrel.position.y,meshes.squirrel.position.z)
		}
		
		if(playerLeft){
			meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z+0.5)
		}
		
		if(playerRight){
			meshes.squirrel.position.set(meshes.squirrel.position.x+meshes.squirrel.rotation.y,meshes.squirrel.position.y,meshes.squirrel.position.z-0.5)
		}	
	});
	
	$( window ).mousemove(function(e) {
		var mouseX = e.clientX;
		var mouseY = e.clientY;
		var centerX = $(window).width()/2;
		var centerY = $(window).height()/2;
		
		if (mouseX < centerX - centerX * 0.1){
			console.log("left");
			cameraMoveRight = false;
			cameraMoveLeft = true;
		} else if (mouseX > centerX + centerX * 0.1){
			console.log("right");
			cameraMoveRight = true;
			cameraMoveLeft = false;
		} else {
			console.log("Clear left/right");
			cameraMoveRight = false;
			cameraMoveLeft = false;						
		}
		
		if(mouseY < centerY - centerY * 0.80){
			console.log("up");
			cameraMoveDown = false;
			cameraMoveUp = true;
		} else if (mouseY > centerY + centerY * 0.80){
			console.log("down");
			cameraMoveDown = true;
			cameraMoveUp = false;
		} else {
			console.log("Clear up/down");
			cameraMoveDown = false;
			cameraMoveUp = false;			
		}
		
		if (!cameraMoveDown && !cameraMoveUp && !cameraMoveLeft && !cameraMoveRight){
			init = false;
		}
		
		if (!init){
			camera.lookAt(new THREE.Vector3());	
			init = true;
		}
		camera.position.set(3, 0.8, 0);		
	});
	

	//Add to render;
	//render.controls = render();
  
});