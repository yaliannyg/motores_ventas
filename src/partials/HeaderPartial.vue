<template>
  <header class="header_area header_padding">
    <!--header top start-->
    <div class="header_top">
      <div class="container">
        <div class="top_inner">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="follow_us">
                <label>Siguenos:</label>
                <ul class="follow_link">
                  <li>
                    <a href="#">
                      <i class="ion-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-social-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div v-if="user.email" class="top_right text-right">
                <ul>
                  <li class="top_links">
                    <a href="#">
                      <i class="ion-android-person"></i> Mi Cuenta
                      <i class="ion-ios-arrow-down"></i>
                    </a>
                    <ul class="dropdown_links">
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="my-account.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Favoritos</a>
                      </li>
                    </ul>
                  </li>
                  <li class="currency">
                    <a href="#">
                      $ USD
                      <i class="ion-ios-arrow-down"></i>
                    </a>
                    <ul class="dropdown_currency">
                      <li>
                        <a href="#">USD – Dolar</a>
                      </li>
                      <li>
                        <a href="#">Bs – Bolivares</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div v-else class="top_right text-right">
                <ul>
                  <li class="top_links">
                    <router-link to="/login">
                      <i class="ion-android-person"></i>
                      Login
                    </router-link>
                  </li>
                  <li class="currency">
                    <a href="#">
                      $ USD
                      <i class="ion-ios-arrow-down"></i>
                    </a>
                    <ul class="dropdown_currency">
                      <li>
                        <a href="#">USD – Dolar</a>
                      </li>
                      <li>
                        <a href="#">Bs – Bolivares</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--header top start-->

    <!--header middel start-->
    <div class="header_middle">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-3">
            <div class="logo">
              <a href="index.html">
                <img src="assets/img/logo/logo-mv.png" alt="MotoresVentas" />
              </a>
            </div>
          </div>
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
        </div>
      </div>
    </div>
    <!--header middel end-->

    <!--mini cart-->
    <div class="mini_cart">
      <div class="cart_close">
        <div class="cart_text">
          <h3>cart</h3>
        </div>
        <div class="mini_cart_close">
          <a href="javascript:void(0)">
            <i class="ion-android-close"></i>
          </a>
        </div>
      </div>
      <div class="cart_item">
        <div class="cart_img">
          <a href="#">
            <img src="assets/img/s-product/product.jpg" alt />
          </a>
        </div>
        <div class="cart_info">
          <a href="#">JBL Flip 3 Splasroof Portable Bluetooth 2</a>

          <span class="quantity">Qty: 1</span>
          <span class="price_cart">$60.00</span>
        </div>
        <div class="cart_remove">
          <a href="#">
            <i class="ion-android-close"></i>
          </a>
        </div>
      </div>
      <div class="cart_item">
        <div class="cart_img">
          <a href="#">
            <img src="assets/img/s-product/product2.jpg" alt />
          </a>
        </div>
        <div class="cart_info">
          <a href="#">Koss Porta Pro On Ear Headphones</a>
          <span class="quantity">Qty: 1</span>
          <span class="price_cart">$69.00</span>
        </div>
        <div class="cart_remove">
          <a href="#">
            <i class="ion-android-close"></i>
          </a>
        </div>
      </div>
      <div class="mini_cart_table">
        <div class="cart_total">
          <span>Sub total:</span>
          <span class="price">$138.00</span>
        </div>
        <div class="cart_total mt-10">
          <span>total:</span>
          <span class="price">$138.00</span>
        </div>
      </div>

      <div class="mini_cart_footer">
        <div class="cart_button">
          <a href="cart.html">View cart</a>
        </div>
        <div class="cart_button">
          <a class="active" href="checkout.html">Checkout</a>
        </div>
      </div>
    </div>
    <!--mini cart end-->

    <!--header bottom satrt-->
    <div class="header_bottom bottom_four sticky-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="main_menu header_position">
              <nav>
                <ul>
                  <li>
                    <router-link to="/">home</router-link>
                  </li>
                  <li class="mega_items">
                    <a href="shop-right-sidebar.html">
                      Repuestos
                      <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="mega_menu">
                      <ul class="mega_menu_inner">
                        <li>
                          <a href="#">Mecánica</a>
                          <!-- <ul>
                                                        <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                        <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                        <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                        <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                        <li><a href="shop-list.html">List View</a></li>
                          </ul>-->
                        </li>
                        <li>
                          <a href="#">Suspensión</a>
                        </li>
                        <li>
                          <a href="#">Carrocería</a>
                        </li>
                        <li>
                          <a href="#">Tren delantero</a>
                        </li>
                        <li>
                          <a href="#">Partes Eléctricas</a>
                        </li>
                        <li>
                          <a href="#">Accesorios</a>
                        </li>
                      </ul>
                      <div class="banner_static_menu">
                        <a href="shop-right-sidebar.html">
                          <img src="assets/img/bg/banner1.jpg" alt />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">Vender</a>
                  </li>
                  <li>
                    <router-link to="/register">Crea tu cuenta</router-link>
                  </li>
                  <li>
                    <a href="contact.html">Registro</a>
                  </li>
                  <li>
                    <a href="contact.html">Sobre Nosotros</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--header bottom end-->
    <div class="discount_area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="discount_text">
              <p>
                15% de descuento navideño
                <a href="#">¡Compra ahora!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style>
</style>