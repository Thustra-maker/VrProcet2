function ObjFis(posX, posY, velX, velY) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xefef00 });
    
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.x = posX;
    this.cube.position.y = posY;
  
    scene.add(this.cube);
  
    camera.position.z = 5;
  
    var vy = velY;
    var vx = velX;
    var ay = -0.005;
  
    this.actualizar = function() {
      vy += ay;
      this.cube.position.y += vy;
      this.cube.position.x += vx;
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    };
  }
  