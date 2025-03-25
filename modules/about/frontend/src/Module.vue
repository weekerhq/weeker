<script setup lang="ts">
import logo from "@weekerhq/shared-logo/logo.svg?raw";
</script>

<template>
  <div class="container">
		<div class="logo" v-html="logo" />
		<div class="coming-soon">coming soon</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.logo {
	width: 300px;
	padding: 8px;
	height: auto;
}

.coming-soon {
	font-family: Arial, Helvetica, sans-serif;
	user-select: none;
}
</style>
