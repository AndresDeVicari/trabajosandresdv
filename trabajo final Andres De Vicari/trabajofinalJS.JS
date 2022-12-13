let edad;

edad = prompt("Introduce tu edad");

if (edad >= 18)
{
alert("Podes ingresar");
} 
else 
{

if (edad <= 18)    
alert("Tené cuidado, estás bajo tu responsabilidad");
}

var resultado = window.confirm('Estás saliendo del sitio');
if (resultado === true) {
    window.alert('¡Hasta pronto!');
}