<template>
  <div>
    <NavbarTop />

    <div class="container centro">
      <br /><br />

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Score</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="session in Listasessions"
            :key="session.sessionId"
            v-on:click="editar(session.sessionId)"
          >
            <th scope="row">{{ session.sessionId }}</th>
            <td>{{ session.date }}</td>
            <td>{{ session.score }}</td>
            <td>{{ session.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <FooterBot />
  </div>
</template>
<script>
import NavbarTop from "@/components/NavbarTop";
import FooterBot from "@/components/FooterBot.vue";
import axios from "axios";
export default {
  name: "SessionHistoryComponent",
  data() {
    return {
      Listasessions: null,
      pagina: 1,
    };
  },
  components: {
    NavbarTop,
    FooterBot,
  },
  mounted: function () {
    let session = "http://solodata.es/pacientes?page=" + this.pagina;
    axios.get(session).then((data) => {
      this.Listasessions = data.data;
    });
  },
};
</script>
<style scoped>
.centro {
  text-align: center;
}
</style>
