let n1 = parseInt(prompt("Escriba un numero"));
let n2 = parseInt(prompt("Escriba otro numero")); 

if (n1>n2) {
    document.write("El mayor es "+n1);
} else {
    if (n2 == n1) {
        
    document.write("Los numeros son iguales");
    } else {
       document.write("El mayor es el "+n2);
}
}