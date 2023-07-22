
var attemp=3;
function validate(){
    var usuar=document.getElementById("usuar").value;
    var password=document.getElementById("password").value;
    if(usuar=="nicaap"&& password=="123"){
        alert("Ingreso Exitosamente");
        window.location="home.html";
        return false;
    }
    
    else{
        attemp--;
    }
    alert("Te Quedan " + attemp +  " Intentos mas")
    if(attemp==0){
        document.getElementById("usuar").disable-true;
        document.getElementById("password").disable-true;
        document.getElementById("sumbit").disable-true;
    }
    }
   