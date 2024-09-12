import { Category } from "~/models/category";
import { Item } from "~/models/item";

export interface ItemResponse {
    item: Item;
    categoryRootPaths: Category[][];
}
