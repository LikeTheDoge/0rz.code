<template>
    <div class="top-bar">
        <div class="top-bar-fixed"></div>
    </div>
</template>

<style lang="scss" scoped>
.top-bar {
    --top-bar-height: 48px;
    --top-bar-border: 1px solid #ccc;
    
    height: var(--top-bar-height);

    .top-bar-fixed {
        height: var(--top-bar-height);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        border-bottom: var(--top-bar-border);
    }
}
</style>