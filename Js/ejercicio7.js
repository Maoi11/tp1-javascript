let n1 = parseInt(prompt("Escriba un número"));
let n2 = parseInt(prompt("Escriba otro número"));
let n3 = parseInt(prompt("Escriba otro número"));

if (n1>n2 && n1>n3) {
    document.write("El mayor es el numero "+n1);
} else if (n2 > n3) {
    document.write("El mayor es el numero "+n2);
} else if (n3>n2) {
    document.write("El mayor es el numero "+n3);
} 
