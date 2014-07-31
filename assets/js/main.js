/*-------JSHint Directives-------*/
/* global THREE, Stats, dat      */
/*-------------------------------*/
'use strict';


/*******************
 * Manage Settings *
 *******************/

var RENDERER = {
  antialias : false,
};
	 
var meshes = {};
var game = {};

var loader = new THREE.JSONLoader();
var ObjectLoader = new THREE.ObjectLoader();
game.level=0;

/********************
 * Global Variables *
 ********************/

// Built-in
var scene, renderer;
var render ={};
// Plugins
var stats, gui;

// Scene objects
var crate;
var canvasWidth  = window.innerWidth;
var canvasHeight = window.innerHeight;

/********************
 * Helper Functions *
 ********************/

function degToRad(degrees) {
  return Math.PI/180 * degrees;
}

function basicFloorGrid(lines, steps, gridColor) {
  lines = lines || 20;
  steps = steps || 2;
  gridColor = gridColor || 0xFFFFFF;
  var floorGrid = new THREE.Geometry();
  var gridLine = new THREE.LineBasicMaterial( {color: gridColor} );
  for (var i = -lines; i <= lines; i += steps) {
    floorGrid.vertices.push(new THREE.Vector3(-lines, 0, i));
    floorGrid.vertices.push(new THREE.Vector3( lines, 0, i));
    floorGrid.vertices.push(new THREE.Vector3( i, 0, -lines));
    floorGrid.vertices.push(new THREE.Vector3( i, 0, lines));
  }
  return new THREE.Line(floorGrid, gridLine, THREE.LinePieces);
}

function basicCrate(size) {
  size = size || 5;
  var textureImage = 'assets/img/texture/crate-small.jpg';
  var geometry = new THREE.BoxGeometry( size, size, size );
  var crateTexture = new THREE.ImageUtils.loadTexture( textureImage );
  var crateMaterial = new THREE.MeshLambertMaterial({ map: crateTexture });
  var crate = new THREE.Mesh( geometry, crateMaterial );
  return crate;
}

/***********************
 * Rendering Functions *
 ***********************/

Physijs.scripts.worker = './assets/js/lib/physics/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';
 
function renderScene() {
  renderer.render( scene,camera );
}

function updateScene() {
  stats.update();
  scene.simulate();
  //fire Trigger
  $(window).trigger("updateScene");  
}

function animateScene() { 
  window.requestAnimationFrame( animateScene );
  renderScene();
  updateScene();  
}

function resizeWindow() {
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function addToDOM(object) {
  var container = document.getElementById('canvas-body');
  container.appendChild(object);
}

//load level
   function loadLevel(level){
	   
	   var levelURL = "./assets/js/levels/level"+level+".js";
	   console.log("loadLevel:"+levelURL);
	   
	   $.ajax({
			url: levelURL,
			dataType: "script",
			success: function () { console.log("Level Loaded"); levelInit(); },
			error : function(e) { console.log("loadLevelError:"); console.log(e)}
			
		});
	
   }
 
   

/************************
 * Scene Initialization *
 ************************/

function initializeScene() {

  /*************************
   * Initialize Essentials *
   *************************/

  // Scene and window resize listener

  scene = new Physijs.Scene(); // create Physijs scene
  scene.setGravity(new THREE.Vector3( 0, -50, 0 )); // set gravity

  window.addEventListener('resize', resizeWindow, false);


  // Add WebGL renderer to DOM
  renderer = new THREE.WebGLRenderer(RENDERER);
  renderer.setSize(canvasWidth, canvasHeight);
  addToDOM(renderer.domElement);


  /**********************
   * Initialize Plugins *
   **********************/

 

  // Stats fps/ms box
  stats = new Stats();
  stats.setMode(0); // 0 -> fps, 1 -> ms
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.bottom = '0px';
  stats.domElement.style.zIndex = 100;
  addToDOM(stats.domElement);

  // Dat gui (top right controls)
  gui = new dat.GUI( {height: 5 * 32 - 1} );


  /***************
   * Custom Code *
   ***************/

  // Example: light sources
  var lightAmbient = new THREE.AmbientLight(0x666666);
  var lightSource = new THREE.PointLight(0x888888);
  lightSource.position.set(0, 50, 80);
  scene.add(lightAmbient);
  scene.add(lightSource);

  // Example: basic floor grid
  scene.add(basicFloorGrid(20, 2));

  // Example: crate with texture
  var crateSize = 5;
  meshes.crate = basicCrate(crateSize);
  meshes.crate.position.set(0, crateSize/2, 0);
  scene.add( meshes.crate);
  
  
  loader.load('./mesh/Squirrel.js', function (geometry) {
			var texture =  './mesh/textures/squir1.png';
			// create a new material
			  var sTexture = new THREE.ImageUtils.loadTexture( texture );
              var sMaterial = new THREE.MeshLambertMaterial({ map: sTexture });
			  meshes.squirrel = new Physijs.BoxMesh(
				geometry,
				sMaterial,
				1
			  );

			  meshes.squirrel.scale.set(3,3,3);
			  meshes.squirrel.position.set(0, 8, 0);
			  scene.add(meshes.squirrel);
			  		  
	});		

	   
 loadLevel(1); 
	
}



