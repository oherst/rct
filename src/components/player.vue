<template>
  <div class="player">

    <div class="shirt">
      <div class="number">
        {{ player.formation_place }}
      </div>
      <img class="shirt-img" src="/img/player-shirt.png">
    </div>

    <div class="player-name">
      {{ player.name }}
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'player'
  ]
}
</script>

<style lang="scss" scoped>
.player {
  width: 100%;
  text-align: center;
}

.shirt {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 90px;
}

.number {
  position: absolute;
  z-index: 1;
  font-size: 24px;
}

.shirt-img {
  position: relative;
  width: 100%;
}

.player-name {
  margin-top: 5px;
}
</style>
