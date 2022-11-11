

function InputSet(){
  
  
  $(".Button.ut").on("click",function(){
  	$Scene.Rotate(22.5,0,0);
  });
    $(".Button.lt").on("click",function(){
    $Scene.Rotate(0,45,0);
  });
  $(".Button.rt").on("click",function(){
 	$Scene.Rotate(0,-45,0); 
    
  });
  $(".Button.dt").on("click",function(){
   	$Scene.Rotate(-22.5,0,0);
  });
  
   $(".Button.zero").on("click",function(){
      $Scene.CameraReset()
      
  });
  
  $("canvas").on("click",function(e){
  
    
  })
}

class UI{
	static CreateBottom(){
		$("body")
	}
}