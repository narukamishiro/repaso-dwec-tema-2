function ejercicio3(msj){
	document.write(msj);
}
function ejercicio4(a,b){
	document.write("el valor del primer numero es:"+a+"<br>");
	document.write("el valor del segundo numero es:"+b+"<br>");
	var sum=a+b;
	var mul=a*b;
	var res=a-b;
	var div=a/b;
	document.write("la suma de los dos numero es:"+sum+"<br>");
	document.write("la resta de los dos numeros es:"+res+"<br>");
	document.write("el multipricacion de los dos numeros es:"+mul+"<br>");
	document.write("la division de los dos numeros es:"+div+"<br>");
}
function ejercicio5(){
	var a=prompt("elije primer numero:");
	var b=prompt("elije otro numero:");
	var mul=a*b;
	var sum=a.valueOf()+b.valueOf();
	var res=a-b;
	var div=a/b;
	document.write("el valor del primer numero es:"+a+"<br>");
	document.write("el valor del segundo numero es:"+b+"<br>");
	document.write("la suma de los dos numero es:"+sum+"<br>");
	document.write("la resta de los dos numeros es:"+res+"<br>");
	document.write("el multipricacion de los dos numeros es:"+mul+"<br>");
	document.write("la division de los dos numeros es:"+div+"<br>");
}
//ejercicio 3
//ejercicio3("hola mundo!<br/> que facil es poner 'comillas simples'<br/> y "+'"comillas dobles"');
//ejercicio 4
//ejercicio4(6,2);
//ejercicio 5
ejercicio5();