---
layout: page
title: HTML Aula 1
---

## O que é HTML?

**HTML** é a linguagem usada para construir sites da internet.

Ele define a estrutura do site, ou seja, qualquer coisa relacionada ao conteúdo da página, como texto, imagens, vídeos.


### O que significa HTML:

**H**yper **T**ext **M**arkup **L**anguage (Linguagem de marcação de hipertexto)


### O que forma um site de internet

HTML: estrutura do site

CSS: apresentação


_A aparência de um site não é parte do HTML._


### Hoje vamos concentrar nos conceitos fundamentais do HTML

Vamos construir esta [página de exemplo](/html/lesson1/example.pt.html "Eu amo corujas")

## Mas antes de iniciar...

### Anatomia de um elemento HTML

Um **elemento** é como um tijolo no HTML. Existem parágrafos, cabeçalhos, tabelas, links, listas e muitos outros.

**Tags** indicam a abertura e fechamento de um elemento. Elas frequentemente contém outros elementos e texto.

`<nomedatag>conteúdo</nomedatag>`

```html
<p>Eu sou um parágrafo</p>
<h1>Eu sou um cabeçalho</h1>
```

Alguns elementos são individuais, já que eles não tem nenhum conteúdo que os acompanha. Eles se parecem com isso: `<nomedatag/>`

```html
<br>
<img>
```

### Comentários

Podemos usar um tipo especial de tag para adicionar anotações em nossas páginas. O computador vai ignorá-las, mas os programadores podem ler e entender como funcionam seus códigos.

```html
<!-- Nota pessoal: aqui fica o cabeçalho -->
```

### DOCTYPE e tags HTML

O doctype é a primeira coisa que precisa ser definida numa página HTML.
Ele diz ao navegador qual a versão de HTML a página está usando.

```html
<!DOCTYPE html>
```

Por enquanto nós vamos usar somente HTML, mas você pode descobrir mais sobre doctypes [aqui](https://www.w3.org/wiki/Doctypes_and_markup_styles).

O doctype vem sempre seguido pela tag `<html>`, a qual já tem o conteúdo da página.

```html
<!DOCTYPE html>
<html>
</html>
```

### Tags de HEAD e BODY

Uma página HTML é dividida em duas partes. O **head** (Cabeçalho do documento) e **body** (Corpo do documento).

O **head** contém informações como título da página, folhas de estilo, escrita e meta-informação.

O **body** contém o que é visível para o usuário. O conteúdo propriamente dito.


## Vamos começar!

Começaremos definindo a estrutura básica do nosso site. Crie uma pasta para seu trabalho chamada "HTML Aula 1". Depois, dentro desta pasta, crie um novo arquivo chamado "index.html". Isso é o que você deve escrever no arquivo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Eu amo corujas</title>
  </head>
  <body>
    <!-- Coloque o conteúdo da página neste body tag! -->
  </body>
</html>
```

> Se você carregar isso no seu navegador, você vê algo na página?

> E na barra de título do navegador ou barra de abas?


### Elemento: Cabeçalho

Cabeçalhos existem em diversos tamanhos

# `<h1>Cabeçalho</h1>`
## `<h2>Cabeçalho</h2>`
### `<h3>Cabeçalho</h3>`
#### `<h4>Cabeçalho</h4>`
##### `<h5>Cabeçalho</h5>`
###### `<h6>Cabeçalho</h6>`

Acrescente um cabeçalho à sua página. Coloque-o dentro da tag "body" da página. Lembre-se, é lá que vai o conteúdo que o usuário vê.

```html
<h1>Corujas!</h1>
```

> Você lembrou de adicionar o cabeçalho à estrutura?

> Não esqueça de salvar as alterações antes de atualizar o navegador!

### Aninhando elementos

Elementos podem ser aninhados um dentro do outro. Por exemplo, se você colocar o `<h1>` dentro das tags de corpo de página você está posicionando um cabeçalho dentro do `<body>` de uma página.

> Você deve sempre fechar qualquer elemento que você abrir. Abriu um elemento, feche no final!

### Elemento: Parágrafo `<p>`

Adicionar conteúdo ao `<p>` faz com que o texto tenha uma estrutura de parágrafo. Isso ajuda para que o conteúdo da página fique mais fácil para leitura.

Acrescente o seguinte no corpo da página, depois do cabeçalho `<h1>`:

```html
<p>
  A maioria das aves de rapina possui os olhos na parte lateral da cabeça
  mas a natureza estereoscópica dos
  olhos voltados para frente na coruja permite
  um melhor senso de percepção profunda necessária para a caça com pouca luz.
</p>
```

### Quebra de linha `<br>`
Como você já notou, apesar das novas linhas, não há quebra de linha em nosso parágrafo. Para que isso aconteça, precisamos usar a tag `<br>`.

```html
<p>
  A maioria das aves de rapina possui os olhos na parte lateral da cabeça<br>
  mas a natureza estereoscópica dos<br>
  olhos voltados para frente na coruja permite<br>
  um melhor senso de percepção profunda necessária para a caça com pouca luz.
</p>
```

### Formatando o texto

Nós também podemos **enfatizar** ou estabelecer *importância* no texto.
Para ênfase usamos `<strong>` para importância, `<em>`.

Vamos enfatizar alguns conteúdos no nosso parágrafo

```html
<p>
  A maioria das aves de rapina possui os olhos na parte lateral da cabeça<br>
  mas a natureza estereoscópica dos<br>
  <strong>olhos voltados para frente na coruja permite<br>
  um melhor senso de percepção profunda</strong> necessária para a caça com pouca luz.
</p>
```

### Elemento: Link `<a>`

O atributo mais importante de um link é o **href**, que indica o caminho ou URL que será acessada através dele.

Vamos adicionar um link no final do nosso parágrafo

```html
<br/>
<a href="https://pt.wikipedia.org/wiki/Coruja">Mais informações sobre corujas...</a>
```

### Elemento: Div `<div>`

Div significa _divisão_. Ele cria seções num documento HTML. O div não afeta o layout da sua página - mas ajuda agrupar componentes relacionados.

Podemos usar um div para limitar o nosso parágrafo.

Cerque o parágrafo já existente por um div e adicione um novo cabeçalho a ele:

```html
<div>
  <h3>Corujas</h3>
  <p>
    A maioria das aves de rapina possui os olhos na parte lateral da cabeça<br/>
    mas a natureza estereoscópica dos<br/>
    <strong>olhos voltados para frente na coruja permite<br/>
    um melhor senso de percepção profunda</strong> necessária para a caça com pouca luz.
    <br/>
    <a href="https://pt.wikipedia.org/wiki/Coruja">Mais informações sobre corujas...</a>
  </p>
</div>
```


### Componente: Lista `<li>`

Existem dois tipos de listas, **ordenada** e **desordenada**.
Uma lista desordenada `<ul>` é definida por pontos enquanto a lista ordenada `<ol>` usa uma sequência.

Vamos listar as razões que nós fazem gostar tanto de corujas abaixo do cabeçalho principal da página (o elemento `<h1>` que adicionamos mais cedo)

```html
<h2>Porque nós gostamos tanto de corujas?</h2>
<ol>
  <li>elas são adoráveis</li>
  <li>e amáveis</li>
  <li>e apertáveis</li>
</ol>
```

> Se você quer tornar essa lista desordenada, o que você precisa mudar? Como você verifica se funcionou? Tente e depois volte a sua lista para ordenada.

### Elemento: Imagem `<img>`

Até agora nós aprendemos bastante sobre adicionar texto à nossa página. Que tal acrescentar algo para olhar?

Vamos colocar algumas imagens!

Antes de começar, precisamos adicionar à pasta do projeto os arquivos de imagens que queremos usar. É sempre bom manter as imagens na sua própria pasta, portanto, primeiro crie uma pasta chamada ‘images’ dentro da mesma pasta que está o seu arquivo HTML. Depois, baixe as imagens que você vai precisar. Faça isso clicando com o botão direito em cada um dos links abaixo, selecionando 'Save Link As...' (ou ‘Salve Link Como’), e salve na pasta de imagens que você acabou de criar:

* [logo.png](/html/lesson1/images/logo.png "logo.png")
* [img1.jpg](/html/lesson1/images/img1.jpg "img1.jpg")
* [img2.jpg](/html/lesson1/images/img2.jpg "img2.jpg")
* [img3.jpg](/html/lesson1/images/img3.jpg "img3.jpg")
* [img4.jpg](/html/lesson1/images/img4.jpg "img4.jpg")
* [img5.jpg](/html/lesson1/images/img5.jpg "img5.jpg")
* [img6.jpg](/html/lesson1/images/img6.jpg "img6.jpg")

Imagens são principalmente formadas por três atributos

* o tag `<img>`
* o atributo `src`, o qual deixa a página saber qual imagem queremos que seja vista
* o atributo `alt`, onde nós descrevemos nossa imagem para as pessoas que não conseguem ver a mesma

Antes do principal cabeçalho da página, adicione o seguinte

```html
<div>
  <img src="images/logo.png" alt="codebar.io"/>
</div>
```

> Lembre-se: a seção `<head>` não é o mesmo que cabeçalho! Certifique-se de que sua nova `<div>` está no corpo da página.

> Você consegue ver o logo do codebar? O que acontece quando você muda de logo para logo1?

> Se você não consegue ver sua imagem, certifique-se de ter colocado as imagens na pasta `images`.

Vamos adicionar mais imagens. Dessa vez nós vamos colocá-las em uma lista.
Faça isso abaixo do cabeçalho `<h2>Porque nós gostamos tanto de corujas?</h2>`.

```html
<ul>
  <li><img src="images/img1.jpg" alt="adoráveis"/></li>
  <li><img src="images/img2.jpg" alt="amáveis"/></li>
  <li><img src="images/img3.jpg" alt="apertáveis"/></li>
</ul>
```

Portanto, a lista pode conter não somente texto, mas outros elementos também.

### Adicionando um link a elementos múltiplos

Links podem conter vários elementos - não somente texto.

Vamos usar algumas imagens e texto para conectar a um video. Isso pode ajudar quando queremos que o usuário chegue onde desejamos sem que ele tenha que clicar num texto.

Adicione este texto abaixo da lista ordenada sobre porque gostamos de corujas.

```html
<div>
  <a href="https://www.youtube.com/watch?v=gBjnfgnwXic">
    <img src="images/img4.jpg" alt="coruja fofa"/>
    <img src="images/img5.jpg" alt="outra coruja fofa"/>
    <br/>
    Assista o vídeo
  </a>
</div>
```

> Clique em qualquer uma das imagens. Você consegue acessar o link da página?
> O que acontece se você remover o tag `<br/>`? Lembre-se de colocar de volta depois!

### Caracteres especiais e mais formatação

Alguns caracteres tem um significado especial no HTML. Por exemplo, nós usamos `<` e `>` para fazer tags de HTML, e usamos `"` para cercar nossos atributos. Mas e se quisermos usar aqueles caracteres na nossa página?

Uma forma é usar **unidades HTML**. Estes tem um `&` (ampersand ou E comercial), um nome e depois um ponto e vírgula `;`. Aqui está a unidade HTML para um caracter de citação: `&quot;`.

Você também pode usar um formato numérico para produzir caracteres especiais. [Aqui está uma lista](http://htmlandcssbook.com/extras/html-escape-codes/) de algumas unidades comuns.

E um pequeno poema para a sua página, cercada por citações usando unidades HTML.

```html
<div>
  <p>
    <strong>
      <em>
       &quot;Uma coruja sábia e anciã pousou em um carvalho; Quanto mais observava, menos falava; <br>
       Quanto menos falava, mais ouvia; Por que não somos como a coruja sábia e anciã?&quot;
      </em>
    </strong>
  </p>
  <small>&mdash; poema infantil</small>
</div>
```

**small** é um outro elemento de formatação que você pode usar.

> Você notou como o caracter `&mdash;` renderiza na sua página?

### Link de envio de email (mailto link) `<a>`

Links também podem abrir o email do usuário ou compartilhar conteúdo.
A diferença entre os links e link de envio de email (mailto link) é o conteúdo definido pelo atributo **href**.

```html
<ul>
  <li>
     <a href="mailto:social@codebar.io?subject=Eu amo corujas :: codebar">Mande um email</a>
  </li>
  <li>
     <a href="mailto:?subject=Eu amo corujas :: codebar">Mande um email para seu amigo</a>
  </li>
</ul>
```

> O que acontece quando você clica no primeiro link?

> O que acontece quando você clica no segundo link? Qual a diferença?

> O que acontece quando você adiciona &body=Corujas são demais ao segundo link?


## Bonus

Coloque um link para compartilhar no twitter junto com outros links de compartilhamento.

```html
<a href="https://twitter.com/home?status=Eu amo corujas! via @by_codeba">Compartilhe seu amor por corujas no twitte</a>
```

---

Isso finaliza a nossa primeira lição. Tem alguma coisa que você não entendeu? Treine e passe por todos os recursos oferecidos com o seu tutor. Se você tem algum comentário ou idéias para melhorarmos nossa aula, [mande um email](mailto:feedback@codebar.io).
