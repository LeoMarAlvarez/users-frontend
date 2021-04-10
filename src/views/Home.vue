<template>
  <div class="mx-auto container">
    <router-link class="btn btn-primary float-right mb-2 mr-5" to="/form">Nuevo</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usuarios" v-bind:key="user.id">
          <td>{{ user.nombre }}</td>
          <td>{{ user.apellido }}</td>
          <td>{{ user.usuario }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link class="btn btn-success btn-xs m-1" v-bind:to="'/form/'+user.id">Editar</router-link>
            <button class="btn btn-danger" @click="destroy(user.id)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;
// axios.defaults.headers.common["Access-Control-Allow-Origin"]="*";

export default {
  name: "Home",
  components: {
  },
  data(){
    return {
      usuarios:[]
    }
  },
  mounted(){
    axios.get("sanctum/csrf-cookie")
    .then(()=>{
      this.getUsers();
    });
  },
  methods:{
    getUsers(){
      axios.get("api/users")
        .then(res => {
          this.usuarios=res.data;
        })
    },
    destroy(id){
      if(confirm("Desea eliminar "+id))
      {
        axios.delete("api/users/"+id)
          .then(res=>{
            if(res.statusText==="OK")
            {
              this.getUsers()
            }
          });
      }
    }
  }

};
</script>
