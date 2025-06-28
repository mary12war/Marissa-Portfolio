// Toggle dark/light mode para el header reusable
document.addEventListener('DOMContentLoaded', function() {
  initializeDarkMode();
});

function initializeDarkMode() {
  const toggleBtn = document.getElementById('toggleMode');
  const toggleIcon = document.getElementById('toggleIcon');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setMode(dark) {
    document.body.classList.toggle('dark-mode', dark);
    if (toggleIcon) {
      toggleIcon.className = dark ? 'bi bi-sun' : 'bi bi-moon';
    }
    // Cambiar todos los emojis de gato por murciélagos en dark mode y viceversa
    document.querySelectorAll('.cat-paw').forEach(el => {
      el.textContent = dark ? '🦇' : '🐾';
    });
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
}

// También ejecutar si el script se carga después del DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDarkMode);
} else {
  initializeDarkMode();
} 