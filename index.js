
//1
if ( true && false) {
    console.log('true');
} else {
    console.log('false');
}


if ( true || false) {
    console.log('true');
} else {
    console.log('false');
}

if (false && false) {
    console.log('true');
} else {
    console.log('false');
}

if (true && (false || true)) {
    console.log('true');
} else {
    console.log('false');
}

if (false || (true && false)) {
    console.log('true');
} else {
    console.log('false');
}

if (false || 1 < 5) {
    console.log('true');
} else {
    console.log('false');
}

if (5 >= 4 && 1 > 3) {
    console.log('true');
} else {
    console.log('false');
}

if (10 < 4 || 1 > 4) {
    console.log('true');
} else {
    console.log('false');
}

if (12 >= 2 && 1 < 24) {
    console.log('true');
} else {
    console.log('false');
}


if ("‘Hello".charAt(0) == "H") {
    console.log('true');
} else {
    console.log('false');
}

//2
var isHotOutside = true;
var isWeekday = false;
var hasMoneyInPocket = true;

//3
var costOfMilk = 2.39;
var moneyInWallet = 5.40;
var thirstLevel = 7;

//4
var shouldByIcecream = isHotOutside && hasMoneyInPocket; //true
var willGoSwimming = isHotOutside && isWeekday; //false
var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;//true
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= costOfMilk*2;//true

//5
console.log("It is both hot outside and I have money in my pocket to buy ice cream and the answer is " + shouldByIcecream);
console.log("It is both hot outside and a weekday so I should go swimming, right? The answer is " + willGoSwimming);
console.log("It is hot outside, not a weekday, and I have money in my pocket, right? The answer is " + isAGoodDay);
console.log("It is hot outside, thirst level is equal to or above a 3, and I have equal to or more money in my wallet than two times the price of milk, right? The answer is " + isAGoodDay);

