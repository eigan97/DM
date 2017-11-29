/*
Clave 1: 2edbc5884ac744f4aa2cd5d8ff591331

Clave 2: b6072cdd5104463d87fbe320689d7e26
*/
const config = {
    apiKey: "AIzaSyAiU6AeFLZPFowhernobmwFnc4ulZlgcwg",
    authDomain: "ejemplo-8c9f0.firebaseapp.com",
    databaseURL: "https://ejemplo-8c9f0.firebaseio.com",
    projectId: "ejemplo-8c9f0",
    storageBucket: "ejemplo-8c9f0.appspot.com",
    messagingSenderId: "245090948125"
};
firebase.initializeApp(config);

var Conect = firebase.database();
var userData = null;
var resultData = null;
let emailUse;
let nombreUse;
let edadUse;
let numTest;
let idUseResE;
let idUseResT;
let idUseImage;
const txtEmail = document.getElementById('txtEmail');
const passPassword = document.getElementById('passPassword');
const passPassword2 = document.getElementById('passPassword2');
const txtNombre = document.getElementById('txtNombre');
const txtUsername = document.getElementById('txtUsername');
const passContraseña = document.getElementById('passContraseña');
const spName = document.getElementById('spName'); 
const mosCorreo = document.getElementById('mosCorreo');
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //hoy es 0!
var yyyy = hoy.getFullYear();
console.log(dd+"/"+mm+"/"+yyyy);
var fecha = dd+"/"+mm+"/"+yyyy;



//const btnLogin = document.getElementById('btnLogin');
//const btnSignUp = document.getElementById('btnSignUp');
//const btnLogout = document.getElementById('btnLogout');
const numEdad = document.getElementById('numEdad');

function registro(){
    const pass2 = passPassword2.value
    const auth = firebase.auth();

    var email = txtEmail.value;
	var edad = numEdad.value;
	var nombre = txtNombre.value;
	var pass = passPassword.value;

	localStorage.setItem("email",email);
	localStorage.setItem("edad",edad);
	localStorage.setItem("nombre",nombre);
	localStorage.setItem("pass",pass);

    if (email != "" && edad != "" && nombre !="" && pass !="") {
    	if (email.includes("@") && email.includes(".")) {
    		if(pass.length >= 6){
    			if (pass == pass2) {
		        	const promise = auth.createUserWithEmailAndPassword(email, pass);
		        	promise.catch(e =>{ 
		        		alert("Ya existe este usuario");
		        	});
	        	}else{
	        		alert("Las contraseñas no coinciden");
	        	}
	        }else{
	        	alert("La contraseña es demasiado corta");
	        }
        }else{
        	alert("Tu correo no es valido");
        }
    }else{
        alert("Hacen falta datos");
        console.log(email+" "+edad+" "+nombre+" "+pass);
    }
	//
}
function continuar(){
	var act = localStorage.getItem("actividades");
	var arregloDeCadenas = act.split(",");

	for (var i=0; i < 20; i++) {
    	if(arregloDeCadenas[i] == undefined){
    		arregloDeCadenas[i] = null;
    	}
	}
	agregarActividades(arregloDeCadenas[0],arregloDeCadenas[1],arregloDeCadenas[2],arregloDeCadenas[3],arregloDeCadenas[4],arregloDeCadenas[5],arregloDeCadenas[6],arregloDeCadenas[7],arregloDeCadenas[8],arregloDeCadenas[9],arregloDeCadenas[10],arregloDeCadenas[11],arregloDeCadenas[12],arregloDeCadenas[13],arregloDeCadenas[14],arregloDeCadenas[15],arregloDeCadenas[16],arregloDeCadenas[17],arregloDeCadenas[18],arregloDeCadenas[19],arregloDeCadenas[20]);
	window.location.assign('app.html');
}







function nomeacuerdo(){

	window.location.assign('app.html');
}







function test(){
	window.location.assign('test.html');
}
function test2(){
	var x = document.forms["pregunta1"];
	var y = document.forms["pregunta2"];
	var z = document.forms["pregunta3"];
	

    /*if (x[0].value == "" && x[1].value  == "" || y[0].value  == "" && y[1].value  == "" || z[0].value  == "" && z[1].value  == "") {
        alert("no dejes campos vacios");
        
    }*/

	var radios  = document.getElementsByName('respuesta1');
	var radios1 = document.getElementsByName('respuesta2');
	var radios2 = document.getElementsByName('respuesta3');
	var puntaje =0;
	var contest=0;
	for (var i = 0, length = radios.length; i < length; i++)
	{
		if (radios[i].checked)
		{
			puntaje=puntaje+parseInt(radios[i].value);
			console.log("hola");
			contest++;
		}

		if (radios1[i].checked)
		{
			puntaje=puntaje+parseInt(radios1[i].value);
			contest++;
			console.log("hola");
		}

		if (radios2[i].checked)
		{
			puntaje=puntaje+parseInt(radios2[i].value);
			contest++;
			console.log("hola");
		}
	}
	
	if(contest==3){
		localStorage.setItem("p1",puntaje);
		console.log(puntaje);
		console.log(contest);
		window.location.assign('test2.html');
	}else{
		alert("constesta todos los campos");
	}
}
function test3(){

	var chec= document.getElementsByName('respuesta');
	var puntaje=0;
	for (var i = 0, length = chec.length; i < length; i++)
	{
	 if (chec[i].checked)
	 {
	 	puntaje++;
	 }

	}
	console.log(puntaje);
	localStorage.setItem("p2",puntaje);	
	window.location.assign('test3.html');
}









function final(){

	
	var radios  = document.getElementsByName('respuesta1');
	var radios1 = document.getElementsByName('respuesta2');
	var puntaje=0;
	var per=0;
	var contest=0

		for (var i = 0, length = radios.length; i < length; i++)
	{
	 if (radios[i].checked)
	 {
	  // do whatever you want with the checked radio
	  	puntaje=puntaje+parseInt(radios[i].value);
	  	console.log("hola");
	  	contest++;
	  //localStorage.setItem("res1",radios[i].value);
	

	  // only one radio can be logically checked, don't check the rest
	  
	 }
	 if (radios1[i].checked)
	 {
	  // do whatever you want with the checked radio

	  	per=per+parseInt(radios1[i].value);
	  	contest++;

	  //localStorage.setItem("res1",radios[i].value);
	
	  console.log("hola");
	  // only one radio can be logically checked, don't check the rest
	  
	 }
	}
	if(contest==2){
	localStorage.setItem("p3",puntaje);	
	localStorage.setItem("per",per);
	var p1=localStorage.getItem("p1");
	var p2=localStorage.getItem("p2");
	var p3=localStorage.getItem("p3");
	var per=localStorage.getItem("per");
	


	if(p1==3 && p2>=3 && p3==1 && per==0){
		localStorage.setItem("resultado","si");
		console.log("muestra signps de depresion");	
		localStorage.setItem("resulta","0");
	}

	else if(p1==3 && p2>=3 && p3==1 && per==1){
		localStorage.setItem("resultado","no");
		console.log("muestra signos de deprecion pero puede no estar deprimiedo");
		localStorage.setItem("resulta","1");
	}
	else{
		localStorage.setItem("resultado","no");
		console.log("no muestra signos de deprecion");
		localStorage.setItem("resulta","2");
	}
	window.location.assign('final.html');
}
else{
		alert("constesta todos los campos");

	}

}
/*function perfil(){
	/*alert("puto");
	const resultadosTes  = Conect.ref().child('/resultadosEmociones/'+idUseResE+'/resultados');
    const query2 = resultadosTes.orderByChild('fecha').equalTo(fecha);

    console.log(idUseResE);
    query2.once('value', snap => {
        console.log(snap.key);
        console.log(snap.val());
        console.log(fecha);
        if (snap.val() == null) {
            agregarResultadosT(emailUse,resulta);
            //window.location.assign('perfil.html');
        }else{
            alert("Ya se realizo la encuesta del día de hoy");
        }
    });
}*/
function index(){
	window.location.assign('app.html');

}
function carga1(){
		var cargar= document.getElementById('cargar')
		var inicio= document.getElementById('inicio')
	setTimeout(function (){

		cargar.style.left="-100%";

	}, 1000);
setTimeout(function (){
inicio.style.left="0%";

	}, 1000);

}
function guardarResE(){
	//alert("puto");
    //
    const email = localStorage.getItem("email");
    var contempt=localStorage.getItem("contempt"),anger=localStorage.getItem("anger"),digust=localStorage.getItem("disgust"),fear=localStorage.getItem("fear"),happiness=localStorage.getItem("happiness"),neutral=localStorage.getItem("neutral"),sadness=localStorage.getItem("sadness"),surprise=localStorage.getItem("surprise");
    agregarResultadosE(email,fecha,contempt,anger,digust,fear,happiness,neutral,sadness,surprise);
    //agregarImagenes(localStorage.getItem("imageURL"))
    window.location.assign('perfil.html');
}

function img(){
	//alert("puto");
	var resulta = localStorage.getItem("resulta");
	agregarResultadosT(emailUse,resulta);
    window.location.assign('img.html');
}

function reset(){
	//alert("puto");
	var resulta = localStorage.getItem("resulta");
	resetearUsuario(emailUse);
    window.location.assign('app.html');
    alert("Se ha reseteado la información")
}

function reEvaluar(){
	const resultadosTes  = Conect.ref().child('/resultadosTest/'+idUseResT+'/resultados');
    const query2 = resultadosTes.orderByChild('fecha').equalTo(fecha);
    var resulta = localStorage.getItem("resulta");

    console.log(idUseResT);
    console.log(resulta);
    query2.once('value', snap => {
        console.log(snap.key);
        console.log(snap.val());
        console.log(fecha);
        if (snap.val() == null) {
            agregarResultadosT(emailUse,resulta);
            window.location.assign('app.html');
        }else{
            alert("Ya se realizo la encuesta del día de hoy");
            //window.location.assign('perfil.html');
        }
    });
}

function logout(){
	window.location.assign('index.html');
	firebase.auth().signOut();
}

function index(){
	window.location.assign('app.html');

}
function carga1(){
		var cargar= document.getElementById('cargar')
		var inicio= document.getElementById('inicio')
	setTimeout(function (){

		cargar.style.left="-100%";

	}, 1000);
setTimeout(function (){
inicio.style.left="0%";

	}, 1000);

}

function compruebacambio() {
	var url = window.location.href
   	if (url.includes("index")) {
   		carga1();
        //alert("Dirección ha cambiado"); 
        firebase.auth().signOut();
        localStorage.setItem("email","");
        localStorage.setItem("urlImage","")
   	}
   	const email = localStorage.getItem("email");
   	if (email=="") {
   		//window.location.assign('index.html');
   	}
}


function registrar(){

		var inicio= document.getElementById('inicio')
		var registrar= document.getElementById('registro')
		inicio.style.left="-100%";
		registrar.style.left="0%";
}
function inicio(){

		var inicio= document.getElementById('inicio')
		var registrar= document.getElementById('registro')
		inicio.style.left="0%";
		registrar.style.left="100%";
}


window.onload = function() { 
	compruebacambio();
}




function sesion(){
	//
	const email = txtUsername.value;
	var pass = passContraseña.value;
	const auth = firebase.auth();

	localStorage.setItem("email",email);

	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e =>{
 		alert(e.message);
	});

	promise.then(function(value){ 		
		window.location.assign('perfil.html');
	});
}

	


	
    //const numEdad = document.getElementById('numEdad');
    //const divSexo = document.getElementById('divSexo');
    //const mostrar = document.getElementById('container2');
    //const btnGuardar = document.getElementById('btnGuardar');

    //var score=200;
    
    console.log(hoy);
    

    //var sex = "";
    /*function agregarImagenes(url){
        var userData2 = Conect.ref("imagenes/"+idUseImage+"/resultados");
        var datos2 = {
            url:url,
        }
        //var conectados = userData.push(datos);
        var conectados2 = userData2.set(datos2);
    }*/

    
    function agregarActividades(actividad1,actividad2,actividad3,actividad4,actividad5,actividad6,actividad7,actividad8,actividad9,actividad10,actividad11,actividad12,actividad13,actividad14,actividad15,actividad16,actividad17,actividad18,actividad19,actividad20){
        userData = Conect.ref("actividades");
        const email = localStorage.getItem("email");
        var datos2 = {
            email:email,
            "resultados":[
                {
                    actividad1:actividad1,
                    actividad2:actividad2,
                    actividad3:actividad3,
                    actividad4:actividad4,
                    actividad5:actividad5,
                    actividad6:actividad6,
                    actividad7:actividad7,
                    actividad8:actividad8,
                    actividad9:actividad9,
                    actividad10:actividad10,
                    actividad11:actividad11,
                    actividad12:actividad12,
                    actividad13:actividad13,
                    actividad14:actividad14,
                    actividad15:actividad15,
                    actividad16:actividad16,
                    actividad17:actividad17,
                    actividad18:actividad18,
                    actividad19:actividad19,
                    actividad20:actividad20,
                }
            ]
        }
        const conectados = userData.push(datos2);
    }


    function agregarUsuario(email,edad,nombre){
        userData = Conect.ref("usuarios");
        userData2 = Conect.ref("resultadosEmociones");
        userData3 = Conect.ref("resultadosTest");
        //userData4 = Conect.ref("imagenes")
        var datos = {
    		email:email,
            nombre:nombre,
    		edad:edad
    	}
        var datos2 = {
            email:email,
            "resultados":[
                {
                    "Inicio de sesion":"Primera vez"
                }
            ]
        }

    	var conectados = userData.push(datos);
        const conectados2 = userData2.push(datos2);
        const conectados3 = userData3.push(datos2);
        //const conectados4 = userData4.push(datos2);
    }

    function resetearUsuario(email){
        userData2 = Conect.ref("resultadosEmociones/"+idUseResE);
        userData3 = Conect.ref("resultadosTest/"+idUseResT);
        var datos2 = {
            email:email,
            "resultados":[
                {
                    "Inicio de sesion":"Primera vez"
                }
            ]
        }
        const conectados2 = userData2.set(datos2);
        const conectados3 = userData3.set(datos2);
    }


    function agregarResultadosE(email,fecha,contempt,anger,digust,fear,happines,neutral,sadness,surprise){
        userData = Conect.ref("resultadosEmociones/"+idUseResE+"/resultados");
        //var userData2 = Conect.ref("resultadosTest/"+idUseResT+"/resultados");
        var datos = {
            fecha:fecha,
            contempt:contempt,
            anger:anger,
            digust:digust,
            fear:fear,
            happines:happines,
            neutral:neutral,
            sadness:sadness,
            surprise:surprise
        }
        var conectados = userData.push(datos);
        //var conectados2 = userData2.push(datos2);
    }

    function agregarResultadosT(email,score){
        //userData = Conect.ref("resultadosEmociones/"+idUseResE+"/resultados");
        var userData2 = Conect.ref("resultadosTest/"+idUseResT+"/resultados");
        var datos2 = {
            fecha:fecha,
            score:score
        }
        //var conectados = userData.push(datos);
        var conectados2 = userData2.push(datos2);
    }

    /*btnLogin.addEventListener('click', e =>{
    	const email = txtEmail.value;
    	const pass = passPassword.value;
    	const auth = firebase.auth();

    	const promise = auth.signInWithEmailAndPassword(email, pass);
    	promise.catch(e => console.log(e.message));
    });*/

    /*optMujer.addEventListener('click', e=>{
        if(optMujer.checked){
            optHombre.checked=false;
            sex = "mujer";
        }
    });

    optHombre.addEventListener('click', e=>{
        if(optHombre.checked){
            optMujer.checked=false;
            sex="hombre";
        }
    });*/

    /*btnSignUp.addEventListener('click', e =>{
    	//Comprobar que el email sea real
    	const email = txtEmail.value;
        const pass = passPassword.value;
        var edad = numEdad.value;
        const nombre = txtNombre.value; 
        const auth = firebase.auth();


        if (email != "" && edad != "" && nombre !="" && pass !="") {
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        }else{
            alert("Hacen falta datos");
            console.log(email+" "+edad+" "+nombre+" "+pass);
        }
    });*/

    /*btnLogout.addEventListener('click', e =>{
    	firebase.auth().signOut();
    });*/






    //ESTE NO LO HE USADO JSAKDJSAHDKASJHD
    /*btnGuardar.addEventListener('click', e =>{
        const resultadosEmociones  = Conect.ref().child('/resultadosEmociones/'+idUseResE+'/resultados');
        const query2 = resultadosEmociones.orderByChild('fecha').equalTo(fecha);

        query2.once('value', snap => {
            console.log(snap.key);
            console.log(snap.val());
            console.log(fecha);
            if (snap.val() == null) {
                agregarResultados(emailUse,fecha,contempt,anger,digust,fear,happines,neutral,sadness,surprise,score);
            }else{
                alert("Ya se realizo la encuesta del día de hoy");
            }

        });
    });*/





    //Añadir un listener en tiempo real
    firebase.auth().onAuthStateChanged(firebaseUser => {
    	if (firebaseUser) {
    		let emails = localStorage.getItem("email");

            // Get a reference to the storage service, which is used to create references in your storage bucket
            var storage = firebase.storage();

            // Create a storage reference from our storage service
            var storageRef = storage.ref();
            storageRef.child('mis_foos/'+emails+'/1.jpg').getDownloadURL().then(function(url) {
                // `url` is the download URL for 'images/stars.jpg'

                
                //header('Access-Control-Allow-Origin: *');

                //alert('Si jaló');
                // This can be downloaded directly:
                /*var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = function(event) {
                    var blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();*/
                localStorage.setItem("urlImage",url);
                console.log(localStorage.getItem("urlImage"));
                
                // Or inserted into an <img> element:
                var img = document.getElementById('myimg');

                img.src = url;
            }).catch(function(error) {
                // Handle any errors
                switch (error.code) {
                    case 'storage/object_not_found':
                        console.log("File doesn't exist")
                    break;
                    case 'storage/unauthorized':
                        console.log("User doesn't have permission to access the object")
                    break;

                    case 'storage/canceled':
                        console.log("User canceled the upload")
                    break;

                    case 'storage/unknown':
                        console.log("Unknown error occurred, inspect the server response")
                    break;
                }
            });









            let idUseAct;
    		console.log(firebaseUser);
            const email = localStorage.getItem("email");
            const pass = localStorage.getItem("pass");
            const edad = localStorage.getItem("edad");
            const nombre = localStorage.getItem("nombre");

            const usuarios  = Conect.ref().child('/usuarios');
            const resultadosEmociones  = Conect.ref().child('/resultadosEmociones');
            const resultadosTest = Conect.ref().child('resultadosTest');
            const actividades = Conect.ref().child('actividades');
            //const imagenes = Conect.ref().child('imagenes');


            const query = usuarios.orderByChild('email').equalTo(email);
            const query2 = resultadosEmociones.orderByChild('email').equalTo(email);
            const query3 = resultadosTest.orderByChild('email').equalTo(email);
            const query4 = actividades.orderByChild('email').equalTo(email);
            //const query5 = imagenes.orderByChild('email').equalTo(email);


            query.on('value', snap =>{ 
                const respuesta = snap.val();
                /*console.log(snap.key);
                console.log(snap.key);
                var segundores=respuesta["-KyXSvSyp9JXo7LJ2_Q8"];
                console.log(snap.val());
                console.log(respuesta);
                console.log(segundores["email"]);*/

                console.log(respuesta);
                if (snap.val() == null) {
                    agregarUsuario(email,edad,nombre);
                    alert('Te has registrado exitosamente');
                    window.location.assign('actividades.html');
                }else{
                    //alert('Has iniciado sesion')
                }
            });
            query.on('child_added', snap =>{
                const id = snap.val();
                //console.log(snap.val());
                //console.log(snap.key);
                //console.log(id);
                console.log(id["email"]);
                console.log(id["nombre"]);
                console.log(id["edad"]);
                nombreUse = id["nombre"];
                emailUse = id["email"];
                edadUse = id["edad"];

                var url = window.location.href
			   	if (url.includes("app.html")) {
			   		spName.innerHTML = nombreUse;
			   	}else if(url.includes("perfil.html")){
			   		spName.innerHTML = nombreUse;
			   		mosCorreo.innerHTML = emailUse;
					if (!localStorage.getItem('urlImage')) {

					}else{
						document.getElementById("fotoPerfil").style.background = "url('"+localStorage.getItem("urlImage")+"')"
						document.getElementById("fotoPerfil").style.backgroundRepeat="no-repeat"
						document.getElementById("fotoPerfil").style.backgroundSize="cover"
						document.getElementById("fotoPerfil").style.backgroundPosition="center center"

					}	
	   			}
                
            });

            query2.on('value', snap => {
                if(snap.val()==null){
                    numTest = 0;
                    console.log(numTest);
                    console.log(snap.key);
                }
                console.log(snap.key);
                console.log(snap.val());
            });

            query2.on('child_added', snap => {
                const id = snap.val();
                const idRes = id["resultados"];
                var x = 0;
                console.log(idRes[x]);
                console.log(snap.key);
                idUseResE = snap.key;
            });

            query3.on('value', snap => {
                if(snap.val()==null){
                    numTest = 0;
                    console.log(numTest);
                    console.log(snap.key);
                }
                console.log(snap.key);
                console.log(snap.val());
            });

            query3.on('child_added', snap => {
                const id = snap.val();
                const idRes = id["resultados"];
                var x = 0;
                console.log(idRes[x]);
                console.log(snap.key);
                idUseResT = snap.key;
            });

            var conta = 1;
            query4.on('child_added', snap => {
                localStorage.setItem("idUseAct",snap.key);
            });

            idUseAct = localStorage.getItem("idUseAct");
            const query4dos = Conect.ref("actividades/"+idUseAct+"/resultados/0");
            console.log(idUseAct);
            query4dos.on('child_added', snap => {
                const id = snap.val();
                console.log(snap.val())
                localStorage.setItem("Actividad"+conta,id);
                conta+=1;
            });

            /*query5.on('value', snap => {
                if(snap.val()==null){
                    numTest = 0;
                    console.log(numTest);
                    console.log(snap.key);
                }
                console.log(snap.key);
                console.log(snap.val());
            });

            query5.on('child_added', snap => {
                const id = snap.val();
                const idRes = id["resultados"];
                var x = 0;
                console.log(idRes[x]);
                console.log(snap.key);
                idUseImage = snap.key;
            });*/


            //query.on('value', snap => console.log(snap.val()));
            
    	} else {
    		console.log('No logueado');
    	}
    });












    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('inputImg');




    //Vigilar seleccion archivo
    fileButton.addEventListener('change', function(e){
    	const email = localStorage.getItem("email");
    	//Obtener archivo
    	var file = e.target.files[0];
        //var snap = takeSnapshot();
    	//var blob = dataURItoBlob(snap);

        console.log(file);
        console.log(file.name);
        //console.log(file.getAsDataURL());
        //console.log(file.fileName);


        //console.log(snap);
        //console.log(blob);
    	//Crear un storage ref
    	var storageRef = firebase.storage().ref('mis_foos/'+email+'/1.jpg');
        //localStorage.setItem("imagen",file.name);
    	
    	//subir archivo
    	var task = storageRef.put(file);

        console.log(task);

    	//Actualizar barra de progreso
    	task.on('state_changed',
    		function progress(snapshot){
    			var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    			uploader.value = percentage;
    		},

    		function error(err) {

    		},

    		function complete(){

    			document.getElementById('info').innerHTML="<h4>"+file.name+"</h4><h6>o selecciona otra foto</h6>"
                //alert("Se completó la carga");
    		});
    });



    //Vigilar seleccion archivo
    //NO HE USADO ESTA PATE
    /*fileButton.addEventListener('change', function(e){

    	//Obtener archivo
    	var file = e.target.files[0];
    	
    	//Crear un storage ref
    	var storageRef = firebase.storage().ref('mis_foos/' + file.name);
    	
    	//subir archivo
    	var task = storageRef.put(file);

    	//Actualizar barra de progreso
    	task.on('state_changed',
    		function progress(snapshot){
    			var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    			uploader.value = percentage;
    		},

    		function error(err) {

    		},

    		function complete(){
                alert("Se completó la carga");
    		});
    });*/