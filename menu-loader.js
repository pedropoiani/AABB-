// Menu Lateral Loader
class MenuLoader {
 constructor() {
  this.currentPage = this.getCurrentPage();
  this.menuHTML = `
<aside class="fixed left-0 top-0 h-full w-64 bg-slate-900 text-white z-20">
 <div class="p-6">
  <div class="flex items-center gap-3 mb-8">
   <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
   </div>
   <div>
    <h1 class="font-bold text-lg">Clube Social</h1>
    <p class="text-xs text-slate-400">Gestão de Sócios</p>
   </div>
  </div>
  <nav class="space-y-2">
   <a href="index.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="index">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg> Dashboard
   </a>
   <a href="socios.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="socios">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg> Sócios
   </a>
   <a href="mensalidades.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="mensalidades">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg> Mensalidades
   </a>
   <a href="carteirinhas.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="carteirinhas">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
    </svg> Carteirinhas
   </a>
   <a href="design-carteirinha.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="design-carteirinha">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
    </svg> Design Carteirinha
   </a>
   <a href="faturas-consumo.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="faturas-consumo">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg> Faturas de Consumo
   </a>
   <a href="pontos-comercio.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="pontos-comercio">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg> Pontos de Comércio
   </a>
   <a href="espacos.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="espacos">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
    </svg> Espaços
   </a>
   <a href="agendamentos.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="agendamentos">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg> Agendamentos
   </a>
   <a href="estatisticas.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="estatisticas">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg> Estatísticas do Sistema
   </a>
   <a href="extrato-pix.html" class="menu-item flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors" data-page="extrato-pix">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg> Extrato Pix
   </a>
  </nav>
 </div>
 <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-800">
  <div class="flex items-center gap-3">
   <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-bold">
    A
   </div>
   <div>
    <p class="font-medium text-sm">Administrador</p>
    <p class="text-xs text-slate-400">admin@clube.com</p>
   </div>
  </div>
 </div>
</aside>
  `;
  this.init();
 }

 getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split('/').pop().split('.')[0];

  // Mapeamento de páginas
  const pageMap = {
   'index': 'index',
   'socios': 'socios',
   'perfil-socio': 'socios',
   'mensalidades': 'mensalidades',
   'carteirinhas': 'carteirinhas',
   'design-carteirinha': 'design-carteirinha',
   'faturas-consumo': 'faturas-consumo',
   'pontos-comercio': 'pontos-comercio',
   'espacos': 'espacos',
   'agendamentos': 'agendamentos',
   'estatisticas': 'estatisticas',
   'extrato-pix': 'extrato-pix'
  };

  return pageMap[filename] || 'index';
 }

 loadMenu() {
  // Inserir o menu no container específico
  const container = document.getElementById('menu-container');
  if (container) {
   container.innerHTML = this.menuHTML;
   // Destacar o item ativo
   this.highlightActiveItem();
  } else {
   console.error('Container do menu não encontrado');
  }
 }

 highlightActiveItem() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
   const page = item.getAttribute('data-page');
   if (page === this.currentPage) {
    item.classList.remove('text-slate-300', 'hover:bg-slate-800', 'hover:text-white');
    item.classList.add('bg-slate-800', 'text-white');
   }
  });
 }

 init() {
  // Carregar menu quando DOM estiver pronto
  if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', () => this.loadMenu());
  } else {
   this.loadMenu();
  }
 }
}

// Inicializar o loader do menu
const menuLoader = new MenuLoader();