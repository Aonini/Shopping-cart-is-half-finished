<template>
    <div @click="aa">
         <router-view/>
    </div>
   
</template>


<script>

import axios from 'axios'

export default {
    methods : {
        async aa(){
        let data = await axios.get('http://localhost:5000/api/shop_skus') ;
        console.log(data)
        }
    }
}
</script>




 