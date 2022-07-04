<!-- Script -->
<script>
  import Start from "./Start.svelte";
  let curso = "Tecnologia em Sistema para Internet";
  class Infos {
    constructor(nome, idade, curso) {
      this.nome = nome;
      this.idade = idade;
      this.curso = curso;
    }
  }
  let info1 = new Infos("Bernardo Filipe", "19", curso);
  let info2 = new Infos("Carolayne Russel", "19", curso);
  let info3 = new Infos("Eduardo Silvino", "18", curso);
  let info4 = new Infos("Kallyanne Vitória", "19", curso);
  let info5 = new Infos("Valdir Kehrle", "36", curso);
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
      <div class="team__participants__box">
        <div class="team__participants__box__icons">
          <a href="https://www.linkedin.com/in/bernardofofg/" target="_blank">
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
        <p>{info1.nome}</p>
        <p class="resume">
          Olá, sou estudante do 1º período do curso de tecnologia em sistema
          para internet, e sou entusiasta em desenvolvimento front-end, mas meu
          objetivo é meio academico, desenvolver pesquisas, e futuramente
          iniciar uma carreira academico na docência
        </p>
      </div>
      <div class="team__participants__box">
        <div class="team__participants__box__icons">
          <a href="##" target="_blank">
            <img
              src="https://icongr.am/simple/linkedin.svg?size=32&color=currentColor&colored=false"
              alt="LinkedIn-Icon"
            />
          </a>
          <a href="##"
            ><img
              src="https://icongr.am/simple/instagram.svg?size=32&color=currentColor&colored=false"
              alt="Instagram-Icon"
            />
          </a>
        </div>
        <p>{info2.nome}</p>
      </div>
      <div class="team__participants__box">
        <div class="team__participants__box__icons">
          <a href="##">
            <img
              src="https://icongr.am/simple/linkedin.svg?size=32&color=currentColor&colored=false"
              alt="LinkedIn-Icon"
            />
          </a>
          <a href="##"
            ><img
              src="https://icongr.am/simple/instagram.svg?size=32&color=currentColor&colored=false"
              alt="Instagram-Icon"
            />
          </a>
        </div>
        <p>{info3.nome}</p>
      </div>
      <div class="team__participants__box">
        <div class="team__participants__box__icons">
          <a href="##"
            ><img
              src="https://icongr.am/simple/linkedin.svg?size=32&color=currentColor&colored=false"
              alt="LinkedIn-Icon"
            />
          </a>
          <a href="##"
            ><img
              src="https://icongr.am/simple/instagram.svg?size=32&color=currentColor&colored=false"
              alt="Instagram-Icon"
            />
          </a>
        </div>
        <p>{info4.nome}</p>
      </div>
      <div class="team__participants__box">
        <div class="team__participants__box__icons">
          <a href="##"
            ><img
              src="https://icongr.am/simple/linkedin.svg?size=32&color=currentColor&colored=false"
              alt=""
            />
          </a>
          <a href="##"
            ><img
              src="https://icongr.am/simple/instagram.svg?size=32&color=currentColor&colored=false"
              alt="Instagram-Icon"
            />
          </a>
        </div>
        <p>{info5.nome}</p>
      </div>
    </div>
  </section>
  <Start />
</main>

<!-- CSS -->
