<template>
  <div>
    <b-nav vertical class="vertical-menu">
      <!-- <b-nav-item disabled> <img src="http://192.168.0.106:8888/uploads/file-1606928053719Yalianny_Gonzalez.jpg" alt="" class="bourder-rounded" width="50px"> Yalianny Gonzalez</b-nav-item> -->

      <b-nav-item to="/dashboard/">
        <i class="fas fa-user"></i>
        <span>Perfil de Usuario</span>
      </b-nav-item>
      <!-- <b-nav-item to="/dashboard/ratio">
        <i class="fas fa-map-marker-alt"></i>
        <span>Radio de Busqueda</span>
      </b-nav-item> -->
      <b-nav-item to="/dashboard/garage">
        <i class="fas fa-car"></i>
        <span>Garaje</span>
      </b-nav-item>
      <b-nav-item  @click="showCondiciones=!showCondiciones">
        <i class="fas fa-user-shield"></i>
        <span>Terminos y Condiciones</span>
      </b-nav-item>
      <b-nav-item to="/privacy">
        <i class="fas fa-user-secret"></i>
        <span>Politica de Privacidad</span>
      </b-nav-item>
    </b-nav>
    <basic-modal
      :show="showCondiciones"
      @modal-basic="showCondiciones = !showCondiciones"
      :aceptar="true"
      :text="textTerminosCondiciones"
      :title="'Términos y Condiciones'"
       @condiciones="showCondiciones = !showCondiciones"
    ></basic-modal>
  </div>
</template>

<script>
import BasicModal from "@/components/BasicModal"
export default {
  components:{
    BasicModal
  },
  data (){
    return {
      showCondiciones: false,
      textTerminosCondiciones:
        '1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis. 2. Support for Expo services is only available in English, via e-mail. 3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service. 4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you. 1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis. 2. Support for Expo services is only available in English, via e-mail. 3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service. 4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you. 1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis. 2. Support for Expo services is only available in English, via e-mail. 3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service. 4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.'
    }
  }
};
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

