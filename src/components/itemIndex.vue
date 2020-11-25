<template>
    <div class="indexContainer">
        <productsBox :products="products" @add="addItems"></productsBox>
        <cartBox :cartItems="cartItems" :total="total" @reset="resetItems"></cartBox>
    </div>
</template>

<script>
import productsBox from '../components/productsBox'
import cartBox from '../components/cartBox'

export default {
    props:['products'],
    components:{
        productsBox,
        cartBox
    },
    data(){
        return{
            cartItems:[],
            total: 0
        }
    },
    methods:{
        addItems(product){
            let isFounded = false;
            let cartIndex;
            const TAX = 8;
            const addTax = (price, tax) => price / 100 * (100 + tax);

            this.total += addTax(product.price, TAX);

            for (let i=0; i<this.cartItems.length; i++) {
                if (this.cartItems[i].name === product.name) {
                    isFounded = true;
                    cartIndex = i;
                    break;
                }
            }

            if (isFounded) {
                this.cartItems[cartIndex].quantity++;
            } else {
                this.cartItems.push({name: product.name, price: product.price, quantity: 1});
            }
        },
        resetItems(){
            this.cartItems = [];
            this.total =0;
        },
    }
}
</script>

<style>
    .indexContainer{
        display: flex;
        justify-content: center;
    }
</style>