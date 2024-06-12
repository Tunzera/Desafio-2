let saldoDeVD = diferenca (1013,20)
let tier
switch(true){
  case(saldoDeVD)<=10:
    tier = "ferro"
    break;
  case(saldoDeVD)>10 && (saldoDeVD)<=20:
   	tier = "bronze"
   	break;
  case(saldoDeVD)>20 && (saldoDeVD)<=50:
  	tier = "prata"
   	break; 
  case(saldoDeVD)>50 && (saldoDeVD)<=80:
   	tier = "ouro"
   	break;
  case(saldoDeVD)>80 && (saldoDeVD)<=90:
   	tier = "diamante"
 		break;
  case(saldoDeVD)>90 && (saldoDeVD)<=100:
   	tier = "lendário"
		break;
  case(saldoDeVD)>100:
    tier = "imortal"
   	break;
}
console.log("O herói tem de saldo de " + saldoDeVD+ " e está no tier "+ tier)

function diferenca(vitoria, derrota){
    let vitoriaMenosDerrota = vitoria - derrota
    return vitoriaMenosDerrota
}