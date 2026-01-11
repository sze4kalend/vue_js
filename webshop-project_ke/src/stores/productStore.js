import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {

    const products = ref([
        {"id": 1,"name": "Vue.js Póló","price": 4500,"image": "https://via.placeholder.com/150","stock": 5},
        {"id": 2,"name": "Bootstrap Bögre","price": 2500,"image": "https://via.placeholder.com/150","stock": 2},
        {"id": 3,"name": "Programozó Zokni","price": 1500,"image": "https://via.placeholder.com/150","stock": 10},
        {"id": 4,"name": "React Matrica Csomag","price": 1200,"image": "https://via.placeholder.com/150","stock": 20},
        {"id": 5,"name": "TypeScript Sapka","price": 3500,"image": "https://via.placeholder.com/150","stock": 8},
        {"id": 6,"name": "Mechanikus Billentyűzet","price": 25000,"image": "https://via.placeholder.com/150","stock": 3},
        {"id": 7,"name": "Laptop Állvány","price": 8000,"image": "https://via.placeholder.com/150","stock": 6},
        {"id": 8,"name": "USB-C Hub","price": 12000,"image": "https://via.placeholder.com/150","stock": 4},
        {"id": 9,"name": "Clean Code Könyv","price": 9000,"image": "https://via.placeholder.com/150","stock": 7},
        {"id": 10,"name": "Egérpad XL","price": 4000,"image": "https://via.placeholder.com/150","stock": 15}
    ])

    return { products }
})