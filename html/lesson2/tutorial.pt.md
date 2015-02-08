---
layout: page
title: HTML Aula 2
footer: true
---

## O que é CSS?

**CSS** é a linguagem usada para criar o estilo dos sites.

Ela define a representação visual do conteúdo. Por exemplo: cor, margens, bordas, fundo e posição na página.

### O que isso significa?

 Folha de estilo em cascata (**C**ascading **S**tyle **S**heets).

### Do que consiste um site

HTML: estrutura do site

CSS: apresentação

_O **CSS** funciona em conjunto com o **HTML**_

### Hoje vamos concentrar nos conceitos fundamentais do CSS

Nós vamos criar a aparência [desta página](https://github.com/codebar/tutorials/blob/master/html/lesson2/example.html) para que fique igual [a este exemplo](http://codebar.github.io/tutorials/html/lesson2/example.html).

## Mas antes de começar...

> O primeiro tutorial não te prepara para este exercício. Antes de continuar, baixe os seguintes arquivos.


### Arquivos necessários

Faça o download dos arquivos necessários para dar andamento ao tutorial por [aqui](https://gist.github.com/hundred/7332441/download) (mac/linux) ou [aqui](https://www.dropbox.com/s/zgb6l56sy87knzf/lesson2.zip) (windows)

### O que posso fazer com o CSS?

Você pode mudar a cor, posição, dimensões e apresentações de diversos elementos.

### Anatomia de um elemento CSS

```css
body {
  color: hotpink;
}
```

**body** seletor

**color** propriedade

**hotpink** valor

```css
seletor {
  propriedade: valor;
}
```

Um grupo de propriedades para determinado seletor é definido entre chaves `{ }`

```css
body {
  color: hotpink;
  font-size: 12px;
}
```

## Começando

No head tag da página html, defina uma style tag (tag de estilo).

```html
<head>
  <title>Eu amo corujas</title>
  <style type="text/css">

  </style>
</head>
```

Inclua o estilo descrito abaixo, junto com a tag de estilo que definimos.

## Introdução aos seletores

### Seletores

#### Seletor: elemento

Vamos escolher a fonte que queremos usar na nossa página

```css
body {
   font-family: Helvetica, Arial, sans-serif;
}
```

Já que selecionamos o elemento **body**, essa alteração será aplicada para tudo o que está aninhado a esta estrutura, ou seja, todos os conteúdos da nossa página.

Vamos retirar também os tópicos das listas que já definimos.

```css
ul {
   list-style: none;
}
```

e mudar a aparência dos links na nossa página

```css
a {
   color: #a369d5;
   text-decoration: none;
   border-bottom: 1px dotted #a369d5;
}
```
**color**  (cor) define as cores do texto. `#a369d5` é a representação da cor em formato hexadecimal. Uma fonte útil para descobrir os códigos das cores é [http://0to255.com](http://0to255.com).

**text-decoration** (decoração do texto) especifica a decoração aplicada ao texto. Algumas outras opções que você pode experimentar são _underline_ (sublinhado), _overline_ (sobrelinhado) e _line-through_ (linha que corta o escrito). Como os links tem o sublinhado aplicado a eles como padrão, se estipularmos none (nenhum) ao link, cancelamos esta propriedade.

**border-bottom** (base da borda) faz o texto aparecer sublinhado. Propriedades de bordas podem ser fundidas em uma linha

`border-bottom: thickness border-style color` (base da borda: espessura estilo da borda cor)

**1px** define a espessura da borda

**dotted** (pontilhado) o estilo da linha

**#a369d5** a cor da borda

#### Seletor: classe

Um seletor de classes seleciona todos os elementos usados pela classe especificada.

```css
.pictures {
   margin: 10px auto;
   width: 900px;
}
```

**margin** (margem) é a área que rodeia um elemento. A definição acima é uma versão _abreviada_ de

```css
margin-top: 10px;
margin-bottom: 10px;
margin-right: auto;
margin-left: auto;
```

O que definimos acima é
_margin: (top bottom) (right left)_ margem: (superior inferior) (direita esquerda)

> Você consegue ver a margem de um elemento conferindo a guia de inspeção

#### Seletor: id

Seleciona o elemento com a identidade ou logotipo.

```css
#logo {
   margin: 0 auto 30px;
   width: 200px;
}
```

> Só pode existir um único elemento com determinada identidade. Se você definir múltiplos elementos, somente um poderá ser selecionado.

#### Seletor: elementos aninhados

Seleciona todos os elementos de lista que estão aninhados dentro de uma **classe** de imagem (pictures).

```css
.pictures li {
   display: inline;
   margin: 3px;
}
```

**display** (exibição) especifica como os elementos são expostos. **li** é um elemento de bloco. Mudando esta propriedade de exibição, nos certificamos que a exibição será como um elemento inline.

> Modifique inline para bloco-inline e para bloco. Você consegue notar a diferença?

## Formas de unir o CSS ao HTML

### CSS incorporado

No começo do tutorial nós descrevemos como juntar o CSS à nossa página.

```html
<head>
  <title>Eu amo corujas</title>
  <style type="text/css">

  </style>
</head>
```

Este método de usar o CSS, definindo-o dentro de nossa página HTML, é chamado **incorporar**. O problema deste mecanismo é que ele não pode ser reutilizado nas outras páginas, o que torna o trabalho um pouco mais difícil.


### CSS externa

Uma boa forma para definir o CSS é incluí-lo dentro de uma folha de estilo separada. Assim é mais fácil mantê-lo e reutilizá-lo por várias páginas.

Para completar esta tarefa vamos mover nosso CSS para fora do head da página e criar um novo arquivo, que será conectado a página pelo head.

```html
<head>
  <title>Eu amo corujas</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

## Efeito cascata

Vamos usar o efeito _cascata_ para todos os elementos da folha de estilo, até obter alterações.

Primeiro vamos redefinir a margin e border de todas as imagens.

```css
img {
  margin: 0;
  border: 0;
}
```

Nós podemos mudar o estilo de algumas destas imagens estabelecendo um seletor mais específico. Isto vai substituir o seletor `img` que nós acabamos de definir.

```css
.bigimg img {
  margin: 15px 2px;
  width: 439px;
  border: 2px solid #b9b1bf;
}
```

## Propriedades CSS

Até agora explicamos alguns seletores. Sabemos que conhecer cada seletor não é uma tarefa fácil, mas não deixe que isso te desanime. A internet é sua amiga. [Veja aqui uma lista com todas as propriedades CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference?redirectlocale=en-US&redirectslug=CSS%2FCSS_Reference)


## Avançando na forma de estilo da nossa página

### line-height (altura da linha)

Vamos aumentar o seletor de body para que a nossa página tenha um aspecto menos aglomerado.

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.3;
}
```

### Centralizando o conteúdo da nossa página

Numa página HTML você notará um elemento div com a identificação **main** (principal). Vamos usar este seletor para centralizar aquele recipiente.

```css
#main {
  width: 900px;
  margin: 0 auto 40px;
  padding: 0;
}
```
Para obter a centralização de um recipiente, temos que definir a sua largura. Se você remover a propriedade de largura vai perceber que o recipiente não estará centralizado na página.

Nós também temos que usar outro tipo de _abreviação_ para definir a margem. A versão longa se parece com isso

```css
margin-top: 0;
margin-bottom: 40px;
margin-right: auto;
margin-left: auto;
```

**auto** ajusta as margens esquerda e direita. Se você tentar diminuir a janela de seu navegador, pode ver que os lados esquerdo e direito se ajustam automaticamente e o **main** continua no meio da página.

**padding** (enchimento) é a área em volta do elemento, mas dentro da border.

>  Não confunda padding (enchimento) com margin (margem), faça um teste para ver como padding e margin de um elemento se diferem.


### Elementos flutuantes

```css
.right-box {
  float: right;
}
```

### Usando elementos vazios para criar o estilo

Algumas vezes, para fazer com que o design de uma página pareça melhor, precisamos adicionar elementos vazios. Como `<div id="top-line"></div>`

```css
#top-line {
  width: 100%;
  height: 5px;
  background-color: #2d183d;
  border-bottom: 3px solid #eedffb;
  margin-bottom: 10px;
}
```

Vamos criar também um estilo na parte inferior de nossa página de uma forma muito parecida.

```css
#bottom-line {
  width: 100%;
  height: 5px;
  background-color: #2d183d;
  border-top: 3px solid #eedffb;
}
```

### Reestilização por elementos seletores

Quando queremos assegurar que a aparência de um elemento mude consistentemente nas nossas páginas, é melhor utilizar elementos seletores. Dessa forma podemos ter certeza que não precisaremos redefinir o estilo e que isso se aplicará a todos os elementos daquele tipo.

```css
h1 {
  font-size: 39px;
  color: #2d183d;
  text-align: center;
  border-bottom: 1px solid #f6f4f8;
  border-top: 1px solid #f6f4f8;
  padding: 20px 0;
}

h2 {
  font-size: 28px;
  margin: 15px 0;
  color: #663095;
  padding: 15px 0;
  font-weight: 400;
  text-align: center;
}

h4 {
  color: #6D6A6A;
  font-size: 19px;
  padding: 27px 25px 15px;
}

small {
  color: #6D6A6A;
  font-size: 15px;
  margin: 0 30px 10px;
  text-align: right;
}

ol {
  margin: 14px 0;
}

ol li {
  background-color: #F6F4F8;
  color: #663095;
  font-size: 16px;
  font-weight: 400;
  margin: 10px 30px 10px 40px;
  padding: 6px 20px;
  border-radius: 9px;
}
```

**font-weight** (peso da fonte) espessura do texto apresentado

**text-align** (alinhamento de texto) alinhamento horizontal de um elemento de texto

### Um pouco mais de estilo

```css
#the-quote{
  border-bottom: 1px solid #f6f4f8;
  border-top: 1px solid #f6f4f8;
  margin: 40px auto;
  width: 90%;
}

#links {
  margin: 10px 15px 0 0;
}

#links li {
  margin: 0 7px;
  font-size: 18px;
  display: inline;
}

#text-block {
  height: 370px;
}

```

### Mais seletores de cascata

```css
.pictures li img {
  border: 2px solid #b9b1bf;
}

.bigimg img {
  margin: 15px 2px;
  width: 439px;
  border: 2px solid #b9b1bf;
}
```

### Alguns toques extras

```css
.bigimg{
  display: inline;
}
```

## Material extra e avançado

### Pseudo-classes

Uma pseudo-classe é uma palavra-chave adicionada a um seletor que descreve um estado específico de um elemento a ser selecionado. [Estas](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) são as pseudo-classes padrões.

Vamos adicionar o código abaixo para ter certeza que aplicaremos a margin somente para o _primeiro elemento li_ dentro da classe de imagens.

```css
.pictures li:first-child {
  margin-left: 5px;
}
```

> O que acontece quando você retira _:first-child_ do seu seletor?


### Bônus - Reiniciando estilos

Você provavelmente notou que as páginas parecem bem diferentes quando carregadas em navegadores diferentes. Para experimentar e evitar estas inconsistências de navegadores, uma técnica comum é **Reiniciar CSS**

Vamos aplicar isso ao elemento usado em nossa página

```css
html, body, div, h1, h2, h3, h4, h5, h6, p, a, img, small, b, i, ol, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
```

-----

Terminamos a nossa segunda aula. Tem alguma coisa que você não entendeu? Tente novamente e utilize os recursos fornecidos junto com o seu tutor. Se você tem algum feedback ou idéias que possam melhorar o nosso tutorial, nos [mande um email](mailto:feedback@codebar.io).
