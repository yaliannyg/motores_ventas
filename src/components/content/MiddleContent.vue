<template>
  <div class="col-lg-9 col-md-9">
    <div class="middel_right">
      <div class="search-container">
        <form action="#">
          <div class="search_box">
            <input
              placeholder="Escribe la característica de tu repuesto o marca de tu vehículo"
              type="text"
            />
            <button type="submit">
              <i class="ion-ios-search-strong"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="middel_right_info">
        <div class="header_wishlist">
          <a href="wishlist.html">
            <span class="lnr lnr-heart"></span> Favoritos
          </a>
          <span class="wishlist_quantity">3</span>
        </div>
        <div class="mini_cart_wrapper">
          <a href="javascript:void(0)">
            <span class="lnr lnr-envelope"></span>Buzón
          </a>
          <span class="cart_quantity">2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
</style>