// Sample alert
alert("Hello")

var angka = 24
var kata = "Belajar Javascript di Hacktiv8"
var available = true
var transport = ["Mobil", "Motor", "Pesawat", "Kapal"]
var manusia = {
    nama: "Sahrul",
    asal: "Mojokerto",
    usia: angka,
    status: available
}

document.getElementById("kata").innerHTML =  kata
console.log("String : " + kata)

document.getElementById("nama").innerHTML = "Nama: " + manusia.nama
document.getElementById("usia").innerHTML = "Usia: " + manusia.usia
document.getElementById("kendaraan").innerHTML = "Kendaraan: " + transport[1]
document.getElementById("status").innerHTML = "Ada: " + manusia.status

var bilangan1 = 6
var bilangan2 = 2

var penjumlahan = bilangan1 + bilangan2
var pengurangan = bilangan1 - bilangan1
var perkalian = bilangan1 * bilangan2
var pembagian = bilangan1 / bilangan2
var modulus = bilangan1 % bilangan2

document.getElementById("penjumlahan").innerHTML = "Hasil penjumlahan : " + penjumlahan
document.getElementById("pengurangan").innerHTML = "Hasil pengurangan :" + pengurangan
document.getElementById("perkalian").innerHTML = "Hasil perkalian : " + perkalian
document.getElementById("pembagian").innerHTML = "Hasil pembagian : " + pembagian
document.getElementById("modulus").innerHTML =  "Hasil modulus : " + modulus

var nilai = document.getElementById("grade").value

function hitungGrade() {
    let grade = 80
    if(nilai >= 90) {
        grade = "A"
    } else if (nilai >= 80) {
        grade = "B"
    } else if (nilai >= 70) {
        grade = "C"
    } else if (nilai >= 60) {
        grade = "D"
    } else {
        grade = "E"
    }
    

    document.getElementById("hasil").innerHTML = "Hasil nilai Anda : " + grade
}