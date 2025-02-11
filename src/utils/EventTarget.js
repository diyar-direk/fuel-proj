export class EventTarget {
  constructor(name, value) {
    this.target = { name, value };
  }
  setValue(value) {
    this.target.value = value;
    return this;
  }
}
