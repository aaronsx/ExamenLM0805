class Usuario{
	//Clase usuario con sus constructores
	  constructor (email, nombre,apellidos,pregunta,respuesta,pass) {
	    this.email = email;
	    this.nombre = nombre;
	    this.apellidos = apellidos;
	    this.pregunta = pregunta;
	    this.respuesta = respuesta;
	    this.pass = pass;
  }
 }
 //login normal te comprueba y si esta bien te manda a inicio
 function logearse(form) 
{
	 var email=form.email.value;
    var pass1=form.pass1.value;
	
	 

	 var valor = localStorage.getItem('usuarios');
  		  var objetoJS = JSON.parse(valor); 	
	 if(valor==null||objetoJS.pass!=pass1||objetoJS.email!=email)
	 alert("no se ha encontrado ningun correo")
  	else
  	{
		  document.write();
		   location.href ='http://localhost:8080/ExamenLM0805/inicio.html';
	  }
   
}
//Recuperar usuario con el localstorage comprueba si estan bien luego te pide la recuperacion y se te guarda y te redirige al login
function recu(form) 
{
	 var email=form.email.value;

	 var valor = localStorage.getItem('usuarios');
  		  var objetoJS = JSON.parse(valor);
  		 
	 	
	 if(valor==null||objetoJS.email!=email)
	 alert("no se ha encontrado ningun correo")
  	else
  	{
		
		 
		  var contranueva=prompt(objetoJS.pregunta);
		  if(contranueva==objetoJS.respuesta)
		  {
			  var contra=prompt("Introduce una nueva contraseña");
			  var user = new Usuario(objetoJS.email, objetoJS.nombre,objetoJS.apellidos,objetoJS.pregunta,objetoJS.respuesta,contra);
  		 	 localStorage.setItem('usuarios', JSON.stringify(user));
  		 	  document.write();
       		 location.href ='http://localhost:8080/ExamenLM0805/login.html';
		  }
		   
  		  else
  		  alert("Respuesta incorrecta")
	  }
   
}
//Verificar lo que hace es comprobarte la contra y si son correcta se guarda en clase usuario y te redifire al login
function verificarPasswords(form) 
{
	 var email=form.email.value;
	var nombre=form.nombre.value;
	var apellidos=form.apellidos.value;
	var pregunta=form.pregunta.value;
	var respuesta=form.respuesta.value;
    var pass1=form.pass1.value;
	var pass2=form.pass2.value;
   	
    if (pass1 != pass2) 
		alert("La contraseña no coinciden");        
    else 
    {
       
          var user = new Usuario(email, nombre,apellidos,pregunta,respuesta,pass1);
  		  localStorage.setItem('usuarios', JSON.stringify(user));
       		   document.write();
       		location.href ='http://localhost:8080/ExamenLM0805/login.html';
     
       
    }
    
}
//Que te envia a recuperar
function gotorecuperar()
{
	  document.write();
       		location.href ='http://localhost:8080/ExamenLM0805/recuperar.html';
}


