<!-- Script -->
<script>
  import Start from "./Start.svelte";
  let curso = "Tecnologia em Sistema para Internet";
  class Infos {
    constructor(nome, idade, curso, descricao, linkedin, instagram, github) {
      this.nome = nome;
      this.idade = idade;
      this.curso = curso;
      this.descricao = descricao;
      this.linkedin = linkedin;
      this.instagram = instagram;
      this.github = github;
    }
  }

  let infos = [
    new Infos(
      "Bernardo Filipe",
      "19",
      curso,
      "Olá, sou estudante do 1º período do curso de tecnologia em sistema\
          para internet, e sou entusiasta em desenvolvimento front-end, mas meu\
          objetivo é meio academico, desenvolver pesquisas, e futuramente\
          iniciar uma carreira academico na docência.",
      "https://www.linkedin.com/in/bernardofofg/",
      "https://www.instagram.com/bernardofofg/",
      "https://www.github.com/bernardofofg"
    ),
    new Infos(
      "Carolayne Russel",
      "19",
      curso,
      "Olá, me chama Carolayne, tenho 21 anos e estou cursando o ensino superior de Tecnologia de Sistemas para Internet, atualmente estou no primeiro período, buscando aprender e me formar nessa área",
      "https://www.linkedin.com/in/carolayne-maria-b08512244/",
      "https://www.instagram.com/carolayne.russell/",
      "https://github.com/CarolayneMR"
    ),
    new Infos(
      "Kallyanne Vitória",
      "18",
      curso,
      "Olá, me chamo Kallyanne Vitória, tenho 18 anos e estou cursando o primeiro\
       período do curso de nível superior Tecnologia de Sistemas para a Internet. Busco aprofundar meus conhecimentos nesta área pois é algo que irá me oportunizar crescer profissionalmente num futuro próximo.",
      "#",
      "https://github.com/KallyVSS",
      "https://www.instagram.com/kally_viih/"
    ),
  ];
</script>

<!-- HTML -->
<svelte:head>
  <link rel="stylesheet" href="../../styles/sobre.css" />
</svelte:head>
<main>
  <header>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://i.ibb.co/MksxQHQ/marca-nova.png" />
    <h1>Projeto Sudoku</h1>
    <img src="https://i.ibb.co/s5BDp2R/logo-sudoku.png" alt="Sudoku Logo" />
  </header>
  <section class="team">
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="quemsomos">
      <img
        src="https://icongr.am/material/account-group.svg?size=16&color=ffffff"
      />Quem Somos
     
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="team__participants">
      {#each infos as info}
        <div class="team__participants__box">
          <div class="team__participants__box__icons">
            <a href={info.linkedin} target="_blank">
              <img
                src="https://icongr.am/simple/linkedin.svg?size=32&color=ffffff"
                alt="LinkedIn-Icon"
              />
            </a>
            <a href={info.instagram} target="_blank">
              <img
                src="https://icongr.am/simple/instagram.svg?size=32&color=ffffff"
                alt="Instagram-Icon"
              />
            </a>
            <a href={info.github} target="_blank">
              <img
                src="https://icongr.am/simple/github.svg?size=32&color=ffffff"
                alt="Github-Icon"
              />
            </a>
          </div>

          <p class="resume">
            {info.descricao}
          </p>
          <h2>{info.nome}</h2>
        </div>
      {/each}
    </div>
    <Start />
  </section>
</main>
