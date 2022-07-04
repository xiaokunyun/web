<template>
    <div>
       <Mobile v-if="isMobileTerminal" />
       <Pc v-else/>
    </div>
</template>

<script setup lang="ts">
import { isMobileTerminal } from '@/util/flex'
import Pc from "./pc.vue";
import Mobile from "./mobile.vue";
</script>

<style lang="scss" scoped>
</style>