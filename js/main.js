const $Scene=Scene.CreateScene()

for(let i=0;i<12;i++){
  const sphere=Primitive.Sphere(0x00FF00,0.1)
  const v=Vector3.FromEuler(0,30*i,0)
  sphere.position.x=v.x
  sphere.position.y=v.y
  sphere.position.z=v.z
//  alert([v.x,v.y,v.z])
  $Scene.add(sphere);
}





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