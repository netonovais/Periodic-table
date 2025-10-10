# Tabela Periódica Interativa

## Visão Geral do Projeto

Desenvolvimento de uma interface web interativa e visualmente atraente da Tabela Periódica dos Elementos. Este projeto foi construído do zero utilizando tecnologias web fundamentais (HTML, CSS e JavaScript puros), com foco na criação de um layout preciso, responsivo e em uma experiência de usuário rica e informativa.

A aplicação renderiza a tabela completa e permite que o usuário explore os elementos, visualizando informações detalhadas através de uma "info-box" dinâmica que aparece ao passar o mouse, inspirada em interfaces de inventário de jogos.

**[⬆️ Acessar a Demonstração Online] https://periodic-table-for-neto-novais.netlify.app**

**[Screenshot da Tabela Periódica] https://imgur.com/a/ce4zdc0**

## 🎯 Principais Funcionalidades

* **Layout Preciso com CSS Grid:** A tabela é construída sobre uma grade de 18 colunas que mantém o alinhamento perfeito dos elementos, independentemente do zoom ou do tamanho da tela.
* **Info-Box Dinâmica:** Ao passar o mouse sobre um elemento, uma caixa de informações surge ao lado do cursor, exibindo dados como nome, número atômico, massa e família.
* **Estilização Temática e Cores Dinâmicas:** A info-box possui um estilo customizado inspirado em UIs de jogos. A cor do texto dentro dela muda dinamicamente para corresponder à cor da família do elemento selecionado.
* **Responsividade:** O layout foi projetado para se adaptar a diferentes tamanhos de tela, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.
* **Interatividade e Feedback Visual:** Efeitos de `hover` sutis, como escala e sombra, fornecem feedback claro ao usuário sobre o elemento em foco.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído sem o uso de frameworks ou bibliotecas externas, demonstrando um profundo conhecimento das tecnologias base da web:

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização avançada, layout e animações.
* **JavaScript (ES6+):** Manipulação do DOM, gerenciamento de eventos, lógica de interação e renderização dinâmica de dados.

---

## 💼 Competências Demonstradas

Mais do que apenas uma tabela, este projeto serve como um portfólio prático das seguintes competências técnicas e de resolução de problemas:

#### **Desenvolvimento Front-End**
* **Proficiência em JavaScript Puro (Vanilla JS):** Toda a lógica interativa, desde a criação da info-box até o posicionamento dos elementos, foi implementada sem dependências, demonstrando um forte domínio da linguagem e da manipulação do DOM.
* **Layout Avançado com CSS Grid:** Habilidade para criar layouts complexos, precisos e robustos. A decisão de usar CSS Grid em vez de abordagens baseadas em Flexbox ou frameworks para este caso de uso mostra um entendimento de qual ferramenta é a mais adequada para o problema.
* **Estilização e UI Design:** Capacidade de traduzir um conceito visual (UI de inventário de jogos) em uma interface funcional e esteticamente agradável, utilizando propriedades avançadas como `transform`, `box-shadow`, `backdrop-filter` e `z-index`.

#### **Resolução de Problemas e Arquitetura**
* **Gerenciamento de Estado de UI:** A lógica para exibir, posicionar e popular a info-box com os dados corretos demonstra a capacidade de gerenciar o estado da interface em resposta às ações do usuário.
* **Diagnóstico e Depuração de CSS:** O projeto superou desafios complexos de alinhamento, como os problemas gerados por `transform: scale()` no sistema de coordenadas. A solução demonstra um entendimento profundo do modelo de renderização do navegador, incluindo o conceito de **Stacking Context** (`z-index`).
* **Código Modular e Reutilizável:** A estrutura de dados em JavaScript (`dadosElementos`) e o mapa de classes (`grupoParaClasse`) separam os dados da lógica de apresentação, uma prática que facilita a manutenção e escalabilidade do código.

---

## ⚙️ Como Executar Localmente

```bash
# Clone este repositório
$ git clone https://github.com/netonovais/Periodic-table.git

# Navegue até a pasta do projeto
$ cd TabelaPeriódica

# Abra o arquivo `index.html` no seu navegador de preferência
```

---

## 👨‍💻 Autor

**Neto Novais**

* **LinkedIn:** [https://www.linkedin.com/in/seu-usuario/](https://www.linkedin.com/in/novaisneto/)
* **GitHub:** [https://github.com/seu-usuario](https://github.com/netonovais)
