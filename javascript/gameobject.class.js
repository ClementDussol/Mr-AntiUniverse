class GameObject extends THREE.Mesh {
	
	constructor(geometry, material){

		super(geometry, material);
		this.velocity = new THREE.Vector3();
		this.alive = true;

	}

	update(){

	}

	kill(){
		this.parent.remove(this);
		this.alive = false;
	}

	reset(scene, x, y, z){
		scene.add(this);
		this.position.x = x || 0;
		this.position.y = y || 0;
		this.position.z = z || 0;
		this.alive = true;
	}
}