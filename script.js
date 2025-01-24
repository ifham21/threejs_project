// Create Scene
const scene = new THREE.Scene();

// Create Camera (PerspectiveCamera)
const camera = new THREE.PerspectiveCamera(
  75, // Field of View (degrees)
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);

// Create Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Append the renderer to the DOM

// Create a Cube
const geometry = new THREE.BoxGeometry(); // Box (cube) geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green material
const cube = new THREE.Mesh(geometry, material); // Create mesh with geometry and material
scene.add(cube); // Add cube to the scene

// Set Camera Position
camera.position.z = 5; // Move the camera back so we can see the cube

// Animation Loop
function animate() {
  requestAnimationFrame(animate); // Request next frame of animation

  // Rotate the cube
  cube.rotation.x += 0.01; // Rotate around X-axis
  cube.rotation.y += 0.01; // Rotate around Y-axis

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Handle Window Resize
window.addEventListener('resize', () => {
  // Update camera aspect ratio and projection matrix
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation loop
animate();
