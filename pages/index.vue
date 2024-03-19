<script setup lang="ts">
import { appStore } from "~/stores/AppStore";
</script>
<template>
	<p class="mt-4">{{ appStore.appMessage }}</p>
</template>
