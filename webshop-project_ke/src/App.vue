<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">webshop_ke</router-link>
      <div class="navbar-nav ms-auto">
        <router-link class="nav-link" to="/">Termékek</router-link>
        <router-link class="nav-link" to="/cart">
          Kosár 
          <span class="badge bg-primary">{{ cartStore.cartItems.length }}</span>
        </router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import { useCartStore } from './stores/cartStore';
const cartStore = useCartStore();
</script>