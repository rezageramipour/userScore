var userScore = +prompt("معدل خود را وارد کنید.", 18);

switch (userScore) {
    case 18:
    case 19:
    case 20:
        alert("A");
        break;
    case 17:
    case 16:
    case 15:
        alert("B");
        break;
    case 14:
    case 13:
    case 12:
        alert("C");
        break;
    default:
        alert("معدل کمتر از 12 مشروط میشه.");
}

// if (userScore > 20){
//     alert("معدل وارد شده معتبر نمی باشد.");
// } else {
//     if (userScore > 17) {
//         alert("A");
//     } else if(userScore > 14) {
//         alert("B");
//     } else if (userScore > 11) {
//         alert("C")
//     } else {
//         alert("معدل کمتر از 12 مشروط میشه.");
//     }
// }