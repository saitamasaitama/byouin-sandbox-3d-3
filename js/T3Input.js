
function InputSet(){
  
  
  $(".Button.ut").on("click",function(){
    alert("up")
  });
    $(".Button.lt").on("click",function(){
    alert("reset")
  });
  $(".Button.rt").on("click",function(){
    alert("reset")
  });
  $(".Button.dt").on("click",function(){
    alert("down")
  });
  
   $(".Button.zero").on("click",function(){
      const tokyo={
      	lat:35.6809591 ,
      	lon:139.7673068
      }
      const v=Vector3.Forward(25);
      const e=Euler.From(tokyo.lat,tokyo.lon,0)
      const ve=v.applyEuler(e)
      alert("zero")
      $Scene.rotation.x=25*Math.PI
      
      
  });
}

class UI{
	static CreateBottom(){
		$("body")
	}
}