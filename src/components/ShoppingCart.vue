<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6" v-for="(cartInfo, cIdx) in products" :key="cIdx">
                <div class="card mt-2">
                    <div class="card-body">
                    <div># {{ cartInfo.id + 1 }}
                        <span class="close_icon float-right mb-2">
                            <box-icon type='solid' name='message-square-x' v-on:click="onDelete(cIdx)"></box-icon>
                        </span>
                    </div>
                    <h5 class="pt-2 border-top"> {{ cartInfo.productName }} </h5>
                    <div>$ {{ cartInfo.price }}</div>
                    <div class="row card-footer" >
                        <div class="col-sm-6">
                            <span style="color:black" class="badge">{{cartInfo.quantity}}</span>
                            <div class="btn-group">
                                <div class="btn btn-outline-success" v-on:click="onIncrement(cIdx,10)">+</div>
                                <div class="btn btn-outline-success" v-on:click="onDecrement(cIdx,0)">-</div>
                            </div>
                        </div>
                        <!-- <div class="col-sm-6" style="text-align:end">
                            <router-link :to="`/product/${index + 1}`">Details</router-link>
                            <button  class="btn btn-primary">Buy Now</button>
                        </div> -->
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShoppingCart',
    data(){
        return {
            products: [
                {id:0,productName:"iPhone",price:8900,quantity:0},
                {id:1,productName:"Sony",price:4500,quantity:0},
                {id:2,productName:"Samsung",price:5700,quantity:0},
                {id:3,productName:"iPad",price:1200,quantity:0},
                {id:4,productName:"Dell",price:6500,quantity:0},
                {id:5,productName:"HP",price:3450,quantity:0},
            ]
        }
    },
    methods:{
        onIncrement: function(idx,maxVal){
            if(this.products[idx].quantity < maxVal)
                this.products[idx].quantity += 1; 
        },
        onDecrement: function(idx,minVal){
            if(this.products[idx].quantity > minVal)
                this.products[idx].quantity -= 1;
        },
        onDelete: function(idx){
            let allProducts=[...this.products];
            if(window.confirm("Are You Sure to Delete?")){
                allProducts.splice(idx,1);
                this.products=allProducts;
            } 
        },
    }
}
</script>