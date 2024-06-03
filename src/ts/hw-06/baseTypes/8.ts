/*
  Створіть тип "Gender", використовуючи union type,
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = 'male' | 'female';

// ✅ right way to declare nyGender
const myGender: Gender = 'male';

// ❌ wrong way to declare nyGender
const myGenderError: Gender = 'qwe';

export { myGender, myGenderError };
