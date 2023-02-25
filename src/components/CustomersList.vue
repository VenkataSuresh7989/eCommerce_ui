<template>
	<div class="row">
		<div class="col-lg-12">
			<h4 class="border-bottom m-1 p-1">{{pageTitle}}
                <span class="btn btn-secondary badge badge-light m-2">
                    {{customersCount}}
                </span>
                <button class="btn btn-info" v-on:click="onRefresh()">Refresh</button>
            </h4>
			<div class="cust_table">
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Customer Name</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(cust,custIdx) in customers" :key="custIdx">
							<td>{{ cust.id + 1 }}</td>
							<td> <img :src="cust.photo" alt="customer" />
								<div>
									<button class="btn btn-sm btn-secondary" v-on:click="changePicture(custIdx)">Change Picture</button>
								</div>
							</td>
							<td>{{ cust.name }}</td>
							<td :class="( cust.phone == '' || cust.phone == null )  ? 'bg-warning text-center' : ''">{{ ( cust.phone == "" || cust.phone == null ) ? "No Phone" : cust.phone }}</td>
							<td>{{ cust.address.phone }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: "CustomersList",
  data() {
    return {
      pageTitle: "Main Content",
      customersCount: 5,
      customers: [
        {
          id: 0,
          name: "Suresh",
          phone: "7989586850",
          address: { city: "Visakhapatnam" },
          photo: "https://picsum.photos/id/1010/60",
        },
        {
          id: 1,
          name: "Venkat",
          phone: "1234567890",
          address: { city: "Vijayawada" },
          photo: "https://picsum.photos/id/1011/61",
        },
        {
          id: 2,
          name: "Gopi",
          phone: "7412580369",
          address: { city: "Srikakulam" },
          photo: "https://picsum.photos/id/1012/62",
        },
        {
          id: 3,
          name: "Hari",
          phone: "",
          address: { city: "Anakapalli" },
          photo: "https://picsum.photos/id/1013/63",
        },
        {
          id: 4,
          name: "Prasanth",
          phone: "75321054896",
          address: { city: "Bheemili" },
          photo: "https://picsum.photos/id/1014/64",
        },
      ],
    };
  },
  methods: {
    onRefresh: function () {
      console.log("Button was clicked.");
    },
    changePicture: function (custIdx) {
      this.customers[custIdx].photo = "https://picsum.photos/id/1015/62";
    },
  },
};
</script>