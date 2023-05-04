// Pidiendo informacion al usuario con metodo prompt y convertirlo a entero
let dineroCofla = parseInt(prompt("¿Cuanto Dinero tiene Cofla?"));
let dineroRoberto = parseInt(prompt("¿Cuanto Dinero tiene Roberto?"));
let dineroPedro = parseInt(prompt("¿Cuanto Dinero tiene Pedro?"));

// Condicional para que el monto ingresado por el usuario vea cuanto le alcanza a cada uno
// >= mayor o igual que
// && es lo mismo que decir "Y" (AND) 

// Condicional Cofla
if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("Cofla tiene para comprarse el palito de helado de crema");
	alert("y te sobran" + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("Cofla tiene para comprarse el palito de crema");
	alert("y te sobran" + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("cofla tiene para comprarse un bombon marca heladix");
	alert("y te sobran" + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("cofla tiene para comprarse un bombon marca heladovich");
	alert("y te sobran" + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("cofla tiene para comprarse un bombon marca helardo");
	alert("y te sobran" + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
	alert("cofla tiene para comprarse un helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroCofla - 2.9));
} else {
	alert("No te alcanzo para nada Cofla.");
}
// Condicional Roberto
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("Roberto tiene para comprarse el palito de helado de crema");
	alert("y te sobran" + (dineroRoberto - 0.6));
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("Roberto tiene para comprarse el palito de crema");
	alert("y te sobran" + (dineroRoberto - 1));
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("Roberto tiene para comprarse un bombon marca heladix");
	alert("y te sobran" + (dineroRoberto - 1.6));
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("Roberto tiene para comprarse un bombon marca heladovich");
	alert("y te sobran" + (dineroRoberto - 1.7));
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("Roberto tiene para comprarse un bombon marca helardo");
	alert("y te sobran" + (dineroRoberto - 1.8));
} else if (dineroRoberto >= 2.9) {
	alert("Roberto tiene para comprarse un helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroRoberto - 2.9));
} else {
	alert("No te alcanzo para nada Roberto.");
}
// Condicional Pedro
if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("Pedro tiene para comprarse el palito de helado de crema");
	alert("y te sobran" + (dineroPedro - 0.6));
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("Pedro tiene para comprarse el palito de crema");
	alert("y te sobran" + (dineroPedro - 1));
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("Pedro tiene para comprarse un bombon marca heladix");
	alert("y te sobran" + (dineroPedro - 1.6));
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("Pedro tiene para comprarse un bombon marca heladovich");
	alert("y te sobran" + (dineroPedro - 1.7));
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("Pedro tiene para comprarse un bombon marca helardo");
	alert("y te sobran" + (dineroPedro - 1.8));
} else if (dineroPedro >= 2.9) {
	alert("Pedro tiene para comprarse un helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroPedro - 2.9));
} else {
	alert("No te alcanzo para nada Pedro.");
}