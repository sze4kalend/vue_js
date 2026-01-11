<script setup>
import { useProductStore } from '../stores/productStore';
import { useCartStore } from '../stores/cartStore';

//store-ok példányosítása
const productStore = useProductStore();
const cartStore = useCartStore();
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Webshop kínálat</h2>
    
    <div class="row">
      <div 
        class="col-12 col-md-6 col-lg-4 mb-4" 
        v-for="product in productStore.products" 
        :key="product.id"
      >
        <div class="card h-100 shadow-sm">
          <img :src="product.image" class="card-img-top p-3" alt="termék képe">
          
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text text-muted">Készleten: {{ product.stock }} db</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="fw-bold fs-5">{{ product.price }} Ft</span>
              
              <button 
                @click="cartStore.addToCart(product)" 
                class="btn btn-primary"
                :disabled="product.stock === 0"
              >
                {{ product.stock > 0 ? 'Kosárba' : 'Elfogyott' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: contain;
  height: 200px;
}
</style>
