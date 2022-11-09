let hola=1; //integer
    let nombre = "Juan"; //string
    let estado = false; //Boolean
    let cantidad = 5.4 //double
    const PI = 3.14;
    //PI =  2; //error no cambiar valor de constantes.
    let num1 = 4;
    let resultado = num1 ** 3;
    
   /*
    (function  ()
{
  var formulario  = document.getElementsByName('frmenviar')[1],
btn  = document.getElementById('btn')
elements = formulario;

validarNombre = function(e)
{
    if(frmenviar.num2.value > 0){    
        document.write(`El numero que digito es : ${ num2 }`);
    } else if(frmenviar.num2.value == 4 ) {
        document.write("EL NUMERO ES IGUAL A 4 INTRODUJO EL NUMERO: "+ num2);    
    }
    else if(nfrmenviar.num2.value< 4){
        document.write("EL RESULTADO ES: "+ (num2+4));
        
    }
    e.preventDefFault();

};

var validar = function(e) {
 
validarNombre(e);
formulario.addEventListener("submit", validar)
};

console.log(function.toString());

}());
*/
    let valor = parseInt(prompt('INGRESE UN VALOR'));
    
    
     
    switch (valor) 
    {

        case "1":
            document.write("1");
            break;
        case "2":
            document.write("4");
            break;
        default:
            document.write("NO EXISTE ESTE MES");
            break;
    }
    
    /*
    while(valor<=10){
        
        document.write(valor+"\n");
        document.write("<br>");
        valor++;
    }
    */
    /*
    while(valor>= 1){
         document.write(valor);
         document.write("<br>");
         valor--;
    }
    */
    /*
    for(var i = 1; i<=10;i++){
        document.write(i);
        document.write("<br>");
    }
    */
/*
    for(var i = 10; i>=1; i--){
        document.write(i);
        document.write("<br>");
    }
*/
/*
 function sumar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var msg = document.getElementById("msg");
    msg.innerHTML = parseInt(num1) + parseInt(num2);
*/
   // alert(resultado);
    //console.log(resultado);

