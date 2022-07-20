<template>
  <div>
    <h1>{{Username}} Profile Component</h1>
  </div>
</template>

<script>
import {useRoute} from 'vue-router';
export default {
    name:'ProfileComponent',
    data(){
        return{
        Username:'',
        }
    },
    mounted(){
        const route = useRoute();
        console.warn("route", route.params.name);
        console.warn("router full", route.params);
        this.Username = route.params.name;
    }
};
</script>

<style></style>
