import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    selectedItem: {},
    categories: [
      {
        cat_id: 1,
        cat_name: "Popular",
        cat_desc: "Our classic Thai dishes that inspire again and again!",
        cat_items: [
          {
            item_id: 11,
            item_cat_id: 1,
            item_name: "Marinated raw prawns with Thai sauce",
            item_desc: "",
            price: 16.50,
            is_ab: false,
            item_image_url: "/images/prawns/prawns.png"
          },
          {
            item_id: 12,
            item_cat_id: 1,
            item_name: "Wor Tip",
            item_desc: "Fried dumplings with pork",
            price: 6.20,
            is_ab: false,
            item_image_url: "/images/wor-tip/wor-tip.png"
          },
          {
            item_id: 13,
            item_cat_id: 1,
            item_name: "Custom Super Bowl Regular",
            item_desc: "Choose from our amazing ingredients to create your own individual bowl",
            price: 16.00,
            is_ab: true,
            item_image_url: "/images/custom-bowl-salmon-regular/custom-bowl-salmon-regular.png"
          },
          {
            item_id: 14,
            item_cat_id: 1,
            item_name: "Menu Salad",
            item_desc: "Lettuce, house dressing, corn",
            price: 9.00,
            is_ab: true,
            item_image_url: "/images/menu-salad/menu-salad.png"
          }
        ]
      },
      {
        cat_id: 2,
        cat_name: "Appetizers",
        cat_desc: "Enjoy our delicious appetizers made with fresh asian ingredients.",
        cat_items: [
          {
            item_id: 21,
            item_cat_id: 2,
            item_name: "Gai Med Mamuang (eher scharf)",
            item_desc: "",
            price: 8.50,
            is_ab: false,
            item_image_url: "/images/gai-med.png"
          },
          {
            item_id: 22,
            item_cat_id: 2,
            item_name: "Pho Bo",
            item_desc: "",
            price: 8.50,
            is_ab: false,
            item_image_url: "/images/pho-bo.png"
          }
        ]
      }
    ]
  },
  mutations: {
    /**
     * Set selected item
     * @param state
     * @param item
     */
    setSelectedItem(state, item) {
      state.selectedItem = item;
    },
    /**
     * Add item to cart
     * @param state
     * @param item
     */
    addItemToCart(state, item) {
      state.cart.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
