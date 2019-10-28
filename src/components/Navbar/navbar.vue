<template src="./template.html"></template>
<style src="./style.css" scoped></style>

<script>
    export default {
        data(){
            return {
                msg: 'Navbar',
                active: "search",
                showInput: false,
                rotate: "fa-rotate-90",
                showMegaMenu: false,
                showhideinput: 'show-hide-input'
            }
        },
        methods: {
            uros(){
                if(this.showInput){
                    this.showInput = false;
                    this.active = "search";
                    this.showhideinput = 'show-hide-input';
                    this.rotate = "fa-rotate-90";
                } else {
                    this.showInput = true;
                    this.active = "search-active";
                    this.rotate = "fa-search-closed";
                    this.showhideinput = 'show-hide-input2';
                }
            },
            ShowMega() {
                if(this.showMegaMenu){
                    this.showMegaMenu = false;
                }
                else{
                    this.showMegaMenu = true;
                }
            }
        }
    }
</script>
