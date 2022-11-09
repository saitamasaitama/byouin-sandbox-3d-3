const h= 36;
const w= 36;
const size=100;
const radius=15
const $Scene=Scene.CreateScene()

const sphere=Primitive.Sphere(0x000088,30)
$Scene.add(sphere)
const poler=Primitive.Cylinder(0xFF0000)
poler.position.y=30
$Scene.add(poler)
const circle=Primitive.Circle(0xFFFF00,5)
const e=Euler.From(-90,0,0)
circle.rotation.set(e.x,e.y,e.z)
circle.position.y=30
$Scene.add(circle)
Debug.Log("ugoiteru?")

InputSet()
setInterval(function(){$Scene.Update(
 function(delta){
 	
 }
)},33)