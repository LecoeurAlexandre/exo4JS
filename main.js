let nb1 = Number(prompt("Veuillez saisir le côté d'un carré en cm : "));
let perimetre = nb1*4;
let aire = nb1*nb1;

let msg = `Le périmètre d'un carré de ${nb1}cm de côté est de ${perimetre}cm. L'aire est de ${aire}cm2`;
console.log(msg);

let nb2 = Number(prompt("Veuillez saisir le côté d'un rectangle en cm : "));
let nb3 = Number(prompt("Veuillez saisir l'autre côté du rectangle en cm : "));
perimetre = nb2*2 + nb3*2;
aire = nb2*nb3;

msg = `Le périmètre d'un rectangle de ${nb2}cm sur ${nb3}cm de côté est de ${perimetre}cm. L'aire est de ${aire}cm2`;
console.log(msg);