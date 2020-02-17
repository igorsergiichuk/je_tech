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
     */
    addItemToCart(state) {
      // if item is already in cart delete isAdded flag and replace item with updated quantity
      if (state.selectedItem.isAdded) {
        let item = {...state.selectedItem};
        delete item.isAdded;
        state.cart = state.cart.map(itemInCart => {
          if (itemInCart.item_id !== item.item_id) {
            return itemInCart
          } else {
            return item
          }
        })
      } else {
        state.cart.push(state.selectedItem)
      }
      state.selectedItem = {};
    },
    /**
     * Increase selected Item quantity
     * @param state
     */
    increaseSelectedItemQuantity(state) {
      state.selectedItem.quantity += 1;
    },
    /**
     * Decrease selected item quantity
     * @param state
     */
    decreaseSelectedItemQuantity(state) {
      if (state.selectedItem.quantity > 0) {
        state.selectedItem.quantity -= 1;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
