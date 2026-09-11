/* ============================================================
   FOTOS REALES DEL LOCAL (11-09-2026) — ya no hay stock acá
   ============================================================
   Las 5 fotos salen de la propia ficha de Google Maps del negocio,
   bajadas con el extractor que corta en "También se buscó" para no
   agarrar fotos de otros locales. Se revisaron una por una antes de
   usarlas: se descartó una (captura de TikTok con un cliente
   identificable de frente).

   Dato real que aparece en la foto de la fachada y que NO estaba en
   ningún otro canal: el letrero dice "SANDWICHERIA" además de
   "CAFETERIA", y muestra un teléfono fijo (2 2359 7691) distinto del
   móvil con WhatsApp confirmado. El cartel de la fachada de día anuncia
   "COLACIONES $4.000, todos los días menú diferente" — el catálogo
   oficial de pedidos cobra $5.000, así que la foto probablemente es más
   antigua; se mantiene el precio del catálogo por ser el canal vivo.

   Sigue sin logo real: el negocio no tiene isotipo propio, solo el
   letrero. Se usa un wordmark tipográfico, nunca un logo inventado. */
const HERO_SRC = 'fotos/fachada-noche.jpg';
const GAL_UNO_SRC = 'fotos/chacarero-cafe.jpg';
const GAL_DOS_SRC = 'fotos/fachada-dia.jpg';
const GAL_TRES_SRC = 'fotos/churrasco.jpg';

document.getElementById('heroPhoto').src = HERO_SRC;
document.getElementById('galUno').src = GAL_UNO_SRC;
document.getElementById('galDos').src = GAL_DOS_SRC;
document.getElementById('galTres').src = GAL_TRES_SRC;

/* ============================================================
   CARTA — 100% real, extraída del catálogo oficial de pedidos
   (my-favorite-place.catalog.kyte.site) el 09-09-2026, directo del
   JSON de productos activos de la tienda. Precios reales en CLP (el
   catálogo original los muestra como "US$" por un error de
   configuración de Kyte, no porque cobren en dólares).
   ============================================================ */
const MENU = {
  'Bebidas': [
    { n: 'Bebida 1 1/4 llevar', p: 2000 },
    { n: 'Bebida grande 1 1/4 con envase', p: 2000 },
    { n: 'Bebida lata', p: 1200 },
    { n: 'Bebidas Express', p: 800 },
    { n: 'Néctar Express', p: 1000 },
    { n: 'Néctar grande', p: 2000 },
    { n: 'Jugo o agua Guayarauco', p: 1500 },
    { n: 'Cerveza Sol chica', p: 2000 },
    { n: 'Michelada', p: 3000 },
  ],
  'Café, té y algo dulce': [
    { n: 'Café', p: 1000 },
    { n: 'Té', p: 1000 },
    { n: 'Promo café + torta', p: 2490 },
    { n: 'Promo té + queque', p: 1590 },
    { n: 'Mendocinos', p: 1000 },
    { n: 'Mendocinos x2', p: 1500 },
    { n: 'Torta mil hojas', p: 1990 },
    { n: 'Torta nuez y lúcuma', p: 1990 },
  ],
  'Chorrillanas': [
    { n: 'Chorrillana para 2 personas', p: 10000 },
    { n: 'Chorrillana familiar para 4', p: 15000 },
  ],
  'Churrascos': [
    { n: 'Churrasco solo', p: 3500 },
    { n: 'Promo 2 churrascos', p: 6000, d: 'A elección: solo, barros luco, dinámico, italiano, palta, palta mayo o tomate mayo.' },
  ],
  'Hamburguesas': [
    { n: 'Hamburguesa sola', p: 3500 },
    { n: 'Promo 2 hamburguesas', p: 6000, d: 'A elección: luco, chacarera, dinámica, italiana, palta mayo o tomate mayo.' },
  ],
  'Completos y vienesas': [
    { n: 'Promo completo chico Express', p: 2300 },
    { n: 'Promo completo grande Express', p: 3000 },
    { n: 'Vienesa chica', p: 1500, d: 'A elección: sola, completo, italiana, dinámica, palta mayo o tomate mayo.' },
    { n: 'Vienesa grande sola', p: 2000 },
    { n: 'Vienesa grande', p: 2500, d: 'A elección: chaparrita, completo, italiana, dinámica, palta mayo o tomate mayo.' },
    { n: 'Repollito', p: 1500 },
    { n: 'Salchipapas chica', p: 2000 },
    { n: 'Salchipapas grande', p: 3000 },
  ],
  'Colaciones caseras': [
    { n: 'Colación cazuela de vacuno', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación cazuela de ave', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación cazuela de albóndigas', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación albóndigas al jugo con arroz', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación carne con arroz', p: 5000, d: 'Con ensalada mixta, pan y postre.' },
    { n: 'Colación carne con papas fritas', p: 5000, d: 'Con ensalada mixta, pan y postre.' },
    { n: 'Colación carne con puré', p: 5000, d: 'Con ensalada mixta, pan y postre.' },
    { n: 'Colación pastel de choclo', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación pastel de papa', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación porotos con mazamorra', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación porotos con riendas', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación tallarines con salsa', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación tallarines salteados', p: 5000, d: 'Con ensalada, pan y pebre.' },
    { n: 'Colación casera "sabor de la abuela"', p: 5000, d: 'El plato del día — así lo llama el propio local en su carta.' },
  ],
  'Papas fritas': [
    { n: 'Papas fritas pequeña', p: 1500 },
    { n: 'Papas fritas grande', p: 2500 },
  ],
};

const menuTabsEl = document.getElementById('menuTabs');
const menuPanelsEl = document.getElementById('menuPanels');
const categorias = Object.keys(MENU);
const clp = (n) => '$' + n.toLocaleString('es-CL');

categorias.forEach((cat, i) => {
  const tabBtn = document.createElement('button');
  tabBtn.className = 'menu-tab-btn' + (i === 0 ? ' active' : '');
  tabBtn.textContent = cat;
  tabBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    tabBtn.classList.add('active');
    document.getElementById('panel-' + i).classList.add('active');
  });
  menuTabsEl.appendChild(tabBtn);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + i;
  const grid = document.createElement('div');
  grid.className = 'menu-grid';
  MENU[cat].forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item';
    row.innerHTML = `
      <div class="menu-item-text">
        <p class="menu-item-name">${item.n}</p>
        ${item.d ? `<p class="menu-item-desc">${item.d}</p>` : ''}
      </div>
      <span class="menu-item-price">${clp(item.p)}</span>
    `;
    grid.appendChild(row);
  });
  panel.appendChild(grid);
  menuPanelsEl.appendChild(panel);
});

/* ============================================================
   HORARIO EN VIVO — real, verificado en la tabla de horario de
   Google Maps: Lunes a Viernes 9:30-19:00, Sábado y Domingo cerrado.
   ============================================================ */
(function () {
  const now = new Date();
  const day = now.getDay(); // 0 domingo ... 6 sábado
  const minutes = now.getHours() * 60 + now.getMinutes();
  const openMin = 9 * 60 + 30;
  const closeMin = 19 * 60;
  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && minutes >= openMin && minutes < closeMin;

  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const visitStatus = document.getElementById('visit-status');

  if (isOpen) {
    statusDot.classList.remove('closed');
    statusText.textContent = 'Abierto ahora · cierra 19:00';
    visitStatus.textContent = 'Abierto ahora — cierra a las 19:00';
  } else {
    statusDot.classList.add('closed');
    statusText.textContent = isWeekday ? 'Cerrado ahora · abre 9:30' : 'Cerrado · abre lunes 9:30';
    visitStatus.textContent = isWeekday ? 'Cerrado ahora — abre a las 9:30' : 'Cerrado — abre el lunes a las 9:30';
  }
})();

/* ============================================================
   NAVEGACIÓN SPA POR PESTAÑAS
   ============================================================ */
function goToTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  const panel = document.querySelector(`[data-tab-panel="${tabName}"]`);
  const link = document.querySelector(`.nav-link[data-tab="${tabName}"]`);
  if (panel) panel.classList.add('active');
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  runReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.getAttribute('data-tab'));
    navLinks.classList.remove('open');
  });
});

/* ---------- Menú hamburguesa ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ---------- Scroll reveal (con red de seguridad por si IntersectionObserver no dispara) ---------- */
function runReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('in');
    });
  }, 1200);
}
runReveal();

/* ---------- Loader breve ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 350);
});
