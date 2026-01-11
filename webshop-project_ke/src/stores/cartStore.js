import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify'

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([])

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

    return { cartItems, addToCart, totalCost }
})