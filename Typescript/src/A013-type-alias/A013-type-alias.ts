// TYPE ALIAS
// "Basicamente, criar um apelido para um tipo com o objetivo de deixar o código 'limpo'"

// Por convenção, tipos criados pelo desenvolvedores possuem a primeira letra maiúscula
type Age = number;
type Person = {
  name: string;
  age: Age; // age: number
  salary: number;
  favoriteColor?: string;
};

type RgbColors = 'Red' | 'Green' | 'Blue';
type CmykColors = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';

type FavoriteColor = RgbColors | CmykColors;

const person: Person = {
  name: 'Lambimia',
  age: 30,
  salary: 200_000, // 200000 <- funciona como um 'marcador', separando para facilitar a leitura humana
  favoriteColor: 'Red',
};

export default function setFavoriteColor(
  person: Person,
  color: FavoriteColor,
): Person {
  return { ...person, favoriteColor: color };
}

console.log(person);
console.log(setFavoriteColor(person, 'Black'));
