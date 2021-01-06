
    function calctip(){
    
    
        let billamt = document.querySelector("#billamt").value;
    
        let nop = document.querySelector("#peopleamt").value;
        
        let service = document.querySelector("#servicequa").value;
        
        // invalid inputs   
       if(billamt<=0 || nop<=0 || service==0){
           alert("chutiya sahi value dal");
           return;
       }
        

    let bill =  (billamt*service)/nop; 
      
    
    document.querySelector(".tip-show").style.display="block";
        
    document.querySelector(".tip-show").innerHTML = bill + " $";

    }
     
    document.querySelector(".tip-show").style.display="none";

    // calls calc function
    document.querySelector(".calctip").onclick = function(){
            calctip();
    }    
    
    
    
    
