import MovieInterface from "./MovieInterface";

export default class Cart {
  private _items: MovieInterface[] = [];

  add(item: MovieInterface): void {
    this._items.push(item);
  }

  get items(): MovieInterface[] {
    return [...this._items];
  }
}
