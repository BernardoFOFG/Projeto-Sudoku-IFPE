<!-- Script -->
<script>
  import { element } from "svelte/internal";
  import Botoes from "./Botoes.svelte";
  import Start from "./Start.svelte";

  class Tabela {
    constructor(tabela, cell) {
      this.tabela = tabela;
      this.cell = cell;
    }
  }

  let tabela = [
    ["3", " ", "4", " ", " ", " ", " ", "2", "9"],
    [" ", " ", "2", " ", "4", "9", " ", "5", "8"],
    [" ", "1", "9", "2", " ", " ", "3", " ", " "],
    ["2", " ", " ", "6", "8", "3", " ", " ", "1"],
    [" ", "7", "8", " ", "1", " ", " ", " ", " "],
    ["9", "3", " ", "4", " ", " ", " ", "6", "5"],
    [" ", "8", " ", "7", "6", " ", " ", "1", "2"],
    ["4", " ", "7", " ", " ", "2", "5", " ", " "],
    ["1", "2", " ", " ", " ", " ", " ", "3", " "],
  ];
  /*let tabelaPronta = [
    []
    []
    []
    []
    []
    []
    []
    []
    []
  ];*/
  let estadoTabela = new Tabela(tabela, tabela.length);
  let tabelaResolvida = new Tabela(tabela, tabela.length);
  function contaTabela(event) {
    console.log(event.target.innerHTML);
  }

  console.log(estadoTabela);
</script>

<!-- HTML -->
<table>
  {#each estadoTabela.tabela as linha, i}
    <tr>
      {#each linha as cell, j}
        <td
          class={cell.trim() != "" ? "cell" : "cell-empty"}
          row={i}
          col={j}
          on:click={(event) => contaTabela(event)}
        >
          {cell}
        </td>
      {/each}
    </tr>
  {/each}
</table>

<div class="box">
  <Botoes texto="1" />
  <Botoes texto="2" />
  <Botoes texto="3" />
  <Botoes texto="4" />
  <Botoes texto="5" />
  <Botoes texto="6" />
  <Botoes texto="7" />
  <Botoes texto="8" />
  <Botoes texto="9" />
</div>


<Start />

<!-- CSS -->
<style>
  table {
    border-collapse: collapse;
    margin: 2rem auto;
  }
  tr {
    border-top: 1px solid black;
  }

  td {
    border-style: solid;
    text-align: center;
    vertical-align: center;
    height: 75px;
    width: 75px;
    font-size: 18px;
    font-weight: 500;
  }

  td:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
</style>
