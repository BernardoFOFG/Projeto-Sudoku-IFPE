<!-- Script -->
<script>
  import Start from "./Start.svelte";
</script>

<!-- HTML -->
<svelte:head>
  <link rel="stylesheet" href="../../styles/ajuda.css" />
</svelte:head>
<main>
  <header>
    <img
      src="https://ingresso.ifpe.edu.br/static/img/ifpe-logo.svg"
      alt="IFPE Logo"
    />
    <h1>Projeto Sudoku</h1>
    <img src="https://i.ibb.co/s5BDp2R/logo-sudoku.png" alt="Sudoku Logo" />
  </header>
  <section class="help__player">
    <div class="comojogar__header">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="https://icongr.am/fontawesome/search.svg?size=64&color=ffffff"
      />
      <h1>Como jogar?</h1>
    </div>
    <div class="comojogar__p">
      <p>
        <strong>SUDOKU</strong> é um jogo de <strong>raciocínio</strong> e
        <strong>lógica</strong>. O objetivo do jogo é completar todos os
        quadrados utilizando números de 1 a 9. Para completá-los basta seguir a
        seguinte regra: Não podem haver números repetidos nas linhas
        <strong>horizontais</strong> e <strong>verticais</strong>, assim como
        nos quadrados delimitados por linhas em negrito, e há um limite de erros
        que são até <strong>3 erros</strong>.
      </p>
    </div>
    <div class="help__player__img">
      <img src="https://i.ibb.co/4YKsSkj/Sudoku-resolvido.png" alt="" />
    </div>
  </section>
  <Start />
</main>
<!-- CSS -->
