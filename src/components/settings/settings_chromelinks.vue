<template>
  <div class="menuR" id="chrome_settings">
    <div class="menu_title">
      <router-link to="/settings">
        <img class="back" src="/static/img/icon/menuback.png">
      </router-link>
      <img src="/static/img/icon/chrome16.png">
    </div>
    <button class="optionR" value="">
      <div id="menu_chrome_localurl_settings" class="option">SETTINGS</div>
    </button>
    <button class="optionR" value="">
      <div id="menu_chrome_localurl_history" class="option">HISTORY</div>
    </button>
    <button class="optionR" value="">
      <div id="menu_chrome_localurl_extensions" class="option">EXTENSIONS</div>
    </button>
  </div>
</template>

<script>

</script>

<style>
img.back {
    float: left;
    padding: 20px;
    margin: -20px;
}
#chrome_settings {
  z-index: 2;
}
</style>
