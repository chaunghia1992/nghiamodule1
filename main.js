//bai1:
// function GPTB2(a, b, c) {
//           let x1, x2;
//           let delta = b * b - 4 * a * c;
//            if (a === 0) {
//                if (b === 0) {
//                  console.log('Phương trình vô nghiệm');
//                 } else {
//                     x1 = x2 = (-c) / b;
//                     console.log (`Phương trình có 1 nghiệm ${x1}`);
//                 }
//             } else {
//                 if (delta == 0) {
//                     x1 = x2 = (-b) / 2 * a;
//                     console.log (`Phương trình có 1 nghiệm kép x1 = x2 = ${x1} `);
//                 } else if (delta > 0) {
//                     x1 = (-b + Math.sqrt(delta)) / (2 * a);
//                     x2 = (-b - Math.sqrt(delta)) / (2 * a);
//                     console.log (`Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}`);
//                 } else {
                   
//                 }
//             }
//         }
//         GPTB2(8,12,-20);


// bai2:
// let index = 0
// function findValueInArray (number , array){
//     for (let i = 0;i< array.length;i++){
//         if(number == array[i]){
//             index +=1;
//         }
//     }
//     if(index == 0){
//         console.log(`Số ${number}; vừa nhập không nằm trong mảng đã nhập`) ;
//     }else {
//         console.log(`Số ${number}; vừa nhập nằm trong mảng đã nhập`);
//     }
// }
// let arr = [3,4,5,6,7,9]
// let num = 6;
// findValueInArray(num,arr);

// bai3:
// let count = 0;
// function findVowelCharacter(string, arr){
//     for(let i = 0; i < string.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(string.charAt(i) === arr[j]){
//                 count += 1;
//             }
//         }
//     }
//     if(count > 0){
//         console.log(`có ${count} số ký tự nguyên âm `);
//     } else{
//         console.log('false');
//     }
// }
// let arr = ["a", "o", "e", "u","i"]
// let str = "hello"
// findVowelCharacter(str,arr)
bai4:
function Starff(fullname, email) {
    this.fullname = fullname;
    this.email = email;
    this.setFullname = function (fullname) {
        this.fullname = fullname;
    }
    this.setEmail = function (email) {
        this.email = email;
    }
    this.getFullname = function () {
        return fullname;
    }
    this.getEmail = function () {
        return email;
    }
    this.toString = function () {
        return console.log(`Nhân viên có tên là: ${this.getFullname()} ; Email: ${this.getEmail()} `);
    }
}
let starff = new Starff("David do", "david.do@gmail.com");
starff.setFullname("David Do");
starff.setEmail("david.do@gmail.com")
starff.toString();
let staffs = [
    new Starff("David do", "daviddo@gmail.com"),
    new Starff("Icadi", "icadi@gmail.com"),
    new Starff("Dybala", "dybala@gmail.com")
]
function displayNameStaff() {
    for (let i = 0; i < staffs.length; i++) {
        staffs[i].toString();
    }
}
displayNameStaff();



























