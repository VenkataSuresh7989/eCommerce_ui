<template>
    <div>
        <div class="container-fluid">
        <h5>Shoppinig Cart</h5>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 pl-2 pr-2" v-for="(prod,pIdx) in productsArr" :key="pIdx">
                <div class="card">
                    <div class="card-body">
                        <!-- <div class="text-muted"># {{ prod.id }}
                            <span class="close_icon float-right mb-2">
                                <box-icon type='solid' name='message-square-x' v-on:click="onDelete(pIdx)"></box-icon>
                            </span>
                        </div> -->
                        <a @click="isDetailView">
                        <figure class="prodImg"><img src="https://i.postimg.cc/KjKVtz81/toy.jpg" alt="Customer"/></figure>
                        
                        <h5 class="pt-1">{{ prod.product_name }}</h5>
                        <div class="mb-2"><font-awesome-icon :icon="['fas', 'indian-rupee-sign']" />{{ prod.price }}</div>
                        </a>
                        <div class="row card-footer prodInfo">
                            <div class="col-4 p-0 text-center">
                                <div class="btn-group">
                                    <div class="pr-2">Qty: </div>
                                    <div class="btn btn-outline-success" v-on:click="onIncrement(pIdx,10)">+</div>
                                    <div class="qty"><span style="color:black" class="badge">{{prod.quantity}}</span></div>
                                    <div class="btn btn-outline-success" v-on:click="onDecrement(pIdx,0)">-</div>                                    
                                </div>                                
                            </div>
                            <!-- <div class="col-sm-3 price">
                                <span>Amount  : <em> {{getTotalAmount(prod.price,prod.quantity)}}</em></span>
                            </div> -->
                            <div class="col-8" style="text-align:end">
                                <!-- <router-link :to="`/product/${index + 1}`">Details</router-link> -->
                                <button  class="btn add_cart mr-2"><font-awesome-icon :icon="['fas', 'cart-plus']" /></button>
                                <button  class="btn buy_now">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { displayPageInfo } from '../assets/scripts/common';
import { eventBus } from '../main';
import ModalService from '../modules/modals/services/modal.service';
import InformationMessage from '../views/modals/InformationMessage.vue';
export default {
    name:"ShoppingCart",
    data(){
        return {
            productsArr:[],
        }
    },
    created(){
        this.getProductInfo();
    },
    mounted() {
        eventBus.$on("isRefresh",()=>{
            this.getProductInfo();
        });
    },
    destroyed(){
        eventBus.$off("isRefresh");
    },
    methods:{
        getProductInfo: function() {
            displayPageInfo("get", "/getProductinfo").then(response => {
                if (response.status == 200) {
                    this.productsArr = response.data;
                }
                else {
                    ModalService.open(InformationMessage,  [{msgTitle:"Information Message", msgInfo:response.data}]);
                }
            })
            .catch(error => {
                console.error(error);
            });
        },
        onIncrement: function(idx,maxVal){
            if(this.productsArr[idx].quantity < maxVal)
                this.productsArr[idx].quantity += 1; 
        },
        onDecrement: function(idx,minVal){
            if(this.productsArr[idx].quantity > minVal)
                this.productsArr[idx].quantity -= 1;
        },
        onDelete: function(idx){
            let allProducts=[...this.productsArr];
            if(window.confirm("Are You Sure to Delete?")){
                allProducts.splice(idx,1);
                this.productsArr=allProducts;
            } 
        },
        getTotalAmount: function(prodPrice,prodQuant){
            return (parseFloat(prodPrice) * parseInt(prodQuant));
        },
        isDetailView: function(){
            console.log("Detal page");
            this.$router.push("/detailview");
        }
    }
}
</script>