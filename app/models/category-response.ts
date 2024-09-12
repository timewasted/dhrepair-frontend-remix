import { Category } from "~/models/category";
import { Item } from "~/models/item";

export interface CategoryResponse {
    category: Category|null;
    parent: Category|null;
    children: {
        categories: Category[];
        items: Item[];
    };
}
