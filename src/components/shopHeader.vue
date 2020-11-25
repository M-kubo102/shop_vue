<template>
    <div class="headContainer">
        <router-link to="/" class="title">Shopping_Application</router-link>
        <ul class="headMenu">
            <router-link to="/about"><li>About</li></router-link>
        </ul>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style>
    .headContainer{
        background: #ff6347;
        display: flex;
        height: 60px;
    }

    .headContainer .title{
        margin: 0 10px;
        font-family: Monotype Corsiva;
        line-height: 60px;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        font-size: 32px;
        font-weight: bold;
    }

    .headMenu{
        display: flex;
        list-style: none;
        margin: 0px;
    }

    .headMenu li{
        margin: 0 5px;
        font-size: 16px;
        line-height: 60px;
        width: 70px;
        text-align: center;
        cursor: pointer;
        transition: .2s;
    }

    .headMenu li:hover{
        background: #ffa493;
    }

    .headMenu a{
        text-decoration: none;
        color: #fff;
    }
</style>