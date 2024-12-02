export interface IAnyObject {
    [key: string]: any 
}
export type Product = {
    id: number;
    name: string;
    size: string;
    price: number;
    originalPrice: number | null; // null, если нет скидки
    rating: number;
    reviews: number;
    tags: string[]; // Метки, например: "Limited Offer", "Top Rated"
    imageUrl: string;
    description: string;
};