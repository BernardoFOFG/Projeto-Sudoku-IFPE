<!-- Script -->
<script>
  import { status } from "../../scripts/Status.js";
  import { statusPage } from "../../scripts/Status.js";
</script>

<svelte:head>
  <link rel="stylesheet" href="../../styles/menu.css" />
</svelte:head>

<!-- HTML -->

<main>
  <section class="menu">
    <div class="box">
      <h1>Projeto Sudoku</h1>
      <div id="logos">
        <img
          src="https://ingresso.ifpe.edu.br/static/img/ifpe-logo.svg"
          alt="IFPE Logo"
        />
      </div>
      <div class="buttons">
        <div class="status" on:click={() => statusPage("jogar")}>Jogar</div>
        <div class="status" on:click={() => statusPage("sobre")}>Sobre</div>
        <div class="status" on:click={() => statusPage("ajuda")}>Ajuda</div>
      </div>
    </div>
  </section>
</main>
