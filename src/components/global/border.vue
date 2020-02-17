<template>
    <div class="border"></div>
</template>

<script>
    export default {
        name: "border"
    }
</script>

<style lang="scss" scoped>
    .border {
        padding: 0;
        margin: 24px 6px;
        display: block;
        width: calc(100% - 12px);
        border-bottom: 1px solid $grey-border;
        line-height: 1px;
    }
</style>