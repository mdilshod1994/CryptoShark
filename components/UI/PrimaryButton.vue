<template>
  <nuxt-link to="" class=" btn btn_big">
    <slot></slot>
  </nuxt-link>
</template>
<script>
export default {
  name: 'primary-btn',
};
</script>
<style>
.btn {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  padding: 0 25px;
  height: 47px;
  font-family: 'Golos';
  font-weight: 700;
  font-size: 14px;
  background: #6170EF;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #20212C;
}

.btn_big {
  padding: 0 50px;
  height: 56px;
  font-size: 13px;
}

.btn_small {
  height: 40px;
  font-size: 13px;
}

.btn_full {
  width: 100%;
}

.btn_blue {
  background: rgba(97, 112, 239, 0.15);
  color: #6170EF;
}

.btn_blue:hover {
  background: #6170EF;
  color: #fff;
}

@media only screen and (max-width: 575px) {
  .btn_big {
    padding: 0 30px;
  }
}
</style>