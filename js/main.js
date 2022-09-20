var text = document.querySelector(".text");
var greeting = prompt("Assalomu aleykum hurmatli mijoz ismingizni kiriting");
var welcome = prompt(
  "Sayohat agentligimizga xush kelibsiz" +
    " " +
    greeting +
    ", sayohat uchun qaysi davlatni tanladingiz"
);
alert(welcome + "ga borib kelish harajatlari 500$");
alert("Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250");
alert("Muzey va ko’ngilochar joylar uchun - 120 yevro");
var money = prompt(greeting + " Mablag' qiymatingizni kiriting");
var dollarInSoms = 10.9;
var euroInSoms = 12.27264;

var expence = 500;
var hotel = 250;
var museum = 120;
var sumOfDollars = expence + hotel;
var dollarToSoms = sumOfDollars * dollarInSoms;
var euroToSoms = museum * euroInSoms;
var sumOfTicket = dollarToSoms + euroToSoms;

if (money >= sumOfTicket) {
  text.textContent =
    "Oq yo'l" +
    " " +
    greeting +
    " Maroqli sayohat tilayman! Murojatingiz uchun minnatdormiz :)";
} else {
  text.textContent = greeting + " " + "Mablag'ingiz yetarli emas";
}
