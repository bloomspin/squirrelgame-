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
	
	var clamp = function(num, min, max) {
		return num < min ? min : (num > max ? max : num);
	};
	
	$( window ).keyup(function(e) {

		if(e.key=="w"){	
			playerUp = false;			
		}
		
		if(e.key=="s"){		
			playerDown = false;			
		}
		
		if(e.key=="a"){
			playerLeft = false;			
		}
		
		if(e.key=="d"){
			playerRight = false;			
		}		
		});
	
	$( window ).keydown(function(e) {

		if(e.key=="w"){	
			playerUp = true;			
		}
		
		if(e.key=="s"){		
			playerDown = true;			
		}
		
		if(e.key=="a"){
			playerLeft = true;			
		}
		
		if(e.key=="d"){
			playerRight = true;			
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
			meshes.squirrel.translateX(-0.5);
		}
		
		if(playerDown){			
			meshes.squirrel.translateX(0.5);
		}
		
		if(playerLeft){						
			meshes.squirrel.rotateY(0.05);						
		}
		
		if(playerRight){			
			meshes.squirrel.rotateY(-0.05);			
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