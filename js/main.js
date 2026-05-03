// ============================================================
// DKORE — main.js
// Dica: leia os comentários para entender cada parte
// ============================================================


// ============================================================
// 1. TABELA DE PREÇOS — edite aqui para atualizar valores
//    Estrutura: precos[dispositivo][problema][marca]
// ============================================================
const precos = {
  celular: {
    tela: {
      samsung:  { faixa: "R$ 150 – R$ 320", obs: "Valor varia conforme o modelo. Confirmamos após diagnóstico." },
      iphone:   { faixa: "R$ 280 – R$ 550", obs: "Usamos peças originais ou de alta qualidade." },
      motorola: { faixa: "R$ 120 – R$ 250", obs: "Atendemos toda a linha Moto G, Edge e outros." },
      xiaomi:   { faixa: "R$ 130 – R$ 270", obs: "Confirmamos disponibilidade da peça antes." },
      outro:    { faixa: "Consultar",        obs: "Entre em contato para verificarmos a peça." },
    },
    bateria: {
      samsung:  { faixa: "R$ 80 – R$ 160",  obs: "Troca em até 1 hora na maioria dos modelos." },
      iphone:   { faixa: "R$ 120 – R$ 220", obs: "Bateria original Apple ou equivalente de qualidade." },
      motorola: { faixa: "R$ 70 – R$ 140",  obs: "" },
      xiaomi:   { faixa: "R$ 80 – R$ 150",  obs: "" },
      outro:    { faixa: "Consultar",        obs: "" },
    },
    carga: {
      samsung:  { faixa: "R$ 70 – R$ 130",  obs: "" },
      iphone:   { faixa: "R$ 90 – R$ 180",  obs: "" },
      motorola: { faixa: "R$ 60 – R$ 110",  obs: "" },
      xiaomi:   { faixa: "R$ 60 – R$ 120",  obs: "" },
      outro:    { faixa: "Consultar",        obs: "" },
    },
    liga: {
      samsung:  { faixa: "R$ 100 – R$ 300", obs: "Diagnóstico gratuito. Pagamento só após aprovação." },
      iphone:   { faixa: "R$ 150 – R$ 400", obs: "Diagnóstico gratuito." },
      motorola: { faixa: "R$ 80 – R$ 250",  obs: "" },
      xiaomi:   { faixa: "R$ 80 – R$ 260",  obs: "" },
      outro:    { faixa: "Consultar",        obs: "" },
    },
    formatacao: {
      samsung:  { faixa: "R$ 80",            obs: "Inclui backup e reinstalação do sistema." },
      iphone:   { faixa: "R$ 100",           obs: "Restauração completa com backup quando possível." },
      motorola: { faixa: "R$ 80",            obs: "" },
      xiaomi:   { faixa: "R$ 80",            obs: "" },
      outro:    { faixa: "R$ 80",            obs: "" },
    },
    liquido: {
      samsung:  { faixa: "R$ 120 – R$ 350", obs: "Atendimento emergencial. Quanto antes, maiores as chances." },
      iphone:   { faixa: "R$ 150 – R$ 400", obs: "" },
      motorola: { faixa: "R$ 100 – R$ 280", obs: "" },
      xiaomi:   { faixa: "R$ 100 – R$ 300", obs: "" },
      outro:    { faixa: "Consultar",        obs: "" },
    },
    outro: {
      samsung:  { faixa: "Consultar", obs: "Descreva o problema pelo WhatsApp para um orçamento personalizado." },
      iphone:   { faixa: "Consultar", obs: "" },
      motorola: { faixa: "Consultar", obs: "" },
      xiaomi:   { faixa: "Consultar", obs: "" },
      outro:    { faixa: "Consultar", obs: "" },
    },
  },

  notebook: {
    tela: {
      dell:   { faixa: "R$ 350 – R$ 700", obs: "Peças originais ou compatíveis de alta qualidade." },
      lenovo: { faixa: "R$ 300 – R$ 650", obs: "" },
      hp:     { faixa: "R$ 300 – R$ 680", obs: "" },
      asus:   { faixa: "R$ 320 – R$ 660", obs: "" },
      outro:  { faixa: "Consultar",       obs: "" },
    },
    bateria: {
      dell:   { faixa: "R$ 180 – R$ 350", obs: "" },
      lenovo: { faixa: "R$ 160 – R$ 320", obs: "" },
      hp:     { faixa: "R$ 160 – R$ 330", obs: "" },
      asus:   { faixa: "R$ 170 – R$ 340", obs: "" },
      outro:  { faixa: "Consultar",       obs: "" },
    },
    carga: {
      dell:   { faixa: "R$ 80 – R$ 200",  obs: "" },
      lenovo: { faixa: "R$ 80 – R$ 180",  obs: "" },
      hp:     { faixa: "R$ 80 – R$ 190",  obs: "" },
      asus:   { faixa: "R$ 80 – R$ 190",  obs: "" },
      outro:  { faixa: "Consultar",       obs: "" },
    },
    liga: {
      dell:   { faixa: "R$ 150 – R$ 500", obs: "Diagnóstico gratuito." },
      lenovo: { faixa: "R$ 150 – R$ 480", obs: "" },
      hp:     { faixa: "R$ 150 – R$ 490", obs: "" },
      asus:   { faixa: "R$ 150 – R$ 480", obs: "" },
      outro:  { faixa: "Consultar",       obs: "" },
    },
    formatacao: {
      dell:   { faixa: "R$ 100",          obs: "Inclui backup, formatação e Windows original." },
      lenovo: { faixa: "R$ 100",          obs: "" },
      hp:     { faixa: "R$ 100",          obs: "" },
      asus:   { faixa: "R$ 100",          obs: "" },
      outro:  { faixa: "R$ 100",          obs: "" },
    },
    liquido: {
      dell:   { faixa: "R$ 200 – R$ 600", obs: "Limpeza, secagem e tratamento da placa-mãe." },
      lenovo: { faixa: "R$ 200 – R$ 580", obs: "" },
      hp:     { faixa: "R$ 200 – R$ 580", obs: "" },
      asus:   { faixa: "R$ 200 – R$ 590", obs: "" },
      outro:  { faixa: "Consultar",       obs: "" },
    },
    outro: {
      dell:   { faixa: "Consultar", obs: "" },
      lenovo: { faixa: "Consultar", obs: "" },
      hp:     { faixa: "Consultar", obs: "" },
      asus:   { faixa: "Consultar", obs: "" },
      outro:  { faixa: "Consultar", obs: "" },
    },
  },

  tablet: {
    tela:       { outro: { faixa: "R$ 200 – R$ 500", obs: "Informe a marca e modelo pelo WhatsApp para confirmar." } },
    bateria:    { outro: { faixa: "R$ 120 – R$ 250", obs: "" } },
    carga:      { outro: { faixa: "R$ 80 – R$ 160",  obs: "" } },
    liga:       { outro: { faixa: "Consultar",       obs: "" } },
    formatacao: { outro: { faixa: "R$ 80",            obs: "" } },
    liquido:    { outro: { faixa: "Consultar",       obs: "" } },
    outro:      { outro: { faixa: "Consultar",       obs: "" } },
  },
};

// Marcas por dispositivo
const marcasPorDispositivo = {
  celular:  ["samsung", "iphone", "motorola", "xiaomi", "outro"],
  notebook: ["dell", "lenovo", "hp", "asus", "outro"],
  tablet:   ["outro"],
};

// Labels amigáveis das marcas
const marcaLabel = {
  samsung: "Samsung", iphone: "iPhone", motorola: "Motorola",
  xiaomi: "Xiaomi",   dell: "Dell",      lenovo: "Lenovo",
  hp: "HP",           asus: "Asus",      outro: "Outra",
};


// ============================================================
// 2. ESTADO DO ORÇAMENTO
//    Guarda o que o usuário selecionou
// ============================================================
const selecao = { device: null, brand: null, problem: null };


// ============================================================
// 3. SELECIONAR OPÇÃO (clique nos botões do orçamento)
// ============================================================
function selectOption(btn) {
  const group = btn.dataset.group;
  const value = btn.dataset.value;

  // Desmarca os outros do mesmo grupo
  document.querySelectorAll(`[data-group="${group}"]`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  selecao[group] = value;

  // Lógica de fluxo
  if (group === 'device') {
    selecao.brand = null;
    selecao.problem = null;
    // Esconde passos seguintes
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-3').classList.add('hidden');
    document.getElementById('budget-result').classList.add('hidden');
    // Monta marcas e mostra passo 2
    buildBrands(value);
    document.getElementById('step-2').classList.remove('hidden');
  }

  if (group === 'brand') {
    selecao.problem = null;
    document.getElementById('step-3').classList.remove('hidden');
    document.getElementById('budget-result').classList.add('hidden');
    document.querySelectorAll('[data-group="problem"]').forEach(b => b.classList.remove('selected'));
  }

  if (group === 'problem') {
    showResult();
  }
}

// Monta os botões de marca dinamicamente
function buildBrands(device) {
  const container = document.getElementById('brand-options');
  container.innerHTML = '';
  const marcas = marcasPorDispositivo[device] || ['outro'];

  marcas.forEach(marca => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.dataset.group = 'brand';
    btn.dataset.value = marca;
    btn.textContent = marcaLabel[marca] || marca;
    btn.setAttribute('onclick', 'selectOption(this)');
    container.appendChild(btn);
  });
}

// Exibe o resultado do orçamento
function showResult() {
  const { device, brand, problem } = selecao;
  if (!device || !brand || !problem) return;

  let resultado;
  try {
    // Tenta encontrar o preço exato
    resultado = precos[device][problem][brand]
              || precos[device][problem]['outro']
              || { faixa: 'Consultar', obs: 'Entre em contato pelo WhatsApp.' };
  } catch {
    resultado = { faixa: 'Consultar', obs: 'Entre em contato pelo WhatsApp.' };
  }

  document.getElementById('result-price').textContent = resultado.faixa;
  document.getElementById('result-obs').textContent   = resultado.obs || '✅ Diagnóstico gratuito. Só pagamos após aprovação.';

  // Monta link WhatsApp com mensagem pré-preenchida
  const msg = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de um orçamento:\n` +
    `📱 Dispositivo: ${device}\n` +
    `🏷️ Marca: ${marcaLabel[brand] || brand}\n` +
    `🔧 Problema: ${problem}\n` +
    `💰 Estimativa vista no site: ${resultado.faixa}`
  );
  document.getElementById('result-wa').href = `https://wa.me/5500000000000?text=${msg}`;

  document.getElementById('budget-result').classList.remove('hidden');
  // Rola suavemente até o resultado
  document.getElementById('budget-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// ============================================================
// 4. MODAL — DEV EM BREVE
// ============================================================
function showDevModal(e) {
  e.preventDefault();
  document.getElementById('dev-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDevModal(e) {
  // Fecha apenas se clicou no overlay ou no botão fechar
  if (!e || e.target === document.getElementById('dev-modal') || e.target.classList.contains('modal__close')) {
    document.getElementById('dev-modal').classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Fecha modal com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDevModal({ target: document.getElementById('dev-modal') });
});


// ============================================================
// 5. MENU MOBILE (hamburguer)
// ============================================================
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

// Fecha menu ao clicar em um link
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});


// ============================================================
// 6. HEADER — muda fundo ao rolar
// ============================================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(8, 8, 8, 0.97)';
  } else {
    header.style.background = 'rgba(8, 8, 8, 0.85)';
  }
});


// ============================================================
// 8. FORMULÁRIO DE CONTATO — Formspree
//    Envia para contato@dkore.tec.br sem recarregar a página
// ============================================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault(); // Impede recarregar a página

    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
      const response = await fetch('https://formspree.io/f/xjglgdjp', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Sucesso — mostra mensagem e limpa formulário
        contactForm.reset();
        document.getElementById('form-success').classList.remove('hidden');
        btn.textContent = '✅ Enviado!';
        btn.style.background = '#25D366';
      } else {
        // Erro — orienta o cliente
        btn.textContent = 'Erro — tente pelo WhatsApp';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Erro — tente pelo WhatsApp';
      btn.disabled = false;
    }
  });
}
// ============================================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 30);
}

// Observa quando o elemento entra na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
