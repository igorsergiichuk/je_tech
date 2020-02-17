<template>
    <div class="counter">
        <img
            alt="Increase Selected Quantity Button"
            src="@/assets/icons/minus/minus-28@3x.png"
            class="counter__button"
            @click="decreaseQuantity"
        />
        <div
            class="counter__quantity"
            :class="{'counter__quantity-active' : itemQuantity}"
        >
            {{itemQuantity}}
        </div>
        <img
            alt="Dencrease Selected Quantity Button"
            src="@/assets/icons/plus/plus-28@3x.png"
            class="counter__button"
            @click="increaseQuantity"
        />
    </div>
</template>

<script>
    export default {
        name: "itemCounter",
        computed: {
            /**
             * Get viewed item selected quantity
             */
            itemQuantity() {
                return this.$store.state.selectedItem.quantity;
            }
        },
        methods: {
            /**
             * Increase selected item quantity on click
             */
            increaseQuantity() {
                this.$store.commit('increaseSelectedItemQuantity')
            },
            /**
             * Decrease selected item quantity on click
             */
            decreaseQuantity() {
                this.$store.commit('decreaseSelectedItemQuantity')
            }
        }
    }
</script>

<style lang="scss" scoped>
.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    &__button {
        width: 28px;
        height: 28px;
    }
    &__quantity {
        font-family: $ubuntu-regular;
        font-size: 36px;
        line-height: 36px;
        color: $grey-zero;
        padding: 0 24px;
    }
    &__quantity-active {
        color: $grey;
    }
}
</style>