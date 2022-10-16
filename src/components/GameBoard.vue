<script>
import CardView from "./CardView.vue";
export default {
  components: {
    CardView,
  },
};
</script>

<template>
  <div class="game-board">
    <p>I am the GameBoard.vue component</p>
    <ul class="cards">
      <li class="card">
        <CardView viewType="front" />
        <CardView viewType="back" />
      </li>
    </ul>
  </div>
</template>
