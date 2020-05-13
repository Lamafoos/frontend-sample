<template>
  <v-app>
    <v-content>
      <v-row class="ml-4">
        <v-col cols="6">
          <v-container>
            <v-row>
              <h2 class="blue--text pt-1">All invoices - 2016</h2>
              <v-spacer></v-spacer>
              <v-select
                solo
                flat
                class="filt-selector pr-0"
                v-model="filter"
                append-icon="mdi-dots-horizontal"
                :items="filters"
              >
              </v-select>
            </v-row>

            <v-row>
              <v-card class="left-section" min-width="100%" max-height="100vh">
                <v-card-title class="pb-1"> Invoices </v-card-title>

                <v-data-table
                  :search="filter"
                  :headers="headers"
                  :items="users"
                  :header-props="{ sortIcon: `mdi-menu-down` }"
                  single-select
                  item-key="name"
                  @click:row="openCard"
                  width="100%"
                >
                </v-data-table>
              </v-card>
            </v-row>
          </v-container>
        </v-col>

        <v-col class="pr-0 right-section" cols="6">
          <v-container>
            <v-row justify="end">
              <div class="white mr-6">
                <v-menu offset-y>
                  <template v-slot:activator="{ on: { click } }">
                    <v-btn v-on:click="click" icon tile x-large>
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      link
                      v-for="(link, index) in links"
                      :key="index"
                    >
                      <v-list-item-title> {{ link.name }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-row>

            <v-row justify="center">
              <v-card v-if="this.cardOpen" width="50%">
                <v-img
                  height="150px"
                  src="https://www.thispersondoesnotexist.com/image"
                ></v-img>
                <v-card-title class="blue--text pb-2">
                  {{ this.selectedInvoice.account }}
                </v-card-title>
                <v-row>
                  <v-col cols="5" class="pt-0">
                    <v-card-text class="py-0">
                      <div class="overline font-weight-medium">TYPE</div>
                      <div class="pb-2">{{ this.selectedInvoice.type }}</div>
                      <div class="overline font-weight-medium">STATUS</div>
                      <div class="pb-2">{{ this.selectedInvoice.status }}</div>
                      <div class="overline font-weight-medium">BALANCE</div>
                      <div>{{ this.selectedInvoice.balance }}</div>
                    </v-card-text>
                  </v-col>
                  <v-col class="pt-0">
                    <v-card-text class="py-0 my-0">
                      <div class="overline font-weight-medium">ACCOUNT</div>
                      <div class="pb-2">{{ this.selectedInvoice.account }}</div>
                      <div class="overline font-weight-medium">CURRENCY</div>
                      <div class="pb-2">
                        {{ this.selectedInvoice.currency }}
                      </div>
                      <div class="overline font-weight-medium">NOTES</div>
                      <div>Lorem ipsum dolor sit, amet consectetur elit.</div>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
            <v-row v-if="cardOpen" justify="center" class="pt-2">
              <v-btn text @click="closeCard">
                <v-icon large class=" white--text">mdi-close</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      filter: " ",
      cardOpen: false,
      selectedRow: "",
      selectedInvoice: {},
      users: this.$store.getters.invoices,
      links: this.$store.getters.links,
      headers: [
        { text: "Type", align: "left", value: "type" },
        { text: "Account Name", value: "account" },
        { text: "Status", value: "status" },
        { text: "Currency", value: "currency" },
        { text: "Balance", value: "balance" }
      ],
      filters: [
        { text: "Checking", value: "Checking" },
        { text: "Active", value: "Active" },
        { text: "Deactive", value: "Deactivated" },
        { text: "Euro", value: "EUR" },
        { text: "Dollar", value: "USD" },
        { text: "No filter", value: "" }
      ]
    };
  },
  methods: {
    openCard: function(item, row) {
      row.select(true);
      this.selectedRow = row;
      this.selectedInvoice = item;
      this.cardOpen = true;
    },
    closeCard: function() {
      this.cardOpen = false;
      this.selectedRow.select(false);
    }
  }
};
</script>

<style>
.right-section {
  background-image: url("./assets/towers.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 4px;
}
.data-table {
  overflow: none;
}
.v-data-table td {
  height: 32px !important;
}
.v-data-table__selected td:first-of-type {
  border-left: 3px solid #2196f3 !important;
  padding-left: 13px;
}
.card-title {
  color: #2196f3;
}
tbody :hover {
  cursor: pointer;
}
.v-list,
.v-menu__content {
  border-top-right-radius: 0px !important;
}
.filt-selector {
  width: 0px;
}
.theme--light.v-icon {
  color: #2196f3 !important;
}

.v-input__slot {
  padding-right: 0px !important ;
}
</style>
