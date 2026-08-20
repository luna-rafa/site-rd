# Rodrigues Digital

Site institucional da **Rodrigues Digital**, desenvolvido para apresentar a marca, seus serviços, projetos e posicionamento profissional por meio de uma experiência moderna, responsiva e multilíngue.

A plataforma foi construída com foco em **estratégia, identidade visual, performance, acessibilidade, SEO e experiência do usuário**.

## Sobre o projeto

A Rodrigues Digital desenvolve soluções digitais para profissionais, marcas e empresas que desejam construir ou fortalecer sua presença online.

O projeto foi criado para transformar a experiência e os serviços da marca em uma estrutura digital profissional, organizada e preparada para crescimento.

O site reúne:

- apresentação institucional;
- posicionamento da marca;
- soluções digitais;
- portfólio e cases;
- página de projetos;
- página de contato;
- formulário de briefing integrado ao WhatsApp;
- estrutura multilíngue;
- SEO técnico;
- experiência responsiva para desktop, tablet e mobile.

---

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- i18next
- react-i18next
- Lucide React
- React Icons
- Git
- GitHub
- Vercel

---

## Estrutura multilíngue

O site possui suporte para três idiomas:

- 🇧🇷 Português
- 🇺🇸 Inglês
- 🇪🇸 Espanhol

A internacionalização foi desenvolvida com:

```text
i18next
react-i18next
```

Os arquivos de tradução estão organizados em:

```text
src/
└── i18n/
    └── locales/
        ├── pt.json
        ├── en.json
        └── es.json
```

Além da tradução do conteúdo, as páginas possuem rotas específicas para cada idioma.

Exemplos:

```text
/
 /en
 /es

/sobre
/en/about
/es/sobre

/solucoes
/en/solutions
/es/soluciones

/projetos
/en/projects
/es/proyectos

/contato
/en/contact
/es/contacto
```

---

## Principais páginas

### Home

Apresentação da Rodrigues Digital, posicionamento, soluções, projetos selecionados e chamadas estratégicas para contato.

### Sobre

Página dedicada à trajetória profissional, experiência, posicionamento e visão da marca.

### Soluções

Apresentação estruturada das soluções digitais oferecidas pela Rodrigues Digital e do processo utilizado no desenvolvimento dos projetos.

### Projetos

Área dedicada aos principais cases desenvolvidos.

Entre os projetos apresentados estão:

- Rodrigues Digital
- Marcela Braga
- Jaqueline Leal
- Eslayne Lima
- Luezes Venturin

Cada case apresenta contexto, desafio, solução, recursos desenvolvidos e resultado.

### Contato

Página desenvolvida para facilitar o início de novos projetos.

Possui:

- WhatsApp;
- e-mail;
- Instagram;
- formulário de briefing;
- seleção da solução desejada;
- prazo estimado;
- descrição do projeto;
- envio das informações diretamente para o WhatsApp.

---

## SEO

O projeto possui uma estrutura própria de SEO para gerenciamento dinâmico das páginas.

Entre os recursos implementados estão:

- títulos personalizados;
- meta descriptions;
- URLs canônicas;
- `hreflang`;
- Open Graph;
- Twitter Cards;
- imagens de compartilhamento;
- SEO específico por página e idioma.

Exemplo de idiomas:

```html
<link
  rel="alternate"
  hreflang="pt-BR"
  href="https://rodriguesdigital.tec.br/"
/>

<link
  rel="alternate"
  hreflang="en"
  href="https://rodriguesdigital.tec.br/en"
/>

<link
  rel="alternate"
  hreflang="es"
  href="https://rodriguesdigital.tec.br/es"
/>
```

---

## Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela:

- desktop;
- notebook;
- tablet;
- smartphone.

Os componentes utilizam layouts responsivos, breakpoints específicos e reorganização de conteúdo para dispositivos móveis.

---

## Identidade visual

A identidade da Rodrigues Digital utiliza como base:

| Cor | Hex |
| --- | --- |
| Azul de transição | `#164A5A` |
| Azul principal | `#34758A` |
| Azul de apoio | `#82ADBC` |
| Dourado | `#D4AF37` |
| Areia | `#F8F5EE` |

A interface combina tons institucionais com elementos modernos para transmitir tecnologia, profissionalismo e posicionamento estratégico.

---

## Estrutura do projeto

```text
src/
├── assets/
├── components/
├── config/
├── i18n/
│   └── locales/
├── layouts/
├── pages/
│   ├── About/
│   ├── Projetos/
│   └── Contato/
├── App.jsx
└── main.jsx

public/
├── projects/
├── og/
├── favicon.svg
└── icons.svg
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/luna-rafa/site-rd.git
```

Entre na pasta:

```bash
cd site-rd
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará o projeto localmente, normalmente em:

```text
http://localhost:5173
```

---

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para testar o build localmente:

```bash
npm run preview
```

---

## Deploy

O projeto utiliza integração entre:

```text
GitHub → Vercel → Domínio próprio
```

As atualizações enviadas para a branch principal podem ser utilizadas pelo fluxo de deploy configurado para publicação do site.

---

## Site

**Rodrigues Digital**

https://rodriguesdigital.tec.br

---

## Contato

**Rafaela Rodrigues**  
Fundadora da Rodrigues Digital

**E-mail:**  
rafaela.mentordigital@gmail.com

**Instagram:**  
@rodriguesdigital.oficial

**WhatsApp:**  
+55 (27) 99574-9915

---

## Autoria

Projeto idealizado, desenvolvido e mantido por **Rafaela Rodrigues — Rodrigues Digital**.

> Transformando ideias em presenças digitais profissionais.

---

© 2026 Rodrigues Digital. Todos os direitos reservados.