<template>
    <div class="category">
        <div class="category__head">
            <div class="category__name">
                {{category.cat_name}}
            </div>
            <div v-show="category.cat_desc" class="category__description">
                {{category.cat_desc}}
            </div>
        </div>
        <border />
        <div v-for="item in category.cat_items" :key="item.item_id">
            <category-item :item="item" />
            <border />
        </div>
    </div>
</template>

<script>
    import CategoryItem from "@/components/homeComponents/categoryItem";
    import Border from "@/components/global/border";

    export default {
        name: "category",
        components: {
            CategoryItem,
            Border
        },
        props: {
            category: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    .category {
        &__head {
            padding: 0 20px;
        }
        &__name {
            font-size: $header-font-size;
            line-height: $header-line-height;
            color: $grey;
            font-family: $ubuntu-light;
        }
        &__description {
            font-size: $description-font-size;
            line-height: $description-line-height;
            color: $grey-light;
            font-family: $hind-vadodara-light;
            padding-top: 8px;
        }
    }
</style>