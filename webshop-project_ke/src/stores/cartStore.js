import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { toast } from 'vue3-toastify'

export const useCartStore = defineStore('cart', () => {
    // 1. Betöltés a LocalStorage-ból indításkor 
    const savedCart = localStorage.getItem('webshop_cart')
    const cartItems = ref(savedCart ? JSON.parse(savedCart) : [])
    // 2. Mentés a LocalStorage-ba minden változáskor 
    watch(cartItems, (newCart) => {
        localStorage.setItem('webshop_cart', JSON.stringify(newCart))
    }, { deep: true })

    const addToCart = (product) => {
        if (product.stock > 0) {
            cartItems.value.push({ ...product })
            product.stock--
            toast.success(`${product.name} kosárba került!`)
        } else {
            toast.error("Nincs több készleten!")
        }
    }

    const totalCost = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + item.price, 0)
    })

    // Kosár ürítése funkció a sikeres fizetéshez
    const clearCart = () => {
        cartItems.value = []
        localStorage.removeItem('webshop_cart')
    }

    return { cartItems, addToCart, totalCost, clearCart }
})