class Debug{
	static Log(src){
		$("#Debug").text(src)
	}
}
class Scene{
  constructor(){
		this.scene=new THREE.Scene();
		this.item = [];
		this.renderer = new THREE.WebGLRenderer();
    		const canvas=$(this.renderer.domElement);
    		this.renderer.setSize( window.innerWidth, window.innerHeight );
    		$("body").append(canvas);
    		this.camera = new THREE.PerspectiveCamera(60, 
    window.innerWidth / window.innerHeight,0.1, 1000 );
    		this.renderer.setPixelRatio(window.devicePixelRatio);
    		this.camera.up = new THREE.Vector3( 0, 1, 0 )
    		this.camera.position.y=40
    		this.camera.position.z=3.5
    		this.camera.rotation.x=-0.4*Math.PI
    		this.scene.background=new THREE.Color(0x666666)
    		const light = new THREE.AmbientLight(0x444444, 1.0);
    		const dlight = new THREE.DirectionalLight(0xFFFFFF, 1);
     	dlight.rotation.x=0.25*Math.PI
    		this.scene.add(light);
    		this.scene.add(dlight);
    		this.trackball = new THREE.TrackballControls(this.camera,document.body)
    		
    		
    		
    		
    		//this.scene.rotation.y=1.0*Math.PI;
	} 
 	static CreateScene(){
    		const result=new Scene();
    		return result;
    }
    
    LookAt(x,y,z){
    		this.camera.lookAt(x,y,z)
    }
    
    Rotate(x,y,z){
  
    		const e =Euler.From(x,y,z);
    		this.scene.rotation.x=e.x;
    		this.scene.rotation.y=e.y;
    		this.scene.rotation.z=e.z;
    }
    
    add(o){
    		this.scene.add(o);
    		return this;
    }  
	
	Update(update,delta=0.0333){
		update(delta);
		this.renderer.render( this.scene, this.camera );
		this.trackball.update()
	}
}//Scene end

function Color(x){
  return new THREE.Color(x);
}

function V3(x,y,z){
	return new THREE.Vector3(x,y,z);
}
class Euler{
	static From(x,y,z){
		x=THREE.MathUtils.degToRad(x)
		y=THREE.MathUtils.degToRad(y)
		z=THREE.MathUtils.degToRad(z)
		return new THREE.Euler(x,y,z);
	}

}
class Quaternion{
	
	static Euler(x,y,z){
		const q=new THREE.Quaternion()
		q.setFromEuler(Euler.From(x,y,z))
		return q;	
	}
	
	
}
class Vector3{
	static Up(length){
		return new THREE.Vector3(0,length,0)
	}
	static Back(length){
		return new THREE.Vector3(0,-length,0)
	}
	static Zero(){
		return new THREE.Vector3(0,0,0)
	}
	static PrimeMeridian(length=1){
		const v=Vector3.Forward(length)
		return v
	}
	static Forward(length=1){
		return new THREE.Vector3(0,0,length)
	}
	
	static FromLatLong(lat,lon,length=10){
		lat=THREE.MathUtils.degToRad(lat)
		lon=THREE.MathUtils.degToRad(lon)
		
		const e=new THREE.Euler(lat,lon,0)
		
		const v=Vector3.Forward(length);
		return v.applyEuler(e)
	}
	
	static FromLatLongFlat(lat,lon,length=10){
		lat=THREE.MathUtils.degToRad(lat)
		lon=THREE.MathUtils.degToRad(lon)
		
		const e=new THREE.Euler(lat,lon,0)
		const v=Vector3.Forward(length);
		let v2= v.applyEuler(e)
		v2.z=0;
		return v2;
	}
}


function Group(){
  return new THREE.Group();
}
class Primitive{
  static Sphere(color=0x888888,radius=0.5,w=32,h=16){
  	const g = new THREE.SphereGeometry(radius,w,h);
  	const m = new THREE.MeshStandardMaterial({color:color});
  	const sphere=new THREE.Mesh(g,m)
  	return sphere;
  }
  static Cylinder(color=0x888888,t=0.5,b=0.5,h=2,s=16){
 	const g = new THREE.CylinderGeometry(t,b,h,s);
  	const m = new THREE.MeshStandardMaterial({color:color});
  	const result= new THREE.Mesh(g,m)
  	result.position.y=h/2.0;
  	return result;
  }
  
  static Circle(color=0x888888,r=1,s=16){
 	const g = new THREE.CircleGeometry(r,s);
  	const m = new THREE.MeshStandardMaterial({color:color});
  	return new THREE.Mesh(g,m)
  }
  
  static Line(color=0x00FF00,width=3,points=[]){
  
    const m=new THREE.LineBasicMaterial({color:color,width:width})
    const g =new THREE.BufferGeometry().setFromPoints(points);
    const line=new THREE.Line(g,m);
    return line;
  
  }
  
static LineLoop(color=0x00FF00,width=3,points=[]){
  
    const m=new THREE.LineBasicMaterial({color:color,width:width})
    const g =new THREE.BufferGeometry().setFromPoints(points);
    const line=new THREE.LineLoop(g,m);
    return line;
  
  } 
  //赤道を表現
  static LineRing(color=0xFF0000,width=3,radius=30){
  
    const points =[];
    for(let i=0;i<60;i++){
    		points.push(Vector3.FromLatLong(0,360/60*i,radius))
    }
    const m=new THREE.LineBasicMaterial({color:color,width:width})
    const g =new THREE.BufferGeometry().setFromPoints(points);  
   const line=new THREE.LineLoop(g,m);
   return line;
  }
  
  static LineRingY(color=0x00FF00,width=8,radius=30){
    
    const points =[];
    for(let i=0;i<60;i++){
        const v=Vector3.FromLatLong(360/60*i,0,radius)
    		points.push(v)		
    	}
    	
    const m=new THREE.LineBasicMaterial({color:color,width:width})
    const g =new THREE.BufferGeometry().setFromPoints(points);  
   const line=new THREE.Line(g,m);
   return line;
   
  } 
  
  static SphereCircle(lat,lon,length=10,radius=10,edges=10){		const points=[];
  		const bow=Vector3.Forward(length)
  			.applyEuler(Euler.From(lat,lon,0))
  		points.push(Vector3.Zero())
	//Y回転してからクォータニオン
		for(let i=0;i<edges;i++){
			const e=Euler.From(0,36*i,0);
			const a=Euler.From(lat,lon,0);
			let bow=Vector3.Forward(16); 
			bow=bow.applyEuler(a)
			let pin=Vector3.Forward(1)
			pin=pin.applyEuler(a);
			
			
			const vp=bow.add(pin.applyEuler(e))
			//alert(vp.x+":"+vp.y+":"+vp.z)
			points.push(vp);
		}
		return Primitive.LineLoop(0xFFFFFF,4,points);
	}
 
  
  static Octahedron(color=0xFF00FF,radius=1){
 	const m=new THREE.MeshStandardMaterial({color:color})
    const g =new THREE.OctahedronGeometry(radius);    
  	return new THREE.Mesh(g,m)
  }
}//end primitive



class GameObject{
	constructor(update){
		this.OnUpdate=update
	}
	
	Update(delta){
		this.OnUpdate(delta);
	}
}

function GameObjectx(
  position={x:0,y:0,z:0},
  rotation={x:0,y:0,z:0},
  scale={x:1,y:1,z:1}
){
  const geometry = new THREE.BoxGeometry( scale.x, scale.y, scale.z );
  const material = new THREE.MeshStandardMaterial( { color:0x44EE44 } );
  const mesh= new THREE.Mesh( geometry, material );
  mesh.position.x=position.x;
  mesh.position.y=position.y;
  mesh.position.z=position.z;
  return mesh;
}

