# RC Suporte - Site Corporativo

Site corporativo desenvolvido para empresa especializada em cabeamento estruturado e sistemas de câmeras.

## 🚀 Funcionalidades Implementadas

### ✅ Páginas Desenvolvidas
- **Homepage** - Apresentação da empresa e serviços (inclui seção Parceiros e Fabricantes)
- **Sobre** - História, missão, visão e valores
- **Serviços** - 5 páginas individuais de serviços
- **Portfolio** - Projetos realizados e cases de sucesso
- **Contato** - Formulário de contato e informações
- **Soluções** - Soluções por segmento de mercado

### ✅ Funcionalidades Técnicas
- **Design Responsivo** - Adaptável para todos os dispositivos
- **Animações on-scroll** - Elementos aparecem suavemente ao rolar
- **Validação de Formulário** - JavaScript para validar campos
- **WhatsApp Integration** - Botão flutuante para contato direto
- **Google Analytics** - Pronto para configuração
- **Formspree Integration** - Envio de formulários sem backend

## 📁 Estrutura do Projeto

```
SITE RCSUPORTE/
├── index.html                 # Homepage
├── sobre.html                 # Sobre a empresa
├── contato.html               # Página de contato
├── portfolio.html             # Portfolio de projetos
├── solucoes.html              # Soluções por segmento
├── servicos/                  # Páginas de serviços
│   ├── cabeamento-estruturado.html
│   ├── fibra-optica.html
│   ├── cftv.html
│   ├── wifi-corporativo.html
│   └── suporte-manutencao.html
├── style.css                  # Estilos CSS
├── script.js                  # JavaScript
└── README.md                  # Este arquivo
```

## 🔧 Configuração e Deploy

### 1. Configurar Google Analytics
No arquivo `index.html`, substitua `GA_MEASUREMENT_ID` pelo seu ID real:
```html
gtag('config', 'GA_MEASUREMENT_ID');
```

### 2. Configurar Formspree
No arquivo `contato.html`, substitua `YOUR_FORM_ID` pelo seu ID do Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. Configurar WhatsApp
No arquivo `index.html`, substitua o número pelo número real da empresa:
```html
<a href="https://wa.me/5511912345678?text=..." class="whatsapp-float">
```

### 4. Atualizar Informações de Contato
Edite os arquivos HTML para incluir as informações reais da empresa:
- Endereço
- Telefone
- E-mail
- Horários de atendimento

## 🎨 Personalização

### Cores Corporativas
As cores estão definidas no arquivo `style.css`:
```css
:root {
    --primary-color: #00529B;    /* Azul principal */
    --secondary-color: #00A3E0;  /* Azul claro */
    --dark-color: #2c3e50;       /* Cinza escuro */
    --light-color: #ecf0f1;      /* Cinza claro */
}
```

### Imagens
Substitua os placeholders por imagens reais:
- Logos dos parceiros
- Fotos dos projetos
- Imagens dos serviços

## 📱 Responsividade

O site é totalmente responsivo e funciona bem em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔍 SEO

### Implementado:
- Meta tags adequadas
- Títulos otimizados
- Descrições nas páginas
- Estrutura HTML semântica

### Próximos Passos:
- Sitemap XML
- Robots.txt
- Schema markup
- Otimização de imagens

## 📊 Métricas de Sucesso

Conforme definido no escopo original:
- Aumento de leads qualificados em 200%
- Taxa de conversão de 3-5%
- Posicionamento no top 3 do Google
- Tempo de carregamento < 3 segundos

## 🚀 Deploy

O site pode ser hospedado em qualquer servidor web que suporte HTML, CSS e JavaScript:

- **Netlify** (recomendado para sites estáticos)
- **Vercel** 
- **GitHub Pages**
- **Servidor compartilhado tradicional**

## 🔧 Manutenção

### Arquivos que precisam de atualização regular:
- `portfolio.html` - Novos projetos
- `parceiros.html` - Novos parceiros
- Informações de contato se mudarem

### Backups recomendados:
- Código fonte
- Configurações do Google Analytics
- Configurações do Formspree

## 📞 Suporte

Para dúvidas sobre o desenvolvimento ou modificações no site, consulte a documentação técnica ou entre em contato com o desenvolvedor.

---

**Status do Projeto:** ✅ Concluído
**Última Atualização:** 2024
**Tecnologias:** HTML5, CSS3, JavaScript (Vanilla)