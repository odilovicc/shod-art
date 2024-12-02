import type { Product } from "~/types/helpers";

export const useProductStore = defineStore('product', () => {
    const userCart = ref<Array<{ id: number; quantity: number }>>([]);
    const products: Product[] = [
        {
            id: 1,
            name: "Arcus Full Length Arched Black Metal Mirror",
            size: "170cm x 80cm",
            price: 169,
            originalPrice: 219,
            rating: 5,
            reviews: 1023,
            tags: ["Limited Offer", "Top Rated"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/products/ArcusBlackFLWEBUGC_500x.jpg?v=1679951461",
            description: "A stunning full-length arched mirror with a sleek black metal frame. Perfect for modern interiors, its generous size enhances the sense of space and light in any room.",
        },
        {
            id: 2,
            name: "Lunaria Gold Framed Round Wall Mirror",
            size: "90cm x 90cm",
            price: 125,
            originalPrice: 175,
            rating: 4,
            reviews: 542,
            tags: ["Limited Offer"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/products/Brooklyn55_x28_WEBUGC_500x.jpg?v=1622559590",
            description: "A luxurious round mirror framed in a rich gold finish. Ideal for adding an elegant focal point to living rooms, bedrooms, or entryways.",
        },
        {
            id: 3,
            name: "Solace Minimalist Oval Mirror",
            size: "150cm x 50cm",
            price: 199,
            originalPrice: 259,
            rating: 4,
            reviews: 789,
            tags: ["Bestseller"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/0124_WW_GEMMA_SHOOT_DAY8992_500x.jpg?v=1726131405",
            description: "A minimalist oval mirror that blends seamlessly with any decor. Its slim profile and versatile size make it a great choice for hallways and bedrooms.",
        },
        {
            id: 4,
            name: "Celeste Large Black Square Mirror",
            size: "120cm x 120cm",
            price: 179,
            originalPrice: null,
            rating: 5,
            reviews: 320,
            tags: ["Top Rated"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/Brooklyn_Extra_Large_Black_Arched_Mirror_1_500x.jpg?v=1723118789",
            description: "A bold black square mirror that adds a contemporary touch to any room. Its large size and clean lines suit modern and industrial aesthetics.",
        },
        {
            id: 5,
            name: "Amara Full Length Bronze Mirror",
            size: "180cm x 90cm",
            price: 210,
            originalPrice: 250,
            rating: 5,
            reviews: 970,
            tags: ["Limited Offer"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/Brooklyn_Extra_Large_Black_Arched_Mirror_1_500x.jpg?v=1723118789",
            description: "A full-length mirror with a stunning bronze frame. Its refined design makes it a perfect addition to both classic and contemporary interiors.",
        },
        {
            id: 6,
            name: "Halo Framed Arch Mirror",
            size: "160cm x 70cm",
            price: 185,
            originalPrice: 225,
            rating: 5,
            reviews: 1012,
            tags: ["Top Rated"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/Brooklyn_Extra_Large_Black_Arched_Mirror_1_500x.jpg?v=1723118789",
            description: "An elegantly arched mirror with a thin, subtle frame. Designed to elevate any space with its timeless appeal.",
        },
        {
            id: 7,
            name: "Nova Contemporary Rectangular Mirror",
            size: "100cm x 60cm",
            price: 140,
            originalPrice: 180,
            rating: 4.5,
            reviews: 678,
            tags: ["Bestseller"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/Brooklyn_Extra_Large_Black_Arched_Mirror_1_500x.jpg?v=1723118789",
            description: "A contemporary rectangular mirror that adds a sleek and stylish touch to your walls. Perfect for modern homes or offices.",
        },
        {
            id: 8,
            name: "Elegance Vintage Round Mirror",
            size: "80cm x 80cm",
            price: 110,
            originalPrice: null,
            rating: 4,
            reviews: 450,
            tags: ["Limited Offer"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/Brooklyn_Extra_Large_Black_Arched_Mirror_1_500x.jpg?v=1723118789",
            description: "A charming vintage-style round mirror with a refined look. Ideal for creating a cozy yet elegant atmosphere.",
        },
        {
            id: 9,
            name: "Viva Slim Edge Mirror",
            size: "130cm x 40cm",
            price: 160,
            originalPrice: 200,
            rating: 4.7,
            reviews: 890,
            tags: ["Top Rated"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/Brooklyn_Extra_Large_Black_Arched_Mirror_1_500x.jpg?v=1723118789",
            description: "A slim, edge-framed mirror that fits narrow spaces while maintaining a stylish and functional design.",
        },
        {
            id: 10,
            name: "Radiant Full-Length Mirror",
            size: "170cm x 75cm",
            price: 195,
            originalPrice: 230,
            rating: 5,
            reviews: 1020,
            tags: ["Bestseller", "Limited Offer"],
            imageUrl: "https://www.williamwoodmirrors.co.uk/cdn/shop/files/Brooklyn_Extra_Large_Black_Arched_Mirror_1_500x.jpg?v=1723118789",
            description: "A radiant full-length mirror designed to brighten your space. Its sleek design complements any interior style.",
        },
    ];
    function getProductById(id: number) {
        return products.find((product) => product.id === id);
    }
    function addProductToCart({ id, quantity }: { id: number; quantity: number }) {
        const cartItem = userCart.value.find((item) => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            userCart.value.push({ id, quantity });
        }
    }

    function addToCart(product: Product) {
        const cartItem = userCart.value.find((item) => item.id === product.id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            userCart.value.push({ ...product, quantity: 1 });
        }
    }

    function isProductInCart(id: number | string, howMuch?: boolean): number | boolean {
        const numericId = typeof id === "string" ? Number(id) : id;

        if (howMuch) {
            const productInCart = userCart.value.filter((item) => item.id === numericId);
            return productInCart.reduce((acc, current) => acc + (current.quantity || 0), 0);
        }

        return !!userCart.value.find((item) => item.id === numericId);
    }

    function incrementProductQuantity(product: { id: number; name: string; price: number }) {
        const existingProduct = userCart.value.find((item) => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            userCart.value.push({ ...product, quantity: 1 });
        }
    }

    /**
     * Уменьшает количество товара в корзине или удаляет его, если количество становится равным 0.
     * @param productId - ID товара.
     */
    function decrementProductQuantity(productId: number) {
        const productIndex = userCart.value.findIndex((item) => item.id === productId);

        if (productIndex !== -1) {
            const product = userCart.value[productIndex];
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                userCart.value.splice(productIndex, 1);
            }
        }
    }

    function removeFromCart(productId: number) {
        userCart.value = userCart.value.filter((item) => item.id !== productId);
    }
    return {
        getProductById,
        products,
        addToCart,
        isProductInCart,
        userCart,
        removeFromCart,
        decrementProductQuantity,
        incrementProductQuantity,
        addProductToCart
    }
})