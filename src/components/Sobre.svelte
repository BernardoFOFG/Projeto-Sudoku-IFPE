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
      "https://www.instagram.com/bernardofofg/"
    ),
    new Infos("Carolayne Russel", "19", curso, "Olá", "#", "#", "#"),
    new Infos("Eduardo Silvino", "18", curso, "Olá", "#", "#", "#"),
    new Infos("Kallyanne Vitória", "19", curso, "Olá", "#", "#", "#"),
    new Infos("Valdir Kehrle", "36", curso, "Olá", "#", "#", "#"),
  ];
</script>

<!-- HTML -->
<svelte:head>
  <link rel="stylesheet" href="../../styles/sobre.css" />
</svelte:head>
<main>
  <header>
    <h1>Projeto SUDOKU</h1>
  </header>
  <section class="team">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="https://i.ibb.co/F6PjnG6/undraw-Engineering-team-re-fvat.png" />
    <div class="team__participants">
      {#each infos as info}
        <div class="team__participants__box">
          <div class="team__participants__box__icons">
            <a href={info.linkedin} target="_blank">
              <img
                src="https://icongr.am/simple/linkedin.svg?size=32&color=currentColor&colored=false"
                alt="LinkedIn-Icon"
              />
            </a>
            <a href="##">
              <img
                src="https://icongr.am/simple/instagram.svg?size=32&color=currentColor&colored=false"
                alt="Instagram-Icon"
              />
            </a>
          </div>
          <p>{info.nome}</p>
          <p class="resume">
            {info.descricao}
          </p>
        </div>
      {/each}
    </div>
  </section>
  <Start />
</main>
