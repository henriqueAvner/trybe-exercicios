let n1 = 44;
let n2 = 78;
let n3 = 20;
maior = '';
if (n1 > n2 && n1 >n3) {
    maior = n1;
}else if (n2 > n1 && n2 > n3) {
    maior = n2;
}else if (n3 > n1 && n3 > n2) {
    maior = n3;
}
console.log(maior);
