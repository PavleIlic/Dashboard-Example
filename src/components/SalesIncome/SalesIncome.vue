<template src="./template.html"></template>
<style src="./style.css" scoped></style>

<script>
    import SalesIncome from '../../SalesIncome'
    
    
    export default {
        data() {
            return {
                datacollection: null,
            }
        },
        components: {
            SalesIncome,
        }
    }
</script>