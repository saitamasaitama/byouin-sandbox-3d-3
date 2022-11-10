const h= 36;
const w= 36;
const tokyo={
  lat:35.6809591 ,
  lon:139.7673068
}
const $Scene=Scene.CreateScene()


const polerN=Primitive.Cylinder(0xFF0000)
polerN.position.y=25
$Scene.add(polerN)
const polerS=Primitive.Cylinder(0x00FF00)
polerS.position.y=-25
$Scene.add(polerS)


const PrefCoordinates=[];	

for(let i=0;i<47;i++){
	PrefCoordinates.push(PrefGeoMaster.features[i].geometry.coordinates)
for(let j=0;j<PrefCoordinates[i].length;j++) {
for(let k=0;k<PrefCoordinates[i][j].length;k++) { 
			const points=[];
			for(const item of PrefCoordinates[i][j][k]){
			    const lon=item[0]
				const lat=item[1]
				
				let v =Vector3.From(lat-tokyo.lat,lon-tokyo.lon,0)
				// v=Vector3.From(lat,lon,0)
				//v=v.multiply(2)
				points.push(v);
			}
			$Scene.add(Primitive.Line(0xFF0000,3,points))
		}
	}
}

const master=StationMaster[0]
for(item of StationMaster){
	const point=Primitive.Circle(0x00FF00,0.005)
	const pos=Vector3.From(item.lat-tokyo.lat,item.lon-tokyo.lon,0)
	point.rotation.y=DegToRad(-180)
	point.position.x=pos.x
	point.position.y=pos.y
	point.position.z=pos.z
	//alert(point.x+":"+point.y+":"+point.z)
	
	$Scene.add(point)
	
}

InputSet()
setInterval(function(){$Scene.Update(
 function(delta){
 	
 }
)},33)