//* =======================================
//*           FOREACH METHOD
//* =======================================
console.log("****** ITERATION **********");
//! NOT: forEach metodu void bir metottur. Yani herhangi bir değer döndürmez, diziyi fonksiyon içinde yazdırır ve tüketir bitirir. Siz extra bişey istemedikçe diziyi değiştirmez

const sayilar = [4,5,6,7,,1]
sayilar.forEach((x)=> console.log(x))
console.log("***************");

//alternatif 1
sayilar.forEach(function(x){
    console.log(x);
})

console.log("***************");
//alternatif 2
sayilar.forEach(yazdır);
function yazdır(x){
    console.log(x);
}

// 2 parametreli
sayilar.forEach((x, index)=> console.log("değer:",x, "sıra:", index));

let toplam = 0
sayilar.forEach((sayi)=> (toplam += sayi));
console.log("toplam:",toplam);

// 3 parametreli
const notlar =[40,50,25,70,80]  

//! süslü parantezli olarak da yazılabilir
notlar.forEach((not,index,dizi)=>{
    dizi[index] = not*1.5
})
console.log(notlar);

// eğer sadece not*1.5 yapsak notlar dizisini aynen döndürür değişiklik yapmaz. çünkü forEach değiştirmez. o yüzden dizi[index] yaptık.her indexe ulaş ve 1.5 ile çarp.
//? forEach return yapmaz(void function)
const kare = notlar.forEach(x=> x*x)
console.log(kare); // undefined


//* =======================================
//*            MAP METHOD
//* =======================================
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez. Orjinal diziyi değiştirmez
//?-------------- ÖRNEK -------------------
//! callback function içinde süslü kullanmadığımız takdirde "return" keywordünü açıkça yazmamıza gerek yoktur, kendisi otomatik return eder.
 
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const buyuk = names.map((isim)=> isim.toUpperCase());
console.log(buyuk);

const buyuk1 = names.map((isim)=>{
    isim.toUpperCase();
});
console.log(buyuk1); // undefined. callbak functionda ikinci satıra geçip süslü açınca return yazmalıydık.süslü kullanmayınca otomatik return var gibi davranıyor.

const buyuk2 = names.map((isim)=>{
    return isim.toUpperCase();
});
console.log(buyuk2); // return edince oldu.

//! süslü kullandığımız takdirde "return" açıkça yazılmalı
 
const isim3 = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];
const buyuk11 = names.forEach((x)=>x.toUpperCase());
console.log(buyuk11); // undefined oldu. forEach döndürmedi

//?-------------- ÖRNEK -------------------
//? macBookTL dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const macBookTL = [90000, 75000, 60000, 40000, 30000];

const euro = 36.29
const dolar = 33.06

const macBookDolar = macBookTL.map(fiyat => Math.trunc(fiyat/dolar))
console.log(macBookDolar);

const macBookEuro = macBookTL.map(fiyat=> Math.trunc(fiyat/euro))
console.log(macBookEuro);

//* =======================================
//*            FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? maasi 50000 den büyük olanları yeni bir dizide toplayınız
const maaslar = [90000, 75000, 60000, 40000, 30000];

const artı = maaslar.filter((x)=> x>50000)
console.log(artı);

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//? ORNEK: maasi 50000'den az olanları tespit edip %20 zam yapalım ve bunları yeni bir dizide toplayalım (orjinal diziyi degistirmeden)

const salary = [90000, 75000, 60000, 40000, 30000];
const düşükler = salary.filter((maas)=> maas<50000)
console.log(düşükler);

const zamlıMaaslar = düşükler.map((maas)=> maas*1.2);
console.log(zamlıMaaslar);

// chaining
const zamlılar = salary.filter((maas)=> maas<50000).map((maas)=> maas*1.2);
console.log(zamlılar);

//* =======================================
//*           REDUCE
//* =======================================

const salaries = [40000, 30000, 20000, 100000];

// let toplamMaas = 0
// salaries.map((maas)=> toplamMaas+= maas)
// console.log(toplamMaas);

const toplamMaas= salaries.reduce((hepsi,maaş)=> hepsi+maaş,5)
console.log(toplamMaas);

const sayilarim = [4, 6, 8, 10];
const carpim = sayilarim.reduce((top, value) => top * value,2);
console.log(carpim);
// (top, value) => top * value,2 valuden sonra birşey yazmazsak onu etkisiz alır. burda 2 yazdık sonucu 2 ile çarptı.

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18,88,45,67,34]
const check = ages.every((age)=> age>=18)
console.log(check);
check ? console.log("all ages are over 18") : console.log("some ages are undr 18");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const overCheck = ages.some((age)=> age>95)
console.log(overCheck);

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//? yaşı 30'dan büyük ilk elemanı ve son dön

const agePlus30 = ages.find((age)=> age>90)
console.log(agePlus30);