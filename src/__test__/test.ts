import ForWatching from "../ForWatching";
import Movie from "../movie";
import Cart from "../cart";

test('Добавление фильма в корзину', () => {
    const myMovie = new Movie("Интерстеллар", "США", "Только вперед", "Фантастика", "180 мин.")

    const myCart = new Cart();

    myCart.add(myMovie);

    const result = [
      {
        name: "Интерстеллар",
        country: "США",
        slogan: "Только вперед",
        genre: "Фантастика",
        duration: "180 мин."
      },
    ];

    expect(result).toEqual(myCart.items);
});

test("Создание класса Movie", () => {
    const myMovie = new Movie(
      "Интерстеллар",
      "США",
      "Только вперед",
      "Фантастика",
      "180 мин."
    );
    const result = {
        name: "Интерстеллар",
        country: "США",
        slogan: "Только вперед",
        genre: "Фантастика",
        duration: "180 мин."
      };

      expect(result).toEqual(myMovie);
})
