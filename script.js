// ============================================================
// NÚMERO DO WHATSAPP: troque aqui (só números, com 55 + DDD).
// Exemplo: '5531999998888'
// ============================================================
const WHATSAPP = '5561982044528';

document.querySelectorAll('[data-whats]').forEach((link) => {
  const texto = encodeURIComponent(link.dataset.whats);
  link.href = `https://wa.me/${WHATSAPP}?text=${texto}`;
});
