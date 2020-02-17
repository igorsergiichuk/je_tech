<template>
    <div class="add-button__container">
        <div class="add-button add-button_disabled" v-if="!itemQuantity">
            Add product
        </div>
        <div
            class="add-button add-button_active"
            @click="addItemToCart"
            v-else
        >
            <span>Add {{itemQuantity}}</span>
            <span>CHF {{selectedQuantityPrice}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "itemAddToCartButton",
        computed: {
            /**
             * Get viewed item selected quantity
             */
            itemQuantity() {
                return this.$store.state.selectedItem.quantity;
            },
            /**
             * Display selected quantity price
             * @returns {*|string}
             */
            selectedQuantityPrice() {
                return (this.$store.state.selectedItem.price * this.itemQuantity).toFixed(2);
            }
        },
        methods: {
            /**
             * Add item to cart
             */
            addItemToCart() {
                this.$store.commit('addItemToCart');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add-button {
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 16px;
        font-family: $ubuntu-regular;
        font-size: $item-name-font-size;
        line-height: $item-name-line-height;

        &__container {
            padding: 16px;
            -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
        }
        &_disabled {
            justify-content: center;
            color: $grey-zero;
            background-color: $grey-disabled;
        }
        &_active {
            justify-content: space-between;
            color: $white;
            background-color: $blue-button;
        }
    }
</style>