let lista = [
  219, 141, 437, 240, 299, 152, 504, 483, 542, 249, 458, 301, 402, 174, 101,
  357, 268, 111, 434, 507, 214, 274, 435, 359, 486, 32, 185, 455, 198, 148, 302,
  167, 225, 376, 138, 62, 416, 496, 433, 461, 446, 294, 120, 295, 155, 458, 184,
  405, 151, 353, 398, 319, 131, 510, 424, 495, 497, 162, 141, 310, 198, 78, 416,
  255, 235, 242, 18, 401, 402, 458, 68, 100, 312, 505, 427, 108, 258, 382, 309,
  175, 137, 293, 103, 189, 116, 183, 246, 25, 372, 437, 499, 328, 496, 278, 473,
  183, 147, 243, 30, 524, 570,
];

/*
1) Faça um programa que faça a soma de todos os 
   elementos da lista
*/

let soma = 0;
for (let i = 0; i < lista.length; i++) {
  soma = soma + lista[i];
  console.log(soma);
  console.log(Math.max.apply(null, lista));
}
document.write(soma);
document.write(Math.max.apply(null, lista));
// sua lógica

console.log(soma);

/*
2)  Faça um programa que encontre o maior elemento da lista
*/

let maior = -1;

// sua lógica

console.log(maior);
