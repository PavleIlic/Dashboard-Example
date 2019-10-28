<template src="./template.html"></template>
<style src="./style.css" scoped></style>


<script>
import TotalRevenue from '../../TotalRevenue.js';
    export default {
        data(){
            return{
                datacollection: null,
            }
        },
        components: {
            TotalRevenue,
        }
    }
</script>
