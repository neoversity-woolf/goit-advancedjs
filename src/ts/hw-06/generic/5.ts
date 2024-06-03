/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення.
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<Type> {
  key: Type;
  value: Type;
}

const x1: KeyValuePair<string> = {
  key: 'name',
  value: 'Mango',
};

const x2: KeyValuePair<string | number> = {
  key: 'age',
  value: 12,
};

export { x1, x2 };
