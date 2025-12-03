// tCÓDIGO PARA A SIDEBAR FUNCIONARRRR
(function(){
  const btnMenu = document.getElementById("btnMenu");
  const btnFechar = document.getElementById("btnFechar");
  const sidebar = document.getElementById("sidebar");

  function abrirSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("open");
    sidebar.setAttribute("aria-hidden", "false");
    console.log("SIDEBAR: aberta");
  }
  function fecharSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("open");
    sidebar.setAttribute("aria-hidden", "true");
    console.log("SIDEBAR: fechada");
  }
  if (btnMenu) {
    btnMenu.addEventListener("click", function(ev){
      ev.stopPropagation();
      abrirSidebar();
    });
  }
  if (btnFechar) {
    btnFechar.addEventListener("click", function(ev){
      ev.stopPropagation();
      fecharSidebar();
    });
  }
  // clicar fora fecha
  document.addEventListener("click", function(ev){
    if (!sidebar) return;
    if (sidebar.classList.contains("open") && !sidebar.contains(ev.target) && ev.target !== btnMenu) {
      fecharSidebar();
    }
  });
  if (sidebar) sidebar.addEventListener("click", e => e.stopPropagation());
})();

// tCÓDIGO PARA A MODAL CONSEGUIR ABRIR E FECHAR CLICANDO NO CARD E NO XXXXXXXXXXX

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


// tCÓDIGO PARA CONSEGUIR LOCALIZAR O ID DA MODAL NA URL E ABRIR AUTOMATICAMENTEEEEE
  const params = new URLSearchParams(window.location.search);
const contentId = params.get('modal');

if (contentId) {
  const content = document.getElementById(contentId);

  if (content) {
    // sobe para o modal (elemento pai)
    const modal = content.closest(".modal");
    modal.classList.add("open");
  }
}

// tCÓDIGO PARA ABRIR MODAL AUTOMATICAMENTE COM BASE NA URL UMA MODAL DE OUTRAAAA PAGINAAAAA
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const modalToOpen = params.get("modal");

    if (modalToOpen) {
        const modal = document.getElementById(modalToOpen);
        if (modal) {
            modal.style.display = "flex";
        }
    }
});