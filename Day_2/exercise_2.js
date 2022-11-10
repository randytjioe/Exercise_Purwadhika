// 1 Write a code to convert celsius to fahrenheit.
let celcius = 20
fahrenheit = (celcius * 9/5)+32
console.log(celcius+" derajat = "+ fahrenheit +" fahrenheit")

// 2 Write a code to check whether the number is odd or even
// let input = 6
// if (input % 2 == 0) {
//     console.log(input+" bernilai Genap")
// } else {
//     console.log(input+" bernilai Ganjil")
// }

let number = 5;
console.log( number % 2 == 0 ? `${number} is even` : `${number} is odd`)

// 3 Write a code to check whether the number is prime number or not
// let n=3
// let flag=0    
//     m=n/2;    
//     for(i=2;i<=m;i++)    
//     { if(n%i==0)    
//         { console.log(n+" adalah tidak bilangan prima");    
//     flag=1;    
//     break;    
//     }}  if(flag==0)    
//     console.log(n+" adalah bilangan prima");     
    
    let prime = true;
    if (number == 0 || number == 1)
      prime = false;
  
    for (let i = 2; i <= number / 2; ++i) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }
  prime ? console.log( number +  " is a prime number." ) 
  :
  console.log( number + " is not a prime number." );


// 4 Write a code to find the sum of the numbers 1 to N.
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
// let number=3
// let fact = 0
// for(i=1;i<=number;i++){    
//     fact=fact+i;    
// }    
// console.log("Penjumlahan dari 1 sampai "+number+" adalah "+fact)

// // 5 Write a code to find factorial of a number.
// let number_2=5
// let fact_2 = 1
// for(i=1;i<=number_2;i++){    
//     fact_2=fact_2*i;    
// }    
// console.log("Faktorial dari "+number_2+" adalah "+fact_2)

let sum = 0;
let text = `${number} → `
for (let i = 1; i <= number; i++) {
    i == 1 ? text += ` ${i}` :
    text += ` + ${i}`
sum+= i;
}
console.log( text + " = " + sum);

// Write a code to find factorial of a number.
let factorial = 1;    
text = `${number} → `;
   for(let i=1;i<=number;i++){  
    i==1 ? text += ` ${i}` : text += ` x ${i}`  
    factorial=factorial * i;    
 }    
 console.log(`Factorial of ${text} = ${factorial}`);    


// 6 Write a code to print the first N fibonacci numbers.
// var n1 = 0
// var n2 = 1
// var input_6=15
// for(i=0;i<input_6;i++){    
//     n3=n1+n2;      
//     console.log(n3)
// n1=n2
// n2=n3
// }

let temp1=0,temp2=1,temp3=0;   
number = 10;     
text = `${number} number(s) of fibonnaci :  ${temp1}, ${temp2}`;
for(let i=2;i<number;++i)   
{    
 temp3=temp1+temp2;    
 text += `, ${temp3}`
 temp1=temp2;    
 temp2=temp3;    
}  

console.log(text);  

//7 Diketahui berat badan dan tinggi badan , Find BMI 
//Outputnya : kalau beratnya ideal , dininfo ideal kalau tidak ideal , info tidak ideal
// let tinggi = 1.77
// let berat = 82
// 	bmi = berat / (tinggi * tinggi);

// 	if (bmi > 27) {
// 		keterangan = "Gemuk, Kelebihan berat badan tingkat berat";
// 	}else if ((bmi >= 25.1) & (bmi <= 27)){
// 		keterangan = "Gemuk, Kelebihan berat badan tingkat ringan";
// 	}else if ((bmi >= 18.5) & (bmi <= 25)){
// 		keterangan = "Normal";
// 	} else if ((bmi >= 17) & (bmi <= 18.4)){
// 		keterangan = "Kurus, Kekurangan berat badan tingkat ringan";
// 	}else {
// 		keterangan = "Kurus, Kekurangan berat badan tingkat berat";
// 	}
//     console.log(keterangan)

let berat = 72;
let tinggi = 1.74;
let result = berat / tinggi ** 2;

let notif = `Massa ${berat} kg & tinggi ${tinggi} m \n`;

if (result < 18.5) {
  notif += `BMI = ${result}, BERAT BADAN ANDA KURANG!`;
} else if (result >= 18.5 && result <= 24.9) {
  notif += `BMI = ${result}, BERAT BADAN ANDA IDEAL!`;
} else if (result >= 25.0 && result <= 29.9) {
  notif += `BMI = ${res}, BERAT BADAN ANDA BERLEBIH!`;
} else if (result >= 30.0 && result <= 39.9) {
  notif += `BMI = ${result}, BERAT BADAN ANDA SANGAT BERLEBIH!`;
} else {
  notif += `BMI = ${result}, BERAT BADAN ANDA OBESITAS!`;
}

console.log(notif);
//8 Input total loop
//console.log angka yang diloop
// bila habis di bagi 3 , console.log("BUZZ")
// bila habis di bagi 5 , console.log("FUZZ")
// bila dapat di bagi 3 , console.log("FUZZBUZZ")

// let kata = "";
// let input_8=15
// for(let i=1;i<=input_8;i++) {
//      if(i%3 == 0){
//         kata = "BUZZ"
//     }
//     else if(i%5 == 0){
//         kata = "FIZZ"
//     }
//     else if(i%3 == 0 && i%5 == 0){
//         kata="FIZZBUZZ"
//     }
//     else {kata=="i"}
//     console.log(kata)
//     }

    text = ""
    number = 15
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        text += ` FuzzBuzz ` 
      } else if (i % 5 === 0) {
        text += ` Fuzz ` 
      } else if (i % 3 === 0) {
        text += ` Buzz ` 
    
      } else {
        text += `${i} ` 
        // console.log(i);
      }
    }
    
    console.log(text);