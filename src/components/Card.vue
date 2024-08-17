<script setup>
    defineProps({
        bg: {
            type: String,
        }
    })
</script>

<template>
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <slot></slot>
    </div>
    
</template>