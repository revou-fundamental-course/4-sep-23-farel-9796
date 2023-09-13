var calcDisplay = ""

function butn(e){
        calcDisplay = calcDisplay + e
        document.getElementById("inputField1").value = calcDisplay
}

function myfunction1(){
    document.getElementById("mode").innerHTML="Mode = Keliling ";
    document.getElementById("rumus").innerHTML="Rumus Keliling: 2 (panjang x lebar)";
}
function myfunction2(){
    document.getElementById("mode").innerHTML="Mode = Luas ";
    document.getElementById("rumus").innerHTML="Rumus Luas: panjang x lebar ";
}

function myfunction3(){
    let angka1 = document.getElementById("inputField1").value
    let angka2 = document.getElementById("inputField2").value

    if(mode.innerHTML=="Mode = Luas "){
        let hasil = parseInt(angka1)*parseInt(angka2)
        document.getElementById("penyelesaian").innerHTML="Hasilnya adalah: " + hasil 
    }
    else if (mode.innerHTML=="Mode = Keliling "){
        let hasil = 2*(parseInt(angka1)+parseInt(angka2))
        document.getElementById("penyelesaian").innerHTML="Hasilnya adalah: " + hasil 
    }
    else{
        alert("Pilih Mode")
    }
}

function myfunction4(e){
    document.getElementById("mode").innerHTML="Mode =";
    document.getElementById("rumus").innerHTML="";
    calcDisplay = ""
    document.getElementById("inputField1").value = calcDisplay
}

function myfunction5(e){
    calcDisplay = ""
    document.getElementById("inputField1").value = calcDisplay
}