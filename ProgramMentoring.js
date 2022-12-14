// Mencari kategori lengkap program mentoring
const navPM = document.getElementsByClassName("nav_text_pm")[0];
const programMentoring = document.getElementById("pm");
const icon = document.querySelector(".nav_text_pm i");

navPM.addEventListener("mouseenter", function(){
   navPM.classList.toggle("active")
   icon.classList.toggle("active")
   programMentoring.classList.toggle("toggle");
});

programMentoring.addEventListener("mouseleave", function(){
   navPM.classList.toggle("active")
   icon.classList.toggle("active")
   programMentoring.classList.toggle("toggle");
});

const navKontenSiswa = document.getElementsByClassName("search_siswa")[0];
const navCariSiswa = document.querySelectorAll(".search_siswa h6");
const navSD = document.getElementsByClassName("content_nav_SD")[0];
const navSMP = document.getElementsByClassName("content_nav_SMP")[0];
const navSMA = document.getElementsByClassName("content_nav_SMA")[0];

navCariSiswa.forEach(function(el, i){
   el.addEventListener("click", function(){
      navKontenSiswa.querySelector(".active").classList.remove("active")
      el.classList.add("active")

      if ( i == "0"){
         navSD.classList.replace("off", "on")
         navSMP.classList.replace("on", "off")
         navSMA.classList.replace("on", "off")
      }else if (i== "1") {
         navSD.classList.replace("on", "off")
         navSMP.classList.replace("off", "on")
         navSMA.classList.replace("on", "off")
      }else if (i=="2"){
         navSD.classList.replace("on", "off")
         navSMP.classList.replace("on", "off")
         navSMA.classList.replace("off", "on")
      }
   })
})


// program mentoring SISWA yang di landing page
const kontenSiswa = document.getElementsByClassName("categori_kelas")[0];
const cariSiswa = document.querySelectorAll(".categori_kelas h2");
const SD = document.getElementsByClassName("categori_SD")[0];
const SMP = document.getElementsByClassName("categori_SMP")[0];
const SMA = document.getElementsByClassName("categori_SMA")[0];
const gambarSD = document.querySelector(".siswa_sd img:nth-child(1)");
const gambarSMP = document.querySelector(".siswa_sd img:nth-child(2)");
const gambarSMA = document.querySelector(".siswa_sd img:nth-child(3)");

cariSiswa.forEach(function(el, i){
   el.addEventListener("click", function(){
      kontenSiswa.querySelector(".active").classList.remove("active")
      el.classList.add("active")

      if ( i == "0"){
         SD.style.transform = "translateX(0)"
         SMP.style.transform = "translateX(0)"
         SMA.style.transform = "translateX(0)"
         gambarSD.classList.replace("off", "on")
         gambarSMP.classList.replace("on", "off")
         gambarSMA.classList.replace("on", "off")

      }else if (i== "1") {
         SD.style.transform = "translateX(-100%)"
         SMP.style.transform = "translateX(-100%)"
         SMA.style.transform = "translateX(-100%)"
         gambarSD.classList.replace("on", "off")
         gambarSMP.classList.replace("off", "on")
         gambarSMA.classList.replace("on", "off")
      }else if (i=="2"){
         SD.style.transform = "translateX(-200%)"
         SMP.style.transform = "translateX(-200%)"
         SMA.style.transform = "translateX(-200%)"
         gambarSD.classList.replace("on", "off")
         gambarSMP.classList.replace("on", "off")
         gambarSMA.classList.replace("off", "on")
      }
   })
})

const read = document.getElementsByClassName("read")[0];
const lengkap = document.getElementsByClassName("deskripsi-lengkap")[0];

read.addEventListener("click", function(){
   if ( read.innerText === "singkatkan"){
      read.innerText = "selengkapnya..."
      lengkap.classList.add("deskripsi-lengkap-off")
   }else {
      read.innerText = "singkatkan"
      lengkap.classList.remove("deskripsi-lengkap-off")
   }
})

// const read = document.getElementsByClassName("read")[0];
// const lengkap = document.getElementsByClassName("deskripsi-lengkap-off")[0];

// read.addEventListener("click", function(){
//    if ( lengkap.className == "deskripsi-lengkap-off"){
//       read.innerText = "singkatkan"
//       lengkap.classList.replace("deskripsi-lengkap-off", "deskripsi-lengkap")
//    }else {
//       read.innerText = "selengkapnya..."
//       lengkap.classList.replace("deskripsi-lengkap", "deskripsi-lengkap-off")
//    }
// })