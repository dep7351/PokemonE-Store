import { ShoppingCart } from "./ShoppingCart";

export interface StoreStatistics {
    purchaseCount: number;
    averagePurchaseAmt: number;
    mostPopularProducts: number[];
    mostExpensiveCarts: ShoppingCart[];
    mostPopularType: String;
    typeRevenue: Map<String, number>;
    avgSessionTime: number;
}