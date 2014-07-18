 var camera;
  var CAMERA = {
  fov : 45,
  near : 1,
  far : 1000,
  zoomX : 0,
  zoomY : 20,
  zoomZ : 50,
};
  
 $(document).ready(function(){ 
 
 
	  
	  // Camera and set initial view
	  var aspectRatio  = canvasWidth/canvasHeight;
	  camera = new THREE.PerspectiveCamera( CAMERA.fov, aspectRatio, CAMERA.near, CAMERA.far );
	  //scene.add(camera);
	  meshes.squirrel.add( camera );
	  
	 // OrbitControls using mouse
	controls = new THREE.OrbitControls(camera);
	for (var key in CONTROLS) { controls[key] = CONTROLS[key]; }
	controls.addEventListener('change', renderScene);
  
	function resizeWindow() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	}

	
	
	function render(){
	console.log("Camera Render");
		
	}
	
	$( window ).mousemove(function(e) {
	
		render();
	
	});
  
});