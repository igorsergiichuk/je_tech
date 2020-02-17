<template>
    <div class="category-item">
        <div
            class="category-item__details"
            :class="[addedToCartQuantity ? 'category-item__details_added' : 'category-item__details_blank']"
            @click="selectItem"
        >
            <img :src="item.item_image_url" :alt="item.name" class="category-item__image"/>
            <div class="category-item__name">
                <span v-if="addedToCartQuantity" class="category-item__added-quantity">{{addedToCartQuantity}}x</span>
                {{item.item_name}}
            </div>
            <div class="category-item__description" v-show="item.item_desc">
                {{item.item_desc}}
            </div>
        </div>
        <div class="category-item__price">
            <span v-show="item.is_ab">Ab</span>
            CHF {{itemPrice(item.price)}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "categoryItem",
        props: {
            item: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                showItemDetails: false
            }
        },
        computed: {
            addedToCartQuantity() {
                let isInCart = this.$store.state.cart.filter(itemInCart => {
                    if (itemInCart.item_id === this.item.item_id) {
                        return itemInCart
                    }
                });
                if (isInCart.length) {
                    return isInCart[0]["quantity"];
                }
                return 0;
            }
        },
        methods: {
            /**
             * Format item price for presentation
             * @param price item's price
             * @returns {*|string}
             */
            itemPrice(price) {
                return price.toFixed(2);
            },
            /**
             * On click open Item details
             * Check if item is already in cart
             * If so display real quantity of the item in cart
             */
            selectItem() {
                // If item is not in cart set quantity to 0
                if (!this.addedToCartQuantity) {
                    this.$store.commit("setSelectedItem", {...this.item, quantity: 0});
                } else {
                    this.$store.commit("setSelectedItem", {...this.item, quantity: this.addedToCartQuantity, isAdded: true});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .category-item {
        &__details {
            border-right: 6px solid transparent;
            padding: 0 10px;
        }
        &__details_blank {
            border-left: 6px solid transparent;
        }
        &__details_added {
            border-left: 6px solid $green-selected;
        }
        &__image {
            width: 288px;
            height: 110px;
        }
        &__name {
            font-family: $ubuntu-light;
            font-size: $item-name-font-size;
            line-height: $item-name-line-height;
            color: $grey;
            margin-top: 8px;
        }
        &__added-quantity {
            font-family: $ubuntu-regular;
            font-size: $item-name-font-size;
            line-height: $item-name-line-height;
            color: $green-selected;
        }
        &__description {
            font-family: $hind-vadodara-light;
            font-size: $description-font-size;
            line-height: $description-line-height;
            color: $grey-light;
            margin-top: 8px;
        }
        &__price {
            margin: 16px 16px 0 16px;
            font-family: $ubuntu-regular;
            font-size: $description-font-size;
            line-height: $item-name-line-height;
            color: $grey;
        }
    }
</style>