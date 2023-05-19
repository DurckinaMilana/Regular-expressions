export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-z]+[a-z_-]*\d{0,3}([a-z_-]+\d{0,3}){0,}[a-z]$/i.test(this.name);
  }
}
