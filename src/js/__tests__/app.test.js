import Validator from '../app';

test.each([
  ['правильный вариант', 'Margo_20-10-05-warrior', true],
  ['неправильный вариант-кириллица', 'Марго_20-10-2005-warrior', false],
  ['неправильный вариант-4 цифры подряд', 'Margo_20-10-2005-warrior', false],
  ['неправильный вариант-цифра(символ) в начале имени', '2Margo_20-10-05-warrior', false],
  ['неправильный вариант-цифра(символ) в конце имени', 'Margo_20-10-05-warrior-', false],
])(
  ('проверка имени вариант %s при %i'),
  (_, name, expected) => {
    const user = new Validator(name);
    const check = user.validateUsername();
    expect(check).toBe(expected);
  },
);
