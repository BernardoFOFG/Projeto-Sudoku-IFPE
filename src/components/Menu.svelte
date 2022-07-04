<svelte:head> 
  <link rel="stylesheet" href="../../styles/menu.css">
</svelte:head>

<!-- Script -->
<script>
  import { status } from "../../scripts/Status.js";
  import { statusPage } from "../../scripts/Status.js";
</script>

<!-- HTML -->

<main>
  <div class="container">
    <section class="menu">
      <div class="box">
        <div id="logos">
          <h1>Projeto SUDOKU</h1>
          <img
            src="https://i.ibb.co/s5BDp2R/logo-sudoku.png"
            alt="Sudoku Logo"
          />
          <img
            src="https://ingresso.ifpe.edu.br/static/img/ifpe-logo.svg"
            alt="IFPE Logo"
          />
        </div>
        <div class="buttons">
          <div class="status" on:click={() => statusPage("jogar")}>
            Jogar</div>
          <div class="status" on:click={() => statusPage("sobre")}>
            Sobre</div>
          <div class="status" on:click={() => statusPage("ajuda")}>
            Ajuda</div>
        </div>
      </div>
    </section>
  </div>
</main>
