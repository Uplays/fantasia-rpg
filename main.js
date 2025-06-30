// Aquí puedes añadir la lógica de tu juego, por ejemplo, para manejar el inventario, NPCs, etc.

document.addEventListener('DOMContentLoaded', () => {
  // Ejemplo: mostrar un mensaje de bienvenida en consola
  console.log('¡Bienvenido al Mundo de Fantasía!');
  cargarSeccion('mapa-dinamico', 'mapa.html');
});

// Añade esto en scripts/main.js o en un <script> al final de inventario.html
document.addEventListener('input', function(e) {
  if (e.target.id === 'buscador-inventario') {
    const filtro = e.target.value.toLowerCase();
    document.querySelectorAll('#inventario tbody tr').forEach(tr => {
      tr.style.display = tr.textContent.toLowerCase().includes(filtro) ? '' : 'none';
    });
  }
});

const titulos = {
  'lore-dinamico': 'Lore - Mundo de Fantasía',
  'ciudades-dinamicas': 'Ciudades - Mundo de Fantasía',
  'inventario-dinamico': 'Inventario - Mundo de Fantasía',
  'npcs-dinamicos': 'NPCs - Mundo de Fantasía',
  'mapa-dinamico': 'Mapa - Mundo de Fantasía'
};
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    // ...tu código...
    document.title = titulos[link.dataset.seccion] || 'Mundo de Fantasía - RPG';
  });
});

