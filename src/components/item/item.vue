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
            <div class="item-page__counter-box">
                <img
                    alt="Increase Selected Quantity Button"
                    src="@/assets/icons/minus/minus-28@3x.png"
                    class="item-page__counter-button"
                    @click="decreaseQuantity"
                />
                <div
                    class="item-page__counter-quantity"
                    :class="{'item-page__counter-quantity-active' : selectedQuantity}"
                >
                    {{selectedQuantity}}
                </div>
                <img
                    alt="Dencrease Selected Quantity Button"
                    src="@/assets/icons/plus/plus-28@3x.png"
                    class="item-page__counter-button"
                    @click="increaseQuantity"
                />
            </div>
            <div class="item-page__add-button-container">
                <div class="item-page__add-button item-page__add-button_disabled" v-if="!selectedQuantity">
                    Add product
                </div>
                <div
                    class="item-page__add-button item-page__add-button_active"
                    @click="addItemToCart"
                    v-else
                >
                    <span>Add {{selectedQuantity}}</span>
                    <span>CHF {{selectedQuantityPrice}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Border from "@/components/global/border";

    export default {
        name: "menuItem",
        components: {
            Border
        },
        data() {
            return {
                selectedQuantity: 0
            }
        },
        computed: {
            /**
             * Get selected item from store
             * @returns {Object} items Object
             */
            item() {
                return this.$store.state.selectedItem;
            },
            /**
             * Display selected quantity price
             * @returns {*|string}
             */
            selectedQuantityPrice() {
                return (this.item.price * this.selectedQuantity).toFixed(2);
            },
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
            },
            /**
             * Increase selected item quantity on click
             */
            increaseQuantity() {
                this.selectedQuantity += 1;
            },
            /**
             * Decrease selected item quantity on click
             */
            decreaseQuantity() {
                if (this.selectedQuantity > 0) {
                    this.selectedQuantity -= 1;
                }
            },
            addItemToCart() {
                let itemToAdd = Object.assign(this.$store.state.selectedItem, {});
                itemToAdd.quantity = this.selectedQuantity;
                this.$store.state.commit();
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
    &__counter-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
    }
    &__counter-button {
        width: 28px;
        height: 28px;
    }
    &__counter-quantity {
        font-family: $ubuntu-regular;
        font-size: 36px;
        line-height: 36px;
        color: $grey-zero;
        padding: 0 24px;
    }
    &__counter-quantity-active {
        color: $grey;
    }
    &__add-button-container {
        padding: 16px;
        -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
    }
    &__add-button {
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 16px;
        font-family: $ubuntu-regular;
        font-size: $item-name-font-size;
        line-height: $item-name-line-height;
    }
    &__add-button_disabled {
        justify-content: center;
        color: $grey-zero;
        background-color: $grey-disabled;
    }
    &__add-button_active {
        justify-content: space-between;
        color: $white;
        background-color: $blue-button;
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