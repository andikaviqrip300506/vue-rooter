<template>
    <div v-if="detail == undefined">
        <center><h1>404 NOT FOUND</h1></center>
    </div>
    <div v-else> 
       <center><img class="img" :src="getImgSrc(detail.img)" alt=""> 
    <h1> Detail {{ detail.nama }}</h1>
    <h4> {{ detail.ket }}</h4>
    <h4> harga <font color="green">{{ detail.harga }} </font></h4>

 </center>
    </div>
    
</template>

<script>
import { produk } from '@/assets/Produk.js'


export default {
    props: [
        "id_produk"
    ],
    setup(props) 
    {

        const getImgSrc = (imgFileName) => {
            return '../src/assets/image/' + imgFileName + '';
        };

        const detail = produk ["produk"].find(function (item) {
            return item.id == props.id_produk
        });
        return {
            detail,
            getImgSrc
        }
    }
} 
</script>
<style>

.img {
width: 150px;
margin-top: 50px;

}
</style>