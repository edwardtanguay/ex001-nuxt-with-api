<script setup lang="ts">
import { appStore } from "~/stores/AppStore";

appStore.fill();

</script>
<template>
	<Html>
		<Head>
			<Title>Nuxt with API</Title>
		</Head>
	</Html>
	<Header />
	<Nav />
	<main class="py-2 px-6">
		<NuxtPage />
	</main>
</template>
