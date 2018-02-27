<template>
  <div class="menuR" id="grapplr_settings" style="right: -10px;">
    <div class="menu_title">
      <router-link to="/settings">
        <img class="back" src="/img/icon/menuback.png">
      </router-link>
      SETTINGS
    </div>
    <button class="optionR" value="customize">CUSTOMIZATION</button>
    <button class="optionR" value="time_and_clock">TIME AND CLOCK</button>
    <button class="optionR">Nothing</button>
    <button class="optionR">Still nothin</button>
  </div>
</template>

<style>
img.back {
    float: left;
    padding: 20px;
    margin: -20px;
}
#grapplr_settings {
  z-index: 2;
}
</style>
