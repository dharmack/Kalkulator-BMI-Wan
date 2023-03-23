
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
// var bw = 0
// var at = 0

if(weight > 0 && height > 0){	
var finalBmi = weight/(height*height)

document.getElementById("result").innerHTML = finalBmi.toFixed(1);
if(finalBmi < 18.5){
document.getElementById("result-statement").innerHTML = "Kekurangan Berat Badan"
document.getElementById("saran").innerHTML = "Anda berada dalam Kategori Kurus <br> Cara tebaik untuk mendapat berat Badan Ideal adalah dengan menambah Konsumsi Makan anda 30% dan pergi ke Gym :P"
}
if(finalBmi > 18.5 && finalBmi < 25){
document.getElementById("result-statement").innerHTML = "Berat Badan Normal / Ideal"
document.getElementById("saran").innerHTML = "Anda berada dalam kategori ideal <br> Udah pas Mas/Mbak, semoga makin Ganteng/Cantik"
}
if(finalBmi >= 25 && finalBmi < 30 ){
document.getElementById("result-statement").innerHTML = "Kelebihan Berat Badan"
document.getElementById("saran").innerHTML = "Anda berada dalam Kategori Kelebihan Berat Badan <br> Cara tebaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi konsumsi karbohidrat dan gula sedikit"
}
if(finalBmi > 30 ){
document.getElementById("result-statement").innerHTML = "Kegemukan / Obesitas"
document.getElementById("saran").innerHTML = "Anda berada dalam Kategori Obesitas <br> Cara tebaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga TERATUR. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berlebih dan Anda Harus rajin mengontro kalori yang dikonsumsi dan Rajin Olahraga"
}
}
bw = Math.floor(finalBmi);
document.getElementById("bwi").innerHTML = bw;
at = Math.ceil(finalBmi);
document.getElementById("ati").innerHTML = at;
document.getElementById("antara").innerHTML = "Hasil BMI diantara";
document.getElementById("dan1").innerHTML = "dan";
}
//-->

