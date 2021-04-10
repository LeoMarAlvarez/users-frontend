<template lang="html">
  <div class="container text-left">
    <form @submit.prevent="sendUsuario()" class="row">
      <div class="col-8">
        <label class="label-form">Apellido</label>
        <input type="text" v-model="usuario.apellido" name="apellido" class="form-control">
      </div>
      <div class="col-8">
        <label class="label-form">Nombre</label>
        <input type="text" v-model="usuario.nombre" name="nombre" class="form-control">
      </div>
      <div class="col-8">
        <label class="label-form">Email</label>
        <input type="email" v-model="usuario.email" name="email" class="form-control">
      </div>
      <div class="col-6">
        <label class="label-form">Usuario</label>
        <input type="text" v-model="usuario.usuario" name="usuario" id="" class="form-control">
      </div>
      <div class="container mt-2">
        <button class="btn btn-primary m-1">Guardar</button>
        <router-link class="btn btn-secondary m-1" to="/">Cancelar</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      usuario:{
        apellido:null,
        nombre:null,
        email:null,
        usuario:null
      },
      id:null
    }
  },
  mounted(){
    if(this.$route.params.id)
    {
      this.id = this.$route.params.id;
      axios.get("api/users/"+this.id)
        .then(res =>{
          this.usuario=res.data;
        })
        .catch(err => console.log(err));
    }
  },
  methods:{
    sendUsuario(){
      if(this.id===null)
      {
        axios.post("api/users",this.usuario);
      }else{
        axios.put(`api/users/${this.id}`,this.usuario)
          .catch(err => console.log(err));
      }
      this.$router.push("/");
    }
  }
}
</script>
