$(document).ready(
	()=>{


     let display1 = true;
     let display2 = false;
     let display3 = false;


     $("#collapseTwo").hide();
     $("#collapseThree").hide();



     $(".clickCollapse1").click(()=>{


      if (display2 === true) {
        $("#collapseTwo").hide();
        display2 = false;
        }

       if (display3 === true) {
        $("#collapseThree").hide();
        display3 = false;
      } 

      $("#collapseOne").toggle();
      display1 = !display1;

     })



     $(".clickCollapse2").click(()=>{
     
      if (display1 === true) {
        $("#collapseOne").hide();
        display1 = false;
      } 
      if (display3 === true) {
        $("#collapseThree").hide();
        display3 = false;
      } 

      $("#collapseTwo").toggle();
      display2 = !display2;
    
     })


    
     $(".clickCollapse3").click(()=>{
       
      if (display2 === true) {
        $("#collapseTwo").hide();
        display2 = false;
      } 
      if (display1 === true) {
        $("#collapseOne").hide();
        display1 = false;
      } 



      $("#collapseThree").toggle();
      display3 = !display3;
     })
    

    
	})
