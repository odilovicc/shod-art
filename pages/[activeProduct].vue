<template>
    <div class="product-page">
        <!-- Левая колонка: изображение -->
        <div class="product-image">
            <img :src="activeProduct.imageUrl" :alt="activeProduct.name" />
        </div>

        <!-- Правая колонка: информация -->
        <div class="product-details">
            <h1 class="product-title">{{ activeProduct.name }}</h1>

            <div class="product-price">
                <span v-if="activeProduct.originalPrice" class="original-price">
                    £{{ activeProduct.originalPrice }}
                </span>
                <span class="current-price">£{{ activeProduct.price }}</span>
            </div>

            <div class="product-rating">
                <AppRating :rating="Math.round(activeProduct.rating)"/>
                <span class="product-rating-label">{{ activeProduct.reviews }} ta sharhlar</span>
            </div>

            <ul class="product-features">
                <p>{{activeProduct.description}}</p>
            </ul>

            <div class="cart-controls">
                <button @click="decreaseQuantity" :disabled="selectedQuantity === 0">-</button>
                <span>{{ selectedQuantity }}</span>
                <button @click="increaseQuantity">+</button>
            </div>

            <button :class="{
                'add-to-cart': true,
                disabled: selectedQuantity === 0
            }" @click="addToCart" :disabled="selectedQuantity === 0">
                Add to Cart
            </button>

            <!-- Для отладки, отображение текущей корзины -->
            {{ userCart }}
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Product } from "~/types/helpers";

const route = useRoute();
const productStore = useProductStore();
const { userCart } = productStore;

// Информация о текущем товаре
const activeProduct = ref<Product>({
    id: null,
    name: "",
    imageUrl: "",
    price: 0,
    originalPrice: null,
});

// Переменные для управления количеством
const selectedQuantity = ref(0);

// Увеличение количества
function increaseQuantity() {
    selectedQuantity.value++;
}

// Уменьшение количества
function decreaseQuantity() {
    if (selectedQuantity.value > 0) {
        selectedQuantity.value--;
    }
}

// Добавление товара в корзину
function addToCart() {
    if (selectedQuantity.value > 0 && activeProduct.value) {
        productStore.addProductToCart({
            id: activeProduct.value.id,
            quantity: selectedQuantity.value,
        });
    }
}

// Инициализация данных при загрузке страницы
onMounted(() => {
    const productId = Number(route.query.id);
    const product = productStore.getProductById(productId);
    if (product) {
        activeProduct.value = product;
    }
});
</script>




<style scoped>
.product-page {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    font-family: Arial, sans-serif;
}

.product-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
}

.product-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.product-title {
    font-size: 2rem;
    font-weight: bold;
}

.product-price {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.original-price {
    text-decoration: line-through;
    color: #888;
}

.current-price {
    color: #000;
    font-weight: bold;
}
.product-rating {
    display: flex;
    align-items: center;
    gap: 10px;

}

.product-rating-label {
    font-size: 16px;
    font-weight: 300;
}
.product-features {
    list-style: none;
    padding: 0;
    color: #555;
}

.product-features li {
    margin-bottom: 0.5rem;
}

.cart-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

button {
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    font-size: 1rem;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.add-to-cart {
    padding: 1rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.25rem;

    &.disabled {
        opacity: 0.5;
        cursor: initial;
    }
}

@media (max-width: 480px) {
    .product-page {
        flex-direction: column;
    }
    .product-title {
        font-size: 1rem;
    }
    .product-features {
        font-size: 0.8rem;
    }
    .product-rating-label {
        font-size: 12px;
        margin-top: 5px;
    }
}
</style>
