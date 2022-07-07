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
      <div id="logos">
        <img src="https://i.ibb.co/MksxQHQ/marca-nova.png" alt="IFPE Logo" />
        <h1>Projeto<br /> Sudoku</h1>
      </div>
      <div class="buttons">
        <div class="status" on:click={() => statusPage("jogar")}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://icongr.am/material/play.svg?size=16&color=ffffff"
          />Jogar
        </div>
        <div class="status" on:click={() => statusPage("sobre")}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://icongr.am/material/information.svg?size=16&color=ffffff"
          />Sobre
        </div>

        <div class="status" on:click={() => statusPage("ajuda")}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://icongr.am/material/comment-question.svg?size=16&color=ffffff"
          />Como Jogar
        </div>
      </div>
    </div>
  </section>
</main>
