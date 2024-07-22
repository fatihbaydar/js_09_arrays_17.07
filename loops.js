/* ---------------------------------- */
/*              FOR LOOP              */
/* ---------------------------------- */

console.log("****LOOPS IN ARRAYS***");

//Örnek

const maaslar = [50000,35000,120000,44000]
let sum = 0
for(let i= 0;i<maaslar.length; i++){
    sum += maaslar[i]
}

console.log(sum);

const notlar =[50,45,67,75,15]

for(let i= 0; i<notlar.length; i++){
    if(notlar[i]<50){
        console.log("50'den küçük");
    }else{
        console.log("50den büyük");
    }
}

const ellidenKucukler = [];
const ellidenBuyukler = [];

for(let i= 0; i<notlar.length; i++){
    if(notlar[i]>50){
        ellidenKucukler.push(notlar[i]);
    }else{
        ellidenBuyukler.push(notlar[i]);
    }
}

console.log(ellidenBuyukler);
console.log(ellidenKucukler);


const salaries = [50000,35000,120000,44000]
let total = 0
for(let i in salaries){
total += salaries[i]
}
const aver = total / salaries.length
console.log(aver);

const nots = [50, 45, 67, 75, 15];
const buyukler = []
const kucukler = []

for(a of nots){  //isimlendirme bize ait
    a<50 ? kucukler.push(a) : buyukler.push(a)
}

console.log(buyukler);
console.log(kucukler);