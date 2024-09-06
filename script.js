// Tunggu hingga DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Pilih semua link navigasi
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default klik link

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Menghitung offset top dari elemen target
                const offsetTop = targetElement.offsetTop - document.querySelector('header').offsetHeight;

                // Melakukan scroll ke posisi yang dihitung
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});