<template>
  <div class="container" :style="cssProps">
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
              <li v-if="!user.email">
                <router-link to="/signup">Crea tu cuenta</router-link>
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
</template>

<script>
export default {
  name: "MainMenu",
  props: ["user", "color"],
  computed: {
    cssProps() {
      return {
        "--color": this.color? this.color: "#ed981a"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.main_menu {
  & nav {
    & > ul {
      & > li {
        &:hover {
          & > a {
            // color: $secondary_color;
            color: var(--color);
          }
        }
      }
    }
  }
}
</style>>

