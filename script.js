document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".bg-slide");
    let slideIndex = 0;
  
    function showSlides() {
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
      }
      slides[slideIndex - 1].style.opacity = "1";
      setTimeout(showSlides, 5000); // Ganti gambar setiap 5 detik
    }
  
    showSlides();
  });
  