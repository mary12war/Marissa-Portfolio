// Efecto de brillitos extra en los botones al pasar el mouse
const btns = document.querySelectorAll('.btn-cat');
btns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    btn.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 700);
  });
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = '¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.';
    formMessage.classList.add('alert', 'alert-success');
    contactForm.reset();
  });
}

// Toggle dark/light mode
const toggleBtn = document.getElementById('toggleMode');
const toggleIcon = document.getElementById('toggleIcon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setMode(dark) {
  document.body.classList.toggle('dark-mode', dark);
  if (toggleIcon) {
    toggleIcon.className = dark ? 'bi bi-sun' : 'bi bi-moon';
  }
  localStorage.setItem('darkMode', dark ? '1' : '0');
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    setMode(!isDark);
  });
}

// Inicializar modo según preferencia o localStorage
const darkPref = localStorage.getItem('darkMode');
if (darkPref === null) {
  setMode(prefersDark);
} else {
  setMode(darkPref === '1');
}

// Script principal del portafolio
document.addEventListener('DOMContentLoaded', function() {
  // Manejo del formulario de contacto
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
      
      // Simulación de envío
      formMessage.innerHTML = `
        <div class="alert alert-success">
          <strong>¡Gracias ${nombre}!</strong> Tu mensaje ha sido enviado. Te responderemos pronto a ${email}.
        </div>
      `;
      
      contactForm.reset();
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        formMessage.innerHTML = '';
      }, 5000);
    });
  }

  // Verificar que el toggle de dark mode esté funcionando
  setTimeout(() => {
    const toggleBtn = document.getElementById('toggleMode');
    if (toggleBtn) {
      console.log('Toggle button found and should be working');
      // Agregar un listener adicional como respaldo
      toggleBtn.addEventListener('click', function() {
        console.log('Toggle button clicked');
      });
    } else {
      console.error('Toggle button not found');
    }
  }, 1000);
});

// Función para verificar el estado del dark mode
function checkDarkModeStatus() {
  const isDark = document.body.classList.contains('dark-mode');
  console.log('Dark mode is:', isDark ? 'enabled' : 'disabled');
  return isDark;
} 