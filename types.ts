export type ViewState = 'home' | 'shop' | 'men' | 'community';

export type ProductType = 'product' | 'video' | 'look' | 'banner' | 'flash';

export interface BaseProduct {
    id: string;
    span?: string; // e.g., 'col-span-2'
    category?: 'men' | 'women' | 'unisex';
}

export interface ProductItem extends BaseProduct {
    type: 'product';
    title: string;
    subtitle?: string;
    price: string;
    oldPrice?: string;
    image: string;
    tag?: {
        text: string;
        color: string; // Tailwind color class e.g. 'bg-orange-500'
    };
    buttonLabel?: string;
    isNew?: boolean;
    hoverBorder?: boolean;
}

export interface VideoItem extends BaseProduct {
    type: 'video';
    title: string;
    image: string;
    live?: boolean;
}

export interface BannerItem extends BaseProduct {
    type: 'banner';
    text: string;
    author: string;
}

export interface LookItem extends BaseProduct {
    type: 'look';
    title: string;
    image: string;
}

export interface FlashItem extends BaseProduct {
    type: 'flash';
    title: string;
    subtitle: string;
}

export type Product = ProductItem | VideoItem | BannerItem | LookItem | FlashItem;

export interface CartItem extends ProductItem {
    quantity: number;
}
