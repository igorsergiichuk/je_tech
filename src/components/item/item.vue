<template>
    <div class="item-page">
        <div class="item-page__image-container">
            <img :alt="item.item_name" :src="item.item_image_url" class="item-page__image">
            <img
                alt="Go Back Button"
                src="@/assets/icons/chevron-left/icon-chevron-left-24@3x.png"
                class="back-button"
                @click="hideItemPage"
            />
        </div>
        <div class="item-page__details">
            <div class="item-page__name">
                {{item.item_name}}
            </div>
            <div class="item-page__description" v-show="item.item_desc">
                {{item.item_desc}}
            </div>
            <div class="item-page__price">
                <span v-show="item.is_ab">Ab</span>
                CHF {{itemPrice(item.price)}}
            </div>
        </div>
        <div class="item-page__controls">
            <border />
            <item-counter />
            <item-add-to-cart-button />
        </div>
    </div>
</template>

<script>
    import Border from "@/components/global/border";
    import ItemCounter from "./itemCounter";
    import ItemAddToCartButton from "./itemAddToCartButton";

    export default {
        name: "menuItem",
        components: {
            ItemAddToCartButton,
            ItemCounter,
            Border
        },
        computed: {
            /**
             * Get selected item from store
             * @returns {Object} items Object
             */
            item() {
                return this.$store.state.selectedItem;
            }
        },
        methods: {
            /**
             * Close item details
             */
            hideItemPage() {
                this.$store.commit("setSelectedItem", {});
            },
            /**
             * Format item price for presentation
             * @param price item's price
             * @returns {*|string}
             */
            itemPrice(price) {
                return price.toFixed(2);
            }
        }
    }
</script>

<style lang="scss" scoped>
.item-page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
    background-color: white;
    &__image-container {
        width: 100%;
        height: 160px;
        max-height: 160px;
        position: relative;
        -webkit-box-shadow: inset 0 50px 76px 0 $black;
        -moz-box-shadow: inset 0 50px 76px 0 $black;
        box-shadow: inset 0 50px 76px 0 $black;
    }
    &__image {
        width: 100%;
        height: 100%;
        z-index: -1;
        position: relative;
    }
    &__details {
        margin: 24px 16px 0;
    }
    &__name {
        font-family: $ubuntu-light;
        font-size: $header-font-size;
        line-height: $header-line-height;
        color: $grey;
    }
    &__description {
        font-family: $hind-vadodara-light;
        font-size: $description-font-size;
        line-height: $description-line-height;
        color: $grey-light;
        margin-top: 8px;
    }
    &__price {
        font-family: $ubuntu-regular;
        font-size: $description-font-size;
        line-height: $item-name-line-height;
        color: $grey;
        margin-top: 16px;
    }
    &__controls {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
}

.back-button {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    left: 16px;
    z-index: 202;
}
</style>