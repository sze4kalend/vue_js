<script setup>
import { useCartStore } from '../stores/cartStore';
import { toast } from 'vue3-toastify';

const cartStore = useCartStore();

// Törlés funkció
const removeItem = (index, product) => {
    cartStore.cartItems.splice(index, 1);
    product.stock++;
    toast.warn(`${product.name} eltávolítva.`);
};

const handleCheckout = () => {
    const checkoutPromise = new Promise((resolve) => setTimeout(resolve, 2000));

    toast.promise(
        checkoutPromise,
        {
            pending: 'Tranzakció feldolgozása...',
            success: 'Sikeres fizetés! Köszönjük a vásárlást!',
            error: 'Hiba történt a fizetés során!',
        }
    );

    checkoutPromise.then(() => {
        cartStore.cartItems = []; // Kosár ürítése ha a fizetés ok
    });
};
</script>

<template>
    <div class="container mt-4">
        <h2 class="mb-4 text-center">Ön kosara</h2>

        <div v-if="cartStore.cartItems.length === 0" class="alert alert-info text-center">
            A kosarad még üres. Kezdj el vásárolni!
        </div>

        <div v-else>
            <table class="table table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Termék</th>
                        <th>Ár</th>
                        <th class="text-center">Művelet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cartStore.cartItems" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }} Ft</td>
                        <td class="text-center">
                            <button @click="removeItem(index, item)" class="btn btn-outline-danger btn-sm">
                                Törlés
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="table-secondary fw-bold">
                        <td>Összesen:</td>
                        <td colspan="2">{{ cartStore.totalCost }} Ft</td>
                    </tr>
                </tfoot>
            </table>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <button @click="handleCheckout" class="btn btn-success btn-lg">
                    Fizetés indítása
                </button>
            </div>
        </div>
    </div>
</template>