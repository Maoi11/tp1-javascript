let frase = prompt("Escriba una frase");
frase = frase.toLowerCase();
console.log(frase);

for (let i = 0; i < frase.length; i++) {
    if (
        frase.substring(i, 1) == 'a' ||
        frase.substring(i, 1) == 'e' ||
        frase.substring(i, 1) == 'i' ||
        frase.substring(i, 1) == 'o' ||
        frase.substring(i, 1) == 'u' || )
        
        document.write(frase.substring(i, 1));
}