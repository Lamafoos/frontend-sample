import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    test: "tester",

    invoices: [
      {
        id: 1,
        name: "Lotty Nineham",
        type: "Checking",
        status: false,
        currency: "USD",
        balance: 95327.81,
        account: 6721863794
      },
      {
        id: 2,
        name: "Brigitta Ridsdell",
        type: "Savings",
        status: true,
        currency: "USD",
        balance: 68853.77,
        account: 3746316773
      },
      {
        id: 3,
        name: "Dewey Le Bosse",
        type: "Savings",
        status: false,
        currency: "EUR",
        balance: 37056.13,
        account: 5182832473
      },
      {
        id: 4,
        name: "Aristotle Logie",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 72481.37,
        account: 9791509138
      },
      {
        id: 5,
        name: "Shayne Tynan",
        type: "Savings",
        status: false,
        currency: "EUR",
        balance: 21272.16,
        account: 4279215503
      },
      {
        id: 6,
        name: "Amby Kief",
        type: "Checking",
        status: false,
        currency: "EUR",
        balance: 30957.93,
        account: 4142012598
      },
      {
        id: 7,
        name: "Reina Enright",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 77586.37,
        account: 2724308459
      },
      {
        id: 8,
        name: "Jesus Cundy",
        type: "Savings",
        status: true,
        currency: "EUR",
        balance: 64357.2,
        account: 4553851813
      },
      {
        id: 9,
        name: "Barnard Dreger",
        type: "Checking",
        status: false,
        currency: "EUR",
        balance: 18122.78,
        account: 8733955372
      },
      {
        id: 10,
        name: "Gertie Gooderidge",
        type: "Savings",
        status: false,
        currency: "USD",
        balance: 97745.81,
        account: 9535012565
      },
      {
        id: 11,
        name: "Starr Stannering",
        type: "Savings",
        status: false,
        currency: "EUR",
        balance: 55115.6,
        account: 6046891437
      },
      {
        id: 12,
        name: "Celinda Pena",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 57303.25,
        account: 4855942284
      },
      {
        id: 13,
        name: "Wendell Jardin",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 30550.36,
        account: 7849344336
      },
      {
        id: 14,
        name: "Cece Fairhead",
        type: "Checking",
        status: false,
        currency: "EUR",
        balance: 5280.9,
        account: 9605537585
      },
      {
        id: 15,
        name: "Montague McCardle",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 10682.34,
        account: 7287808830
      },
      {
        id: 16,
        name: "Klarika Lovelock",
        type: "Checking",
        status: true,
        currency: "EUR",
        balance: 83635.06,
        account: 4555386812
      },
      {
        id: 17,
        name: "Ricky Dillistone",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 49824.97,
        account: 5383352051
      },
      {
        id: 18,
        name: "Aeriell Vasyutichev",
        type: "Checking",
        status: false,
        currency: "EUR",
        balance: 64101.17,
        account: 6576670374
      },
      {
        id: 19,
        name: "Tabor Boddie",
        type: "Savings",
        status: true,
        currency: "USD",
        balance: 81748.09,
        account: 9104756999
      },
      {
        id: 20,
        name: "Sigismondo Peacey",
        type: "Checking",
        status: true,
        currency: "EUR",
        balance: 35349.38,
        account: 5640790511
      },
      {
        id: 21,
        name: "Aurthur Harteley",
        type: "Savings",
        status: true,
        currency: "EUR",
        balance: 62506.52,
        account: 7411636639
      },
      {
        id: 22,
        name: "Cammy Lavers",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 92759.22,
        account: 2572700463
      },
      {
        id: 23,
        name: "Solomon Mowat",
        type: "Checking",
        status: false,
        currency: "EUR",
        balance: 16428.51,
        account: 7889943242
      },
      {
        id: 24,
        name: "Chariot McPeake",
        type: "Checking",
        status: false,
        currency: "USD",
        balance: 34532.99,
        account: 7776590235
      },
      {
        id: 25,
        name: "Westbrook Eakle",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 29376.96,
        account: 7761847334
      },
      {
        id: 26,
        name: "Georgi Paslow",
        type: "Savings",
        status: false,
        currency: "EUR",
        balance: 5871.4,
        account: 3878879566
      },
      {
        id: 27,
        name: "Laird Mullally",
        type: "Savings",
        status: true,
        currency: "EUR",
        balance: 6097.19,
        account: 5609743952
      },
      {
        id: 28,
        name: "Sheree Hannigan",
        type: "Savings",
        status: false,
        currency: "EUR",
        balance: 12844.86,
        account: 9470587189
      },
      {
        id: 29,
        name: "Lynnette Fairman",
        type: "Savings",
        status: false,
        currency: "EUR",
        balance: 26149.03,
        account: 9401547254
      },
      {
        id: 30,
        name: "Carlin Wisham",
        type: "Savings",
        status: true,
        currency: "EUR",
        balance: 133.82,
        account: 7091921219
      },
      {
        id: 31,
        name: "Modesty Stefi",
        type: "Checking",
        status: false,
        currency: "USD",
        balance: 89986.89,
        account: 4584163146
      },
      {
        id: 32,
        name: "Alisander Deeson",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 86491.35,
        account: 1755475954
      },
      {
        id: 33,
        name: "Gardy Baine",
        type: "Savings",
        status: true,
        currency: "USD",
        balance: 49815.72,
        account: 6489766738
      },
      {
        id: 34,
        name: "Xavier Fellos",
        type: "Checking",
        status: true,
        currency: "EUR",
        balance: 79922.35,
        account: 3063172603
      },
      {
        id: 35,
        name: "Verina Itzcak",
        type: "Checking",
        status: false,
        currency: "USD",
        balance: 35841.73,
        account: 7245065307
      },
      {
        id: 36,
        name: "Robinson Pietrasik",
        type: "Checking",
        status: false,
        currency: "EUR",
        balance: 17260.39,
        account: 8601073398
      },
      {
        id: 37,
        name: "Claudetta Hugin",
        type: "Checking",
        status: false,
        currency: "USD",
        balance: 28064.77,
        account: 4672078578
      },
      {
        id: 38,
        name: "Rhys Fritchly",
        type: "Savings",
        status: false,
        currency: "EUR",
        balance: 48552.46,
        account: 7627220789
      },
      {
        id: 39,
        name: "Min Cullingworth",
        type: "Savings",
        status: false,
        currency: "USD",
        balance: 85074.71,
        account: 7808786246
      },
      {
        id: 40,
        name: "Brita Eilhart",
        type: "Checking",
        status: true,
        currency: "USD",
        balance: 84879.96,
        account: 4776530555
      }
    ],
    menuLinks: [
      { name: "Home", icon: "mdi-house", link: "" },
      { name: "Savings", icon: "mdi-money", link: "" },
      { name: "Loans", icon: "mdi-house", link: "" },
      { name: "Stocks", icon: "mdi-house", link: "" },
      { name: "User", icon: "mdi-user", link: "" }
    ],
    currencySymbols: [
      { currency: "JPY", symbol: "¥" },
      { currency: "USD", symbol: "$" },
      { currency: "EUR", symbol: "€" }
    ]
  },
  getters: {
    links: state => state.menuLinks,

    invoices: function(state) {
      return state.invoices.map(invoice => {
        // changes true / false to "active" "deactivated"
        invoice.status = invoice.status ? "Active" : "Deactivated";

        // adds symbol $ or € depending on currency
        invoice.balance =
          invoice.currency === "USD"
            ? `$ ${invoice.balance.toLocaleString()}`
            : `€ ${invoice.balance.toLocaleString()}`;

        // removes last for digits and adds last name
        invoice.account = accountNumberName(invoice.account, invoice.name);

        return invoice;
      });
    }
  }
});

function accountNumberName(num, nam) {
  let numbers = num.toString().slice(0, 6) + "****";
  let name = nam
    .toLocaleString()
    .split(" ")[1]
    .toUpperCase();
  return numbers + name;
}

export default store;
