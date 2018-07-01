<template>
  <div class="zz">
    <div class="spinner">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.zz {
    position: fixed;
    background: #ccc;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.35;
    z-index: 1005;
}
.spinner {
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;
  position: absolute;
  text-align: center;
  z-index: 1006;
  animation: sk-rotate 2.0s infinite linear;
}

.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 50%;
  background-color: #333;
  border-radius: 100%;
  z-index: 1007;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  animation-delay: -1.0s;
}

@keyframes sk-rotate { 100% { transform: rotate(360deg); }}


@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
}
</style>

