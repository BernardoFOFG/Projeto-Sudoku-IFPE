<script>
  import Start from "./Start.svelte";
  import Facil from "./Facil.svelte";
  import Medio from "./Medio.svelte";
  import Dificil from "./Dificil.svelte";

  import { modo } from "../../scripts/Jogo.js";
  import { Dificuldade } from "../../scripts/Jogo.js";
</script>

<!-- HTML -->
<svelte:head>
  <link rel="stylesheet" href="../../styles/modo.css" />
</svelte:head>

<main class="container">
  <div class="box">
    <h1>Escolha um nivel</h1>
    <p>Clique no nivel desejado</p>
    <div class="niveis">
      <p id="facil" class="box__niveis" on:click={() => Dificuldade("facil")}>Facil</p>
      <p id="medio" class="box__niveis" on:click={() => Dificuldade("medio")}>Médio</p>
      <p id="dificil" class="box__niveis" on:click={() => Dificuldade("dificil")}>Difícil</p>
    </div>
    <Start />
  </div>
  {#if $modo === "facil"}
    <Facil />
  {:else if $modo === "medio"}
    <Medio />
  {:else if $modo === "dificil"}
    <Dificil />
  {/if}
</main>
