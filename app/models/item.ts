import type { Image } from "~/models/image";

export interface Item {
    id: number;
    name: string;
    slug: string;
    sku: string;
    description: string;
    manufacturer: string;
    cost: number;
    quantity: number;
    availability: string;
    weight: number;
    length: number;
    width: number;
    height: number;
    isProduct: boolean;
    isViewable: boolean;
    isPurchasable: boolean;
    isSpecial: boolean;
    isNew: boolean;
    chargeTax: boolean;
    chargeShipping: boolean;
    isFreeShipping: boolean;
    freightQuoteRequired: boolean;
    modifiedAt: Date;
    images: Image[];
}
