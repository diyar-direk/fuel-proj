export class EventTarget {
  constructor(name, value, checked) {
    this.target = { name, value, checked };
  }
  setValue(value) {
    this.target.value = value;
    return this;
  }
}
