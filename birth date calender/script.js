let UserInput = document.getElementById("date");
UserInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

//function calculateAge() {
//     console.log("input value",UserInput.value)
//     let birthdate = new Date(UserInput.value);

//     let d1 = birthdate.getDate();
//     let m1 = birthdate.getMonth() + 1;
//     let y1 = birthdate.getFullYear();

//     let today = new Date();

//     let d2 = birthdate.getDate();
//     let m2 = birthdate.getMonth() + 1;
//     let y2 = birthdate.getFullYear();

//     let d3, m3, y3;
//     y3 = y2 - y1;

//     if (m2 >= m1) {
//         m3 = m2 - m1;
//     }
//     else {
//         y3--;
//         m3 = 12 + m2 - m1;

//     }
//     if (d2 >= d1) {
//         d3 = d2 - d1;
//     }
//     else {
//      m3--;
//      d3 = getDaysInMonth(y1,m1)+d2-d1;
//     }
//     if(m3 < 0){
//         m3-11;
//         y3--;
//     }
//     console.log(y3,m3,d3);
//     result.innerHTML = `you are <span>${y3}</span>year,<span>${m3}</span>month ,and<span> ${d3}</span> days old `;
// }
// function getDaysInMonth(year,month){
//     return new Date(year,month,0).getDate();
// }//

// NEW CODE
function calculateAge() {
   var birthDate = UserInput.value
   console.log(UserInput.value)
    var today = new Date();
    var birthDate = new Date(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear;
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    result.innerHTML = `your age =${age} `;
}


