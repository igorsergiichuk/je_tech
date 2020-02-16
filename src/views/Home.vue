<template>
    <div class="home">
        <category v-for="category in categories" :key="category.id" :category="category" />
        <transition name="item-transition">
            <item v-if="itemSelected"/>
        </transition>
    </div>
</template>

<script>
    import Category from "@/components/homeComponents/category";
    import Item from "@/components/item/item";

    export default {
        name: "Home",
        components: {
            Category,
            Item
        },
        computed: {
            /**
             * Get all the categories from store
             * @returns {Array} Array of categories
             */
            categories() {
                return this.$store.state.categories;
            },
            itemSelected() {
                return !!this.$store.state.selectedItem.item_id;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        overflow-x: hidden;
        overflow-y: auto;
        padding: 24px 0 0 0;
        width: 100%;
        height: 100vh;
    }
    @keyframes slideIn {
        from {
            top: 100vh;
            opacity: 0;
        }

        to {
            opacity: 1;
            top: 0;
        }
    }
    @keyframes slideOut {
        from {
            top: 0;
            opacity: 1;
        }

        to {
            top: 50vh;
            opacity: 0;
        }
    }
    .item-transition-enter-active {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        animation-name: slideIn;
    }
    .item-transition-leave-active {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        animation-name: slideOut;
    }
</style>