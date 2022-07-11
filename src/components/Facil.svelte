<!-- Script -->
<script>
  import { onMount } from "svelte";

  onMount(async () => {
    iniciandoJogo();
  });

  let numeroSelecionado = null;
  let erros = 0;
  let acerto = 0;

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

  let solucao = [
    ["3", "5", "4", "8", "7", "1", "6", "2", "9"],
    ["7", "6", "2", "3", "4", "9", "1", "5", "8"],
    ["8", "1", "9", "2", "5", "6", "3", "7", "4"],
    ["2", "4", "5", "6", "8", "3", "7", "9", "1"],
    ["6", "7", "8", "9", "1", "5", "2", "4", "3"],
    ["9", "3", "1", "4", "2", "7", "8", "6", "5"],
    ["5", "8", "3", "7", "6", "4", "9", "1", "2"],
    ["4", "9", "7", "1", "3", "2", "5", "8", "6"],
    ["1", "2", "6", "5", "9", "8", "4", "3", "7"],
  ];

  // Função principal do jogo, ele serve para criar toda estrutura do sudoku, e os números que vão preencher o jogo.
  function iniciandoJogo() {
    for (let indice = 1; indice <= 9; indice++) {
      let numero = document.createElement("div");
      numero.id = indice;
      numero.innerText = indice;
      numero.classList.add("numero");
      numero.addEventListener("click", selecionaNumero);
      document.getElementById("digitos").appendChild(numero);
    }

    for (let linha = 0; linha < 9; linha++) {
      for (let coluna = 0; coluna < 9; coluna++) {
        let bordas = document.createElement("div");
        bordas.id = linha.toString() + "-" + coluna.toString();
        if (tabela[linha][coluna] != " ") {
          bordas.innerText = tabela[linha][coluna];
          bordas.classList = "celulaPreenchida";
        }
        if (tabela[linha][coluna] == " ") {
          acerto += 1;
        }

        if (linha == 2 || linha == 5) {
          bordas.classList.add("linhaDeMarcacao");
        }
        if (coluna == 2 || coluna == 5) {
          bordas.classList.add("colunaDeMarcacao");
        }
        bordas.classList.add("bordas");
        bordas.addEventListener("click", selecionaCelula);
        document.getElementById("tabela").append(bordas);
      }
    }
    console.log(acerto);
  }
  function selecionaNumero() {
    if (numeroSelecionado != null) {
      numeroSelecionado.classList.remove("selected");
    }
    numeroSelecionado = this;
    numeroSelecionado.classList.add("selected");
  }

  function selecionaCelula() {
    if (numeroSelecionado) {
      if (this.innerText != "") {
        return;
      }
      let coordenadas = this.id.split("-");
      let linha = parseInt(coordenadas[0]);
      let coluna = parseInt(coordenadas[1]);

      if (solucao[linha][coluna] == numeroSelecionado.id) {
        this.innerText = numeroSelecionado.id;
        this.classList.add("celulaPreenchida");
        acerto++;
      } else {
        erros = erros + 1;
        document.getElementById("erros").innerHTML = `Erros: ${erros}`;
      }
      if (erros == 3) {
        alert("Você perdeu! \nVocê será redirecionado para o menu!");
        document.location.reload();
      }
      if (acerto == 81) {
        alert("Acabou");
      }

      // Se o valor inserido pelo usuário for igual ao da tabela solução, ele ser
      // á preenchido, caso não o contador de erro irá subir.
    }
  }
</script>

<!-- HTML -->
<svelte:head>
  <link rel="stylesheet" href="../../styles/jogar.css" />
</svelte:head>
<div class="jogo">
  <h1>Sudoku</h1>

  <!-- Erros começará com 0 e será incrementado a cada erro -->
  <h2 id="erros">
    Erros: {erros}
  </h2>
  <p>3º erro = &#128128</p>
  <br />

  <!-- A tabela será gerada a partir do javascript -->
  <div id="tabela" />

  <!-- Os digitos será gerado a partir do javascript -->
  <div id="digitos" />
</div>
<br />
