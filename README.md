# Bem vindo à DEVinHouse <img width="180px" alt="Philips" src="./src/assets/images/logo-phil.png"/>
## Módulo 01 - Semana 11

Eu desenvolvi um projeto `Angular` para a elaboração dos 8 exercícios referentes a essa semana. <br>

Para visualizar o meu projeto, <a href="https://github.com/GeorgeEnriqueBravo/DEVinHouse-Modulo01-Semana11/archive/refs/heads/main.zip" target="_blank">
    clique aqui
</a>
para baixa-lo. Após o download, abra a pasta do projeto por um terminal ou pelo CMD do computador e digite o comando `npm install`, para instalar a pasta node_modules e depois digite o comando `ng serve --o` para abrir o projeto no seu navegador.
  
---

# Lista de exercícios <img width="75px" alt="Philips" src="./src/assets/images/lista.png"/>
### [M1S11] Ex 1 - Criando um pipe

Com a ajuda do decorator @pipe crie um pipe com o ng g p pipes/captalizePhillips para transformar a primeira letra de cada palavra em maiúscula.

### [M1S11] Ex 2 - Menu

O exercício consiste em fazer uma navbar, com ajuda do bootstrap ou não, como no exemplo da imagem em anexo para acessar diferentes componentes ou containers html ao clicar em cada uma das opções.

- Depois do fechamento da tag html <navbar> cole o código abaixo:

```
<div>
  <h2>Estou na página de Home</h2>
  <h2>Estou na página de Preços</h2>
  <h2>Estou na página de Informações</h2>
</div>
```
    
- Declare na classe do seu componente uma variável page do tipo string.
- Com a construção da sua navbar adicione um evento de click em cada uma das opções da navbar e no seu valor diga que a variável page recebe um valor correspondente a aquela página, como se fosse um id. <br>
Exemplo: levando em conta o exemplo na imagem em anexo, será adicionado um evento de click na palavra Home onde seu valor será page=‘Home’ ( (click)=”page = ‘Home’” ).
- Já na `<div>` deverá ser adicionada a diretiva ngSwitch passando a variável page como valor.
- Após isso em cada tag html `<h2>` será adicionada a cláusula ngSwitchcase recebendo o valor correspondente a aquela página. Ex: no segundo h2 ficaria *ngSwitchCase=”’Preços’”.
- O primeiro h1 deve ser o valor padrão para o ngSwitchDefault.

### [M1S11] Ex 3 - ngFor

Em um projeto angular na classe do seu component declare a variável abaixo.

```
arrayFotos: any = [
  {
    url: "",
    description:""
  },
  {
    url: "",
    description:""
  },
  {
    url: "",
    description:""
  },
  {
    url: "",
    description:""
  },
  {
    url: "",
    description:""
  }
]
```

- A variável arrayFotos consiste em um array de objetos com duas propriedades, a url que recebe o caminho da sua foto e a description contendo uma breve descrição da foto.
- Agora escolha 5 imagens de sua preferência, a url de cada imagem deve ser armazenada dentro da propriedade url e a descrição dentro da description.
- Já no html do componente faça um card usando classes do css ou bootstrap, o design fica a sua escolha.
- Com o uso do ngFor repita e mostre cada imagem em um card diferente com a descrição dela abaixo da imagem.

### [M1S11] Ex 4 - ngIf

Para treinar a diretiva ngIf vamos seguir as instruções abaixo:

- Inicie um projeto angular e no css do seu componente cole o código do arquivo em anexo.
- Depois disso adicione no template html do seu componente o código abaixo.

```
<div class="card">
  <a>Open Demo Modal</a>
</div>

<div class="modal">
  <div class="modal__content">
    <h1>Example modal</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minima
      libero veniam, modi corrupti doloremque repellendus vitae mollitia. Ipsum
      voluptatibus ea ab quos molestiae at expedita maiores dolore a corrupti!
    </p>
    <a class="modal__close">&times;</a>
  </div>
</div>
```

- Declare uma variável chamada showModal do tipo boolean na classe do seu componente.
- Após isso nas duas tags html <a> com a ajuda do evento de click mude a variável para o valor contrário ao valor atual.
- Já na tag html <div> que possui a classe ‘modal’, adicione a diretiva ngIf para apenas mostrar essa <div> caso a variável for true.

### [M1S09] Ex 5 - Property Binding (Parte 2)

Com o mesmo componente criado anteriormente no exercício 2 iremos com a ajuda do property binding criaremos um objeto chamado personagem com o seguinte formato: <br>
Exemplo: <br>
`
pesonagem: any = {
    nome: 'Jon Snow',
    imagem: 'https://tm.ibxk.com.br/2022/08/26/26174558850404.jpg?    ims=704x264',
    nomeAtor: 'Kit Harington',
    descricao:
      'Ator ator britânico. É mais conhecido por interpretar Jon Snow na     série televisiva Game of Thrones da HBO. Meu marido, mas ele não sabe U.u',
  };`
  
Sua missão será passar cada informação do objeto através do property binding, para substituir as informações antes fixas no template do componente item-card.

### [M1S09] Ex 6 - @Input (Parte 3)

Continuando nossa função de tornar um componente dinâmico iremos mudar a declaração do objeto, anteriormente criado no próprio componente, para ser passada através do @input do componente pai para o filho (item-card).

### [M1S09] Ex 7 - Injeção de dependência

Para praticar mais a organização de responsabilidades feita no front e também a injeção de dependências, iremos simular um projeto com comunicação para o localStorage. Primeiro crie um service para fazer a comunicação com o controlador do template e o envio de dados ao localStorage. <br>
A temática será a mesma abordada nas aulas. No html do template deverá ter um formulário bootstrap com dois inputs, um para capturar o email e outro para a senha, além disso também deverá haver um botão de enviar. Através do evento de click, visto rapidamente em aula envie esses dados até o localStorage no formato de objeto. <br>
Deverá ser feito a injeção de dependência do service criado, para o controller.

OBS: lembre-se do fluxo de informações:
TEMPLATE > CONTROLLER > SERVICE > LOCAL STORAGE

### [M1S09] Ex 8 - @Output

Com um componente de busca criado, adicione inicialmente apenas um input para receber a pesquisa, adicione um @output e chame-o por meio do componente pai (app). <br>
A cada tecla digitada na busca, um console.log deve ser aberto em home com o texto que está sendo formado.

---

# O que é DEVinHouse?
DEVinhouse é uma jornada de aceleração da carreira com: grade curricular direcionada, professores do mercado, prática constante, interação frequente com as houses parceiras de cada turma, simulação do dia-a-dia DEV e vagas exclusivas que são abertas pelas Houses durante a jornada.

No DEVinHouse você vira um desenvolvedor Fullstack em 9 meses, ao longo de 900 horas de conteúdo, divididas em três módulos de 3 meses cada, com intervalo de uma semana entre cada um. Aproximadamente 25 horas de dedicação por semana entre aulas, atividades e vivências.

__1º módulo:__ Front-End – JavaScript e Angular <br/>
__2º módulo:__ Back-End – Java, Spring e SQL <br/>
__3º módulo:__ Full-Stack – Scrum, DevOps, Clean Code e Design Patterns <br/>
__Ferramentas__ – GitHub, Trello e Slack

---

# Tecnologias Utilizadas <img width="35px" alt="🌐" src="./src/assets/images/tag.gif"/>
Nos exercícios dessa semana foram utilizadas as seguintes tecnologias:
<div style="display: inline_block">
    <img align="center" alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
    <img align="center" alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
    <img align="center" alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img align="center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img align="center" alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</div>
