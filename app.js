/* IMPÉRIO BARBER — JS LIMPO E OTIMIZADO */
(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  /* =========================
     NAVBAR AO ROLAR
  ========================= */
  const nav = $(".nav");

  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav?.classList.add("is-solid");
    } else {
      nav?.classList.remove("is-solid");
    }
  };

  window.addEventListener("scroll", handleScroll);

  /* =========================
     REVEAL AO SCROLL
  ========================= */
  const revealElements = $$("[data-reveal]");

  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }
/* MENU MOBILE */
(() => {
  "use strict";

  const menuBtn = document.querySelector(".menu-mobile");
  const menu = document.querySelector(".menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }
})();
  /* =========================
     FORMULÁRIO
  ========================= */
  const form = $(".form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = form.querySelector('input[type="text"]').value.trim();
      const telefone = form.querySelector('input[type="tel"]').value.trim();
      const servico = form.querySelector("select").value;

      if (nome.length < 2) {
        alert("Digite um nome válido.");
        return;
      }

      if (telefone.length < 8) {
        alert("Digite um telefone válido.");
        return;
      }

      if (!servico) {
        alert("Escolha um serviço.");
        return;
      }

      alert("Agendamento enviado com sucesso.");
      form.reset();
    });
  }
})();