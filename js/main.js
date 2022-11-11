const $Scene=Scene.CreateScene()

const Npin=Primitive.Cylinder()
Npin.position.y=2
$Scene.add(Npin)

const plane=Primitive.Plane(0xFF0000,10,10,3,2)



//for(const v of plane.geometry.vertices){

//}

$Scene.add(plane);
$Scene.add(Primitive.BillBoard())

InputSet()
$Scene.add(Primitive.Sphere());
$Scene.Begin(function(delta){
  
  Debug.Log(
  		[
    			$Scene.camera.rotation.x.toFixed(1),
      		$Scene.camera.rotation.y.toFixed(1),
       		$Scene.camera.rotation.z.toFixed(1)
       ]
       +"<br>"+
       [
       		$Scene.camera.position.x.toFixed(1),
      		$Scene.camera.position.y.toFixed(1),
       		$Scene.camera.position.z.toFixed(1)
       ]
  )
})