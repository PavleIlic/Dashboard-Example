<template src="./template.html"></template>
<style src="./style.css" scoped></style>

<script>
    export default {
        data(){
            return {
                msg: 'Sidebar',
                toggle: true,
                tgDashboard: true,
                active: 'dashboard_active'
            }
        },
        methods: {
            toggleSidebar() { 
                
                if(this.toggle){
                    this.toggle = false;
                }else{
                    this.toggle = true;    
                }
            },
            toggleDashboard(){
                if(this.tgDashboard){
                    this.tgDashboard = false;
                    this.active = 'dashboard';
                }else {  
                    this.tgDashboard = true;
                     this.active = 'dashboard_active';
                }
            },
            
        }
    }
</script>
