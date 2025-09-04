import Movie from "../movie";
import Cart from "../cart";

test("Добавление фильма в корзину", () => {
  const myMovie = new Movie(
    "Интерстеллар",
    "США",
    "Фантастика",
    "180 мин.",
    "Только вперед"
  );

  const myCart = new Cart();

  myCart.add(myMovie);

  const result = [
    {
      name: "Интерстеллар",
      country: "США",
      genre: "Фантастика",
      duration: "180 мин.",
      slogan: "Только вперед"
    },
  ];

  expect(result).toEqual(myCart.items);
});

test("Создание класса Movie", () => {
  const myMovie = new Movie(
    "Интерстеллар",
    "США",
    "Фантастика",
    "180 мин.",
    "Только вперед"
  );
  const result = {
    name: "Интерстеллар",
    country: "США",
    genre: "Фантастика",
    duration: "180 мин.",
    slogan: "Только вперед"
  };

  expect(result).toEqual(myMovie);
});
