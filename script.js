document.getElementById("sapaForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman
    const nama = document.getElementById("nama").value.trim();
    const messageElement = document.getElementById("message");
  
    if (nama) {
      // Jika nama terisi, tampilkan pesan hijau
      messageElement.textContent = `Halo ${nama}, welcome!`;
      messageElement.style.color = "green";
    } else {
      // Jika nama kosong, tampilkan pesan merah
      messageElement.textContent = "Isi dulu jirr!";
      messageElement.style.color = "red";
    }
  });
  