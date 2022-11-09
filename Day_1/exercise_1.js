// 1. Write a code to find area of rectangle. 
let panjang = 5
let lebar = 6
luas = panjang * lebar
console.log("Luas Persegi Panjang :"+luas);

// 2 Write a code to find perimeter of rectangle.
keliling = 2*(panjang+lebar)
console.log("Keliling Persegi Panjang :"+keliling);

// 3 Write a code to find diameter, circumference and area of a circle.
let jari_jari= 2
diameter = 2*jari_jari
luas_lingkaran= 2*3.14*jari_jari**2
keliling_lingkaran= 3.14*diameter

console.log("Diameter lingkaran : "+diameter+
            "\n,Luas lingkaran : "+luas_lingkaran+
            "\n,Keliling lingkaran : "+keliling_lingkaran)

// 4. Write a code to find angles of triangle if two angles are given.
let a= 30
let b = 90
c= 180-a-b
console.log("Sisi ketiga dari segita adalah "+c+" derajat");

// 5. Write a code to get difference between dates in days.
// Alternatif 1
// let date_1 = new Date("2022-12-24")
// let date_2 = new Date("2022-12-25")
// tahun_1 = date_1.getFullYear()
// tahun_2 = date_2.getFullYear()
// bulan_1 = date_1.getMonth()
// bulan_2 = date_2.getMonth()
// day_1= date_1.getDate()
// day_2= date_2.getDate()

// beda_tahun=(tahun_2-tahun_1)*365
// beda_bulan=(bulan_2-bulan_1)*30
// beda_hari = (day_2-day_1)
// result=beda_tahun+beda_bulan+beda_hari
// console.log("Beda hari nya adalah "+result+" hari");

// Alternatif 2
let date1 = new Date("11/01/2022");
let date2 = new Date("11/08/2022");

let diffTime = date2.getTime() - date1.getTime()
console.log(diffTime)
console.log(date2-date1);
let diffDays = diffTime / (1000 * 60 * 60 * 24)

// 6 Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days

let try_1= 29
tahun = Math.floor(try_1 / 365)
bulan= Math.floor((try_1 % 365)/30)
day=Math.floor((try_1 % 365 % 30))
console.log(tahun+" tahun, "+bulan+" bulan, "+day+" days");
