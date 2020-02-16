<template>
    <div class="category-item">
        <div class="category-item__details" @click="selectItem">
            <img :src="item.item_image_url" :alt="item.name" class="category-item__image"/>
            <div class="category-item__name">
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
        methods: {
            /**
             * Format item price for presentation
             * @param price item's price
             * @returns {*|string}
             */
            itemPrice(price) {
                return price.toFixed(2);
            },
            selectItem() {
                this.$store.commit("setSelectedItem", this.item);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .category-item {
        &__details {
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            padding: 0 10px;
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