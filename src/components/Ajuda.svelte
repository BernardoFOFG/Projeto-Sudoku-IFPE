<!-- Script -->
<script>
  import Start from "./Start.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="../../styles/ajuda.css" />
</svelte:head>

<!-- HTML -->
<main>
  <header>
    <img src="https://i.ibb.co/s5BDp2R/logo-sudoku.png" alt="Sudoku Logo" />
    <h1>Projeto SUDOKU</h1>
    <img
      src="https://ingresso.ifpe.edu.br/static/img/ifpe-logo.svg"
      alt="IFPE Logo"
    />
  </header>
  <section class="help__player">
    <details open>
      <summary><strong>Como jogar?</strong></summary>
      <p>
        SUDOKU é um jogo de raciocínio e lógica. O objetivo do jogo é completar
        todos os quadrados utilizando números de 1 a 9. Para completá-los basta
        seguir a seguinte regra: Não podem haver números repetidos nas linhas
        horizontais e verticais, assim como nos quadrados delimitados por linhas
        em negrito, e há um limite de erros que são até 3 erros.
      </p>
    </details>
    <div class="help__player__img">
      <img src="https://i.ibb.co/4YKsSkj/Sudoku-resolvido.png" alt="" />
    </div>
  </section>
  <Start />
</main>
<!-- CSS -->
