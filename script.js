const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour >= 6 && hour < 9) {
  greeting.innerText = "Selamat Pagi, Semoga harimu beruntung";
} else if (hour >= 9 && hour < 14) {
  greeting.innerText = "Selamat Siang, Selamat Berjuang Sukses";
} else if (hour >= 14 && hour < 18) {
  greeting.innerText = "Selamat Sore, Jangan Lupa beristirahat";
} else {
  greeting.innerText = "Selamat Malam, Semoga harimu menyenangkan";
}
