let result = calcPdl(61, 10);
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendario", "Imortal"];

function calcPdl(numV, numD) {
    let mediaPdl = numV - numD;
    return mediaPdl;
}


if (result < 10) {
    console.log("O Heroi tem de saldo " + result + "esta no nivel " + nivel[0]);
} else if (result >= 10 && result <= 20) {
    console.log("O Heroi tem de saldo " + result + " esta no nivel " + nivel[1]);
} else if (result >= 21 && result <= 50) {
    console.log("O Heroi tem de saldo " + result + " esta no nivel " + nivel[2]);
} else if (result >= 51 && result <= 80) {
    console.log("O Heroi tem de saldo " + result + " esta no nivel " + nivel[3]);
} else if (result >= 81 && result <= 90) {
    console.log("O Heroi tem de saldo " + result + " esta no nivel " + nivel[4]);
} else if (result >= 91 && result <= 100) {
    console.log("O Heroi tem de saldo " + result + " esta no nivel " + nivel[5]);
} else{
    console.log("O Heroi tem de saldo " + result + " esta no nivel " + nivel[6]);
}
