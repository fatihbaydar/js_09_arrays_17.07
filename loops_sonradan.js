
//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***");

//? Örnek

const maaslar =[1000,2000,4000]
let sum = 0
for(let i = 0; i<maaslar.length; i++){
    sum += maaslar[i]
}
console.log("maaslar toplamı: ",sum);

//?-------------- ÖRNEK -------------------
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

const notlar = [50, 45, 67, 75, 15];
const elliden_kucukler = [];
const elliden_buyukler = [];

for(let i=0; i<notlar.length; i++){
    if(notlar[i]<50){
        elliden_kucukler.push(notlar[i]);
    }else{
        elliden_buyukler.push(notlar[i])
    }
}
console.log(elliden_buyukler);
console.log(elliden_kucukler);

//?-------------- FOR IN -------------------
//?-------------- ÖRNEK -------------------
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz. 

const sayilar = [-5,15,22,-4,45,78,-25]

let sonuc = 0
for(i in sayilar){
    sonuc+= sayilar[i]
}
console.log(sonuc);

//?-------------- ÖRNEK -------------------
const salaries = [50000, 35000, 120000, 44000];
let total = 0

for(let i in salaries){
    total+= salaries[i]
}
console.log(total);
const average = total / salaries.length
console.log(average);

//?-------------- FOR OF -------------------
//! for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

const notlar1 = [50, 45, 67, 75, 15];
const elliden_kucuk = [];
const elliden_buyuk = [];

for(not of notlar1){
    not<50 ? elliden_kucuk.push(not) : elliden_buyuk.push(not);
}

console.log(elliden_buyuk);
console.log(elliden_kucuk); 

//TODO:
//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]
//*--------------------------------------------------------

//! ogrenciAra("ahmet")  ===> "Ahmet 2 adet bulundu"
//! ogrenciAra("canan")  ===> "Canan bulunamadı"

//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.