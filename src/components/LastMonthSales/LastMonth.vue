<template src="./template.html"></template>
<style src="./style.css" scoped></style>

<script>
import LastMonth from '../../LastMonth.js';
    export default {
        data(){
            return{
                datacollection: null,
            }
        },
        components: {
            LastMonth,
        }
    }
</script>

