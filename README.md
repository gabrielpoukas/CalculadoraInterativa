# 💰 Calculadora de Juros Compostos (Interest Calculator)

Este projeto é uma **Calculadora de Juros Compostos** interativa, projetada com foco em usabilidade, precisão matemática e design moderno. Ele permite ao usuário calcular rapidamente o Montante Final e os Juros Acumulados com base no capital inicial, taxa de juros anual e período de tempo.

O projeto demonstra o domínio em manipulação de formulários, cálculo financeiro em JavaScript e implementação avançada de temas dinâmicos via CSS Variables.



---

## ✨ Funcionalidades em Destaque

* **Cálculo Preciso:** Implementação da fórmula matemática de Juros Compostos: **M = C(1+i)^t**.
* **Formato de Moeda:** Exibição dos resultados (Montante e Juros) formatados automaticamente para o padrão Brasileiro (R$), utilizando `Intl.NumberFormat` do JavaScript.
* **Tema Dinâmico (Modo Dia/Noite):** Alternância instantânea entre um **Tema Escuro (Noite)** profissional (com background tecnológico e overlay) e um **Tema Claro (Dia)** limpo e minimalista.
* **Validação de Dados:** Verifica se todos os campos estão preenchidos com valores positivos e válidos antes de realizar o cálculo.
* **Design Profissional:** UI/UX aprimorada com campos de input grandes, contraste elevado, footer legível e um background temático que adiciona profundidade.

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Foco Principal | Habilidade Demonstrada |
| :--- | :--- | :--- |
| **HTML5** | Estrutura | Semântica de formulários e estrutura de resultado. |
| **CSS3** | Estilização Avançada | Uso do seletor **`:root`** para definir **Variáveis CSS** (Custom Properties) e implementação de um sistema de temas robusto (`.light-theme`). Uso de `background-attachment: fixed` e `overlay` para imagens de fundo. |
| **JavaScript (ES6+)** | Lógica e Cálculo | Manipulação de eventos de formulário, validação de entrada, implementação de `Math.pow()` e formatação de números com `toLocaleString`. |

---

---

## 💡 Estrutura e Lógica Chave

A função principal no `app.js` é `calcularJuros(e)`, que realiza os seguintes passos:

1.  Previne o envio padrão do formulário (`e.preventDefault()`).
2.  Converte os valores do input (string) para números decimais (`parseFloat`).
3.  Calcula o montante usando `const montante = C * Math.pow((1 + i), t);`.
4.  A função `exibirResultados` formata os valores como R$ e exibe a área de resultados.

A função `toggleTheme()` gerencia o visual com uma única linha: `body.classList.toggle('light-theme');`.

---
