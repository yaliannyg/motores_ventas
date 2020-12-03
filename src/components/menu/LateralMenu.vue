<template>
  <div>
    <b-nav vertical class="vertical-menu">
      <!-- <b-nav-item disabled> <img src="http://192.168.0.106:8888/uploads/file-1606928053719Yalianny_Gonzalez.jpg" alt="" class="bourder-rounded" width="50px"> Yalianny Gonzalez</b-nav-item> -->

      <b-nav-item to="/dashboard/">
        <i class="fas fa-user"></i>
        <span>Perfil de Usuario</span>
      </b-nav-item>
      <b-nav-item to="/dashboard/ratio">
        <i class="fas fa-map-marker-alt"></i>
        <span>Radio de Busqueda</span>
      </b-nav-item>
      <b-nav-item to="/dashboard/garage">
        <i class="fas fa-car"></i>
        <span>Garaje</span>
      </b-nav-item>
      <b-nav-item to="/dashboard/terms-conditions">
        <i class="fas fa-user-shield"></i>
        <span>Terminos y Condiciones</span>
      </b-nav-item>
      <b-nav-item to="dashboard/privacy">
        <i class="fas fa-user-secret"></i>
        <span>Politica de Privacidad</span>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
i {
  margin: 0.5rem;
}
// a {
//   display: flex;
//   border: 1px solid #333;
//   margin: .25rem;
//   border-radius: .25rem;
//   padding: 0;

//   // flex-direction: column;
//   span {
//     // margin-left: auto;
//     margin:auto;

//   }
// }
</style>>

