<template src="./template.html"></template>
<style src="./style.css" scoped></style>

<script>
import SalesLastMonth from '../../SalesLastMonth';
    export default {
        data()   {
            return{
                datacollection: null,
            }
        },
        components: {
            SalesLastMonth,
        }
    }
</script>