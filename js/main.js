const h= 36;
const w= 36;
const radius=15
const $Scene=Scene.CreateScene()

const sphere=Primitive.Sphere(0x000088,25)
$Scene.add(sphere)
const polerN=Primitive.Cylinder(0xFF0000)
polerN.position.y=25
$Scene.add(polerN)
const polerS=Primitive.Cylinder(0x00FF00)
polerS.position.y=-25
$Scene.add(polerS)
let circle=Primitive.Circle(0xFFFF00,3)
let e=Euler.From(-90,0,0)
circle.rotation.set(e.x,e.y,e.z)
circle.position.y=25
$Scene.add(circle)
circle=Primitive.Circle(0xFFFF00,3)
e=Euler.From(90,0,0)
circle.rotation.set(e.x,e.y,e.z)
circle.position.y=-25
$Scene.add(circle)
$Scene.add(Primitive.LineRing(0xFF0000,8,26))


Debug.Log("ugoiteru?")

InputSet()
setInterval(function(){$Scene.Update(
 function(delta){
 	
 }
)},33)