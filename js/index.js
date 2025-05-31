 const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      });

      const boxes = document.querySelectorAll('.service-box');
      boxes.forEach(box => {
        box.classList.add('hidden'); // نخليهم متخفيين الأول
        observer.observe(box); // نراقبهم
      });
  
  document.getElementById("goToForm").addEventListener("click", function () {
    document.getElementById("formcn").scrollIntoView({ behavior: "smooth" });
  });
   document.getElementById("goToFormm").addEventListener("click", function () {
    document.getElementById("formcn").scrollIntoView({ behavior: "smooth" });
  });
