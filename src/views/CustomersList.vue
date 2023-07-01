<template>
    <div>
        <h4 class="border-bottom m-1 p-1">
            {{ txtPageTitle }}
            <span class="badge badge-secondary m-2"> {{ txtCustomersCount }} </span>
            <button class="btn btn-info" @click="btnRefresh">Refresh</button>
        </h4>
        <table class="table table-striped" align="center">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">City</th>                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cust,idx) in getCustArr" :key="idx">
                    <th scope="row">{{ cust.id }}</th>
                    <td>
                        <img :src="getCustImg(cust.photo)" alt="Customer" class="cust_img"/>
                    </td>
                    <td>{{ cust.name }}</td>
                    <td :class="(getCustPhone(cust.phone) == 'No Phone') ? 'bg-warning text-center' : ''">{{ getCustPhone(cust.phone) }}</td>
                    <td>{{ cust.city }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
import { displayPageInfo } from '../assets/scripts/common';
import { eventBus } from '../main';

export default {
    name: "CustomersList",    
    data() {
        return {
            txtPageTitle: "Customers",
            txtCustomersCount: 0,
            getCustArr: [],
        }
    },
    created() {
        this.getCustomersInfo();
    },
    mounted(){
        eventBus.$on("isRefresh",()=>{
            this.getCustomersInfo();
        });
    },
    destroyed(){
        eventBus.$off("isRefresh");
    },
    methods: {
        btnRefresh: function () {
            this.getCustomersInfo();
        },
        getCustomersInfo: function () {
            displayPageInfo("get", "/getcustomers").then(response => {
                if (response.status == 200) {
                    this.txtCustomersCount = Object.keys(response.data).length;
                    this.getCustArr = response.data;
                }
                else {
                    alert(response.data);
                }
            })
            .catch(error => {
                console.error(error);
            });
        },
        getCustPhone: function(custPhn){
            return ((custPhn == null) || (custPhn == "")) ? "No Phone" : custPhn;
        },
        getCustImg: function(getImg) {
            return (getImg != "") ? axios.defaults.baseURL + getImg.toString() : "https://i.postimg.cc/MK40pk3p/bear.jpg";
        },
    }
}
</script>