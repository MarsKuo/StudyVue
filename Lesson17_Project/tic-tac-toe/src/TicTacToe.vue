<template>
<div class="app">
  <div class="board">
    <div
        class="grid"
        v-for="(grid,idx) in grids"
        :key="grid.id"
        @click="setGrid(idx)"
      >
        {{getSymbol(grid)}}
     </div>
    <div class="info">
      <span>Player: {{getSymbol(player)}}</span><br>
      <span>Winer: {{getSymbol(winner)}}</span>
      <br>
      <button @click="reset">Reset</button>
    </div>
  </div>

</div>
</template>

<script>
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
export default {
  data() {
    return {
      winner: 0,
      player: 1,
      grids: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  computed: {
    winner() {
      return lines.reduce((winner, [a, b, c]) => {
        if (winner !== 0) return winner;
        const sum = this.grids[a] + this.grids[b] + this.grids[c];
        if (sum === 3) return 1;
        if (sum === -3) return -1;
        return 0;
      }, 0);

      // for (let i = 0; i < 8; i++) {
      //   const line = lines[i];
      //   const [a, b, c] = line;
      //   const sum = this.grids[a] + this.grids[b] + this.grids[c];
      //   if (sum === 3) return 1;
      //   if (sum === -3) return -1;
      // }
      // return 0;
    }
  },
  methods: {
    setGrid(idx) {
      if (this.grids[idx] !== 0) return;
      if (this.winner !== 0) return;
      //this.grids[idx] = 1;
      //Vue.set(this.grids,idx,1)
      // 等同於
      this.$set(this.grids, idx, this.player);
      this.player = -this.player;
      // this.winner = this.getWinner();
    },
    getSymbol(num) {
      return num === 0 ? "" : num === 1 ? "O" : "X";
    },
    // getWinner() {
    //   return lines.reduce((winner, [a, b, c]) => {
    //     if (winner !== 0) return winner;
    //     const sum = this.grids[a] + this.grids[b] + this.grids[c];
    //     if (sum === 3) return 1;
    //     if (sum === -3) return -1;
    //     return 0;
    //   }, 0);

    //   // for (let i = 0; i < 8; i++) {
    //   //   const line = lines[i];
    //   //   const [a, b, c] = line;
    //   //   const sum = this.grids[a] + this.grids[b] + this.grids[c];
    //   //   if (sum === 3) return 1;
    //   //   if (sum === -3) return -1;
    //   // }
    //   // return 0;
    // },
    reset() {
      this.grids = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      // this.winner = 0;
      this.player = 1;
    }
  }
};
</script>

<style>
.board {
  display: flex;
  flex-flow: row wrap;
  width: 400px;
  height: 400px;
  align-content: flex-start;
}
.grid {
  width: 33%;
  height: 33%;
  border: 1px solid gray;
  box-sizing: border-box;
  font-size: 60px;
  text-align: center;
  line-height: 130px;
}
.info {
  font-size: 40px;
}
</style>
