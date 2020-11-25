<template>
    <div class="proBoxContainer">
        <product v-for="(product,index) in products" :key="index" :product="product" @add="$emit('add', product)"></product>
    </div>
</template>

<script>
import product from '../components/product'

export default {
    props:['products'],
    components:{
        product
    }
}
</script>

<style>
    .proBoxContainer{
        margin: 0;
    }
</style>