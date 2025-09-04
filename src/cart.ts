import ForWatching from "./ForWatching";

export default class Cart {
    private _items: ForWatching[] = [];

    add(item: ForWatching): void {
        this._items.push(item);
    }

    get items(): ForWatching[] {
        return [...this._items];
    }
}
