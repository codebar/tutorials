---
layout: page
title: HTML Aula 3
footer: true
---

##  HTML E CSS - Além do básico

### Recapitulando

Nas últimas duas aulas nós falamos de **HTML** (linguagem de marcação de hipertexto) e **CSS** (folha de estilo em cascata). O **HTML** define a _estrutura_ de um site, e o **CSS**, a _apresentação_.

### Hoje nós vamos construir um site do zero.

A página que vamos construir vai parecer com esta [página de exemplo](example.pt.html "Ada Lovelace").

Nós também vamos explicar em maiores detalhes elementos que mencionamos nas aulas anteriores.

## Mas antes de começar...

### Arquivos necessários

Baixe os arquivos necessários para começar os trabalhos deste tutorial [aqui](https://gist.github.com/despo/7328342/download)

### Ferramentas de Desenvolvimento - Inspetor Web

Inspetores são ferramentas de desenvolvimento que te ajudam a ver, editar e depurar o CSS, HTML e JavaScript.

Um inspetor bem popular é o [firebug](http://getfirebug.com/), funciona bem no Firefox. O Chrome tem um inspetor incorporado, mas sugerimos que você use o firebug, já que ele é um programa muito mais fácil para usar e mudar diversas propriedades.

![](assets/images/firebug.png)

>  Peça para seu tutor te mostrar como editar estilos na nossa página de exemplo usando o firebug.

## Início

Vamos começar com o head da nossa página e colocar o title da forma que aprendemos na primeira aula.

```html
<title>Ada Lovelace</title>
```

### Estruturando conteúdo

Vamos separar nossa página em três áreas diferentes. O **header** (cabeçalho) estará no topo de nossa página mostrando nosso título e imagem. O **container** (recipiente) é onde vamos especificar o conteúdo principal. E o **footer** (rodapé).

```html
<header>

</header>
<div>

</div>
<footer>

</footer>
```

> Você lembrou de inserir estas tags dentro da `<body>` tag da sua página?

> Confira a página. Você consegue ver o título e os elementos que acabamos de adicionar?

## Nível dos elementos: inline versus bloco

No CSS existem formas diferentes de [introduzir](https://developer.mozilla.org/en-US/docs/Web/CSS/display "display CSS") os elementos. As formas mais comuns são: _block_ e _inline_.

### elementos block (bloco)

Os elementos aparecem em uma nova linha

![](assets/images/span-block.png)

Alguns elementos de bloco são `<div>, <p>, <h1>, <ul>, <li>`. A maior parte dos elementos são de bloco.

### elementos inline

Os elementos aparecem na mesma linha.

![](assets/images/span-inline.png)

Alguns elementos inline são `<img>, <a>, <em>, <strong>, <span>`

#### Para trocar os elementos e transformá-los de block para inline, ou vice-versa, você pode usar a propriedade de `display` (exibição) do CSS com `inline` ou `block`


## Estabelecendo o conteúdo do `<header>`

### Estrutura

Nós vamos desenvolver a página de cima para baixo. Você sempre pode voltar depois e trocar as coisas, caso queira.

Adicione uma imagem envolvida por um elemento `<div>`

```html
<div>
  <img src="ada_lovelace.jpg"/>
</div>
```

Adicione o heading `<h1>`, abaixo do `<div>` que envolve a imagem, dentro do elemento `<header>`

```html
<div>
  <h1>Oi, eu sou a Ada Lovelace</h1>
</div>
```

> Carregue a página. Dẽ uma olhada em como os elementos estão apresentados usando o inspetor.

### Apresentação

Vamos usar o que acabamos de aprender e tornar a imagem um elemento inline.

Antes de manipular o `<div>` que está ao redor da imagem, você deve ter condições de acessá-lo da folha de estilo. Coloque o nome `my-picture` na classe daquele elemento.

```html
<div class="my-picture">
  <img src="ada_lovelace.jpg"/>
</div>
```

Adicione o estilo relevante no seu `style.css`

```css
.my-picture {
 display: inline;
}
```

> Dê uma olhada na página. Confira a imagem e olhe as suas propriedades CSS.

####Fazendo funcionar

Faça com que o elemento `div` envolva o heading inline. Comece adicionando a classe `title` a ele.

```html
<div class="title">
 <h1>Oi, eu sou a Ada Lovelace</h1>
</div>
```
e então o CSS apropriado

```css
.title {
  display: inline-block;
}
```

`inline-block` é um outro atributo de exibição. Você deve usar o `inline-block` muito mais que o `inline` para fazer o elemento aparecer inline porque o `div` com a classe `title` contém elemento de bloco, o `<h1>`, que toma conta e se expande até o final da linha.

> Usando o firebug, troque o `inline-block` para `inline` e note como aparece na tela.

Ajuste o alinhamento do `.title`

```css
vertical-align: top;
```

e torne a imagem um pouco menor

```css
.my-picture img {
  height: 60px;
}
```

##Caixa modelo (box model)

### O que é uma caixa modelo?

Um elemento pode ser visualizado como uma caixa. A caixa modelo é uma forma de descrever o amontoado de propriedades espaciais de um elemento, aqueles cujos efeitos são tamanho e espaçamento da página. Estes são: `padding` (enchimento), `margin` (margem), `border` (borda), assim como `height` (altura) e `width` (largura).

**<span style="color: rgb(130,171,182);">azul</span>** representa os valores para `height` e `width`. Normalmente estes valores são definidos implicitamente, baseados no conteúdo.

**<span style="color: rgb(185,197,124);">verde</span>** representa o `padding` &mdash; o espaço dentro da `border`. `Padding` contribui para o tamanho total da caixa. Então, se definimos `padding-left: 10px;` e `width: 20px;`, isso aplia o elemento em **30px** na página.

**<span style="color: rgb(244,211,139);">amarelo</span>** é a `border` &mdash; o limite em volta do conteúdo e do `padding`. Pode aplicar o estilo de diversas formas e representa a parte externa mais visível em um elemento.

**<span style="color: rgb(239,195,144);">laranja</span>** é a `margin` &mdash; o espaço fora da borda. Isto separa o elemento de outros elementos na página.

Nota: `padding`, `margin` e `border` podem ser aplicados a qualquer combinação de lados. Abaixo todos os três foram aplicados na mesma medida para os quatro lados em volta do conteúdo.

![](assets/images/box-model.png)

### Formando o estilo do header

A página está se formando gradativamente. Diferencie o `<header>` um pouco mais colocando uma cor de fundo e centralizando o conteúdo.

```css
header {
  background-color: #fdfdfc;
  text-align: center;
}
```

### Aplicando as propriedades de caixa no header

Amplie o estilo do header para que tenha uma border e altere o height e padding

```css
border-bottom: 1px solid #e7e6e6;
padding-top: 14px;
height: 70px;
```

> Você lembra da descrição sobre as propriedades de border da nossa última aula?


> Altere o width da border e atualize a página

_border: `thickness` `style` `color`;_

## Criando a barra lateral

Junto com o `width` e `height`, o `min-width` (largura mínima), `max-width` (largura máxima), `min-height` (altura mínima) e `max-height` (altura máxima) podem ser estabelecidas. Estas propriedades tendem a ser usadas para assegurar que, quando a página é redimensionada, o navegador não permita que essa alteração seja menor ou maior do que os valores especificados na propriedade.

Vamos adicionar conteúdo! Adicione o seguinte dentro do `div` no arquivo html.

```html
<div>
  <strong>Eu na internet</strong>
  <ul>
   <li><a href="https://www.facebook.com/augusta.ada.lovelace">facebook</a> </li>
   <li><a href="http://en.wikipedia.org/wiki/Ada_Lovelace">wikipedia</a> </li>
 </ul>
</div>
```

### Criando estilo

Adicione uma classe `sidebar` (barra lateral) ao div que acabamos de definir. Isto é para que possamos mudar o estilo sem impactar outros elementos.

```html
<div class="sidebar">
  <b>Eu na internet</b>
  ...
```

Comece adicionando uma cor de fundo para que nós possamos ver claramente o recipiente.

```css
.sidebar {
  background-color: #fdfdfd;
}
```

Restrinja o width do sidebar

```css
width: 30%;
min-width: 300px;
max-width: 320px;
```

Transforme isto num inline-block e estabeleça algumas das propriedades de caixa.

```css
display: inline-block;
padding: 25px 30px 20px;
border: 1px solid #e8e8ea;
margin-top: 55px;
margin-left: 20px;
```

###padding e margin
Padding e margin podem ser estabelecidos de diversas formas

`padding: top right bottom left;` exemplo: _padding: 10px 20px 30px 5px;_

`padding: top right/left bottom;` exemplo: _padding: 10px 20px 5px;_

`padding: top/bottom right/left;` exemplo: _padding: 5px 15px;_

`padding: all;` exemplo: _padding: 20px_

Como alternativa, você só pode estabelecer o lado que você quer `padding-right: 20px`

_isso também se aplica para margin_

###mais criação de estilo...

Especifique uma classe `.social-media` no elemento `ul`

```html
<ul class="social-media">
  <li><a href="https://www.facebook.com/augusta.ada.lovelace">facebook</a> </li>
```

Remova os tópicos e mude a margin e o padding padrão da ul (**u**nordered **l**ist)

```css
ul.social-media {
  list-style: none;
  margin-left: 10px;
  padding-left: 20px;
}
```

Adicione a border-bottom, para dar um efeito de linha, para os itens individuais da lista e altere suas dimensões

```
.social-media li {
  border-bottom: 1px solid #b0afc0;
  padding: 10px;
  width: 200px;
}
```

> Altere as propriedades usando o inspetor
> O que acontece quando você remove a width ou aumenta o padding?

## Pseudo-classes

Uma pseudo-classe é uma palavra chave adicionada aos seletores que especifica uma condição. Usando as pseudo-classes, podemos identificar estilos diferentes para diferentes situações de um link:

```css
a:link
a:visited
a:hover
a:active
```

Ordem é **muito** importante. Sempre use a ordem descrita acima se você quer aplicar estilos diferentes para todas as situações.
A pseudo-classe mais usada geralmente para links é `a:hover`. É o que vamos usar hoje.

Falamos sobre *pseudo*-classes porque, diferentemente das classes que são direcionadas quando colocamos um ponto na frente delas, as *pseudo*-classes não tem nenhum correspondente verdadeiro no HTML. Ao invés disso, elas se referem a certas situações do elemento que não são expressas pelos sinais.

## Criando estilo nos links

Nós queremos que somente os links dentro da lista sejam afetados. Então vamos agir somente no `.social-media li a`

```css
.social-media li a {
  color: #4c4066;
  text-decoration: none;
  text-shadow: 1px 0px #ffffff;
  border-left: 7px solid #fdcc38;
  padding-left: 10px;
}
```

### Criando estilos de link no :hover state

Nós queremos mudar a cor da border quando o cursor ficar em cima do link. Para evitar repetições, uma forma fácil para fazer isso é ser mais específico e usar `border-left-color`. Visto que não temos nenhuma outra border, podemos também usar `border-color`

**Lembre-se de olhar [a lista de todas as propriedades CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference?redirectlocale=en-US&redirectslug=CSS%2FCSS_Reference) (mencionada na aula anterior) quando trabalhando com estilos. São muitas propriedades para lembrar!**

```css
.social-media li a:hover {
  border-left-color: #a26cd2;
}
```

## Quase lá...

A sidebar está quase perfeita. Altere algumas propriedades para que a lista de tarefas esteja alinhada com os outros elementos e destacada.

```css
.sidebar b {
  margin-left: 36px;
  color: #4c4066;
  font-size: 19px;
}
```

## Antes de continuar, algumas propriedades de caixa legais de conhecer...

Adicione isso ao `.sidebar` do CSS

```css
border-radius: 6px;
box-shadow: 0 1px 1px 1px rgba(237, 235, 232, 0.4);
```
**border-radius** (raio da borda) cria cantos arredondados

**box-shadow** (sombra de caixa) cria um efeito sombreado, permitindo que se determine cor, tamanho, distorção e desvio.


## Estabelecendo o recipiente principal

Até agora você fez um excelente trabalho! A barra lateral está pronta e você sabe sobre propriedades de caixa. Hora de adicionar conteúdo à página.

Adicione um div, com a classe main depois de `.sidebar`

```html
<div class="main">

</div>
```

Aqui, vamos definir o texto que queremos mostrar sobre **Ada Lovelace**, usando parágrafos para deixar o conteúdo mais fácil para leitura.

### Primeiro, um pouquinho sobre ela

```html
<p>Meu nome é August Ada King. Sou a condessa de Lovelace.</p>

<p>Sou matemática e escritora. As pessoas me conhecem pelo meu trabalho em um computador mecânico para uso geral, a chamada Máquina Analítica, de Charles Babbage. Eu escrevi o primeiro algorítmo para ser processado em uma máquina. Em outras palavras, sou a primeira programadora do mundo.</p>

<p>Minha mãe, Anne Isabella Byron, me apoiou muito, já que foi ela quem incentivou meu interesse em matemática e lógica, mas nunca me esquecerei do meu pai, que mudou para Grécia quando eu era um bebê para lutar na guerra civil.</p>
```

Agora que o conteúdo está lá, podemos revê-lo e alterar o elemento para aparecer como inline block e estabelecer o width para ter certeza de que vai aparecer ao lado da sidebar.

```css
.main {
  display: inline-block;
  width: 55%;
}
```

> O sidebar e o recipiente estão aparecendo um ao lado do outro? O que acontece quando você altera a width?


Adicione um pouco mais de espaço em volta do recipiente principal e estabeleça o alinhamento vertical.

```css
margin-left: 70px;
padding-top: 60px;
vertical-align: top;
```

> Tente remover o `vertical-align`. O que acontece?

### Agora, concentre-se no conteúdo

Adicione um link para que qualquer pessoa que visite a página possa facilmente descobrir mais sobre Charles Babbage. No segundo parágrafo, coloque o nome dele com o link mostrado abaixo.

```html
<a href="http://en.wikipedia.org/wiki/Charles_Babbage">Charles Babbage's </a>
```

A Ada foi a primeira programadora do mundo. Nós queremos que esta informação esteja em destaque. Adicione um espaço em volta e especifique a classe como `highlight`, assim a intenção é óbvia e as outras pessoas trabalhando nos códigos da página podem entender isso facilmente.

```html
<span class="highlight">Eu sou a primeira programadora do mundo</span>
```

Especifique o estilo para a classe highlight

```css
.highlight {
  color: #4c61a9;
}
```

### Mais conteúdo

```html
<blockquote>&ldquo;Eu não acredito que meu pai era um poeta tão importante como eu serei uma Analista; para mim, os dois são indissociáveis.&rdquo;</blockquote>

<p>Durante a minha vida, matemática sempre foi meu interesse principal. Eu sempre questionei, inclusive premissas básicas, integrando poesias, outro grande amor na minha vida, e ciências. Também tenho um interesse especial em desenvolvimento científico e evoluções da minha época, como frenologia e magnetismo.</p>
```

Já que o primeiro parágrafo é uma citação, podemos usar `<blockquote>`, que é mais apropriado que uma p tag (tag de parágrafo).

```html
<blockquote>&ldquo;Eu não acredito que...</blockquote>
```

e aí criar o estilo

```css
blockquote {
  border: 1px solid #E7E6E6;
  padding: 20px 27px;
  border-radius: 6px;
  background-color: #FDFDFC;
  color: #4C4066;
  margin-top: 40px;
  margin-bottom: 40px;
}
```

> Altere as propriedades. Explique ao seu tutor o que essa propriedade faz.

Um poema sobre a Ada

```html
<p>
 Charles Babbage escreveu o seguinte poema sobre mim
 <br/>
 <span>
   Esqueça este mundo e todos os seus problemas<br/>
   e, se possível, seu excesso de Charlatões - <br/>
   tudo, em resumo, menos a Encantadora de Números.
 </span>
</p>
```

> Porque precisamos de uma quebra de linha (`<br/>`) antes do espaço? O que acontece quando removemos a quebra de linha?

Faça o poema aparecer diferente do resto do texto. Adicione uma classe CSS chamada `poem` para dar ênfase no elemento e adicione estilo

```css
.poem {
  font-style: italic;
  color: #4C4066;
}
```

### Mais algumas informações sobre a Ada
```html
<p>A linguagem de computação <a href="http://en.wikipedia.org/wiki/Ada_(programming_language)">Ada</a>, foi nomeada em minha homenagem. O padrão da Defesa Militar para a linguagem, o MIL-STD-1815 também tem seu nome em minha homenagem, com o ano do meu nascimento.</p>

<p>Hoje em dia, a Sociedade Britânica de Computação tem competições anuais para mulheres estudantes de Ciência da Computação com o meu nome. A conferência anual para as mulheres graduadas também foi nomeada em minha homenagem. O Google também dedicou o <a href="http://www.google.com/doodles/ada-lovelaces-197th-birthday">Google doodle</a> a mim, no meu 197º aniversário. </p>

<p>
 <a href="http://www.google.com/doodles/ada-lovelaces-197th-birthday">
  <img src="http://www.google.com/logos/2012/ada_lovelaces_197th_birthday-991005-hp.jpg" />
 </a>
</p>
```

A aparência está ótima, mas podemos alterar a posição do doodle para que esteja alinhado no meio e para que tenha um pouco mais de espaço entre ele e a página.

Adicione a classe `google-doodle` no último parágrafo e estabeleça seu estilo.

```css
.google-doodle {
  text-align: center;
  margin-top: 90px;
  margin-bottom: 70px;
}
```

### Criando estilo dos links

Anteriormente, nós especificamos o estilo para os elementos de link que estavam dentro da barra lateral. Agora nós vamos estabelecer um estilo de link padrão para ser aplicado a todos os elementos restantes.

```css
a {
  color: #7a3cb7;
}

a:hover {
  color: #a26cd2;
}
```

## Definindo o footer
Para completar nossa página, vamos adicionar conteúdos e criar o estilo do footer

Dentro do footer, adicione uma atribuição a você e um link para seu twitter, Facebook ou qualquer outro local que você queira.

```html
<p>Feito por <a href="...">[seu nome]</a></p>
```

e adicione os toques finais de estilo para os elementos do footer

```css
footer {
  height: 60px;
  padding-top: 20px;
  padding-left: 30px;
  background-color: #1f1430;
  border-top: 1px solid #eeeeee;
  margin-top: 20px;
}

footer p {
  color: #b0afc0;
  font-size: 14px;
}

footer a {
  color: #b0afc0;
}
```

> Você tem alguma dúvida?

### Bônus - Inspetor

Dê uma olhada na [página de exemplo](example.pt.html "Ada Lovelace"). O heading e body da página tem algumas diferenças da página que acabamos de criar.

Use o inspetor para olhar o `<body>` e `<h1>` e aplique estas mudanças à sua página.

-----

Assim termina nossa terceira aula. Tem alguma coisa que você não entendeu? Tente novamente e examine os recursos oferecidos junto com o seu tutor. Se você tem algum feedback ou alguma idéia de melhorar esta aula, [mande um email prá gente](mailto:feedback@codebar.io).
