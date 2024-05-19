function updateClock() {
  const now = new Date();
  const jam = String(now.getHours()).padStart(2, '0');
  const menit = String(now.getMinutes()).padStart(2, '0');
  const detik = String(now.getSeconds()).padStart(2, '0');
  
    document.getElementById('jam').textContent = jam;
    document.getElementById('menit').textContent = menit;
    document.getElementById('detik').textContent = detik;
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);

// Memanggil fungsi updateClock() untuk pertama kali saat halaman dimuat
updateClock();