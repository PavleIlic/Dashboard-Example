<template src="./template.html"></template>
<style src="./style.css" scoped></style>

<script>
import Sidebar from '../../components/Sidebar/sidebar';
import Navbar from '../../components/Navbar/navbar';
import Analytics from '../../components/Analytics/Analytics';
import SalesLast from '../../components/SalesLastMonth/SalesLast';
import SalesIncome from '../../components/SalesIncome/SalesIncome';
import LastMonth from '../../components/LastMonthSales/LastMonth';
import TotalRevenue from '../../components/TotalRevenue/TotalRevenue';
import DynamicTables from '../../components/DynamicTables/DynamicTables';

    export default {
        data(){
            return {
            }
        },
        components: {
            Sidebar,
            Navbar,
            Analytics,
            SalesLast,
            SalesIncome,
            LastMonth,
            TotalRevenue,
            DynamicTables,
        }
    }
</script>

