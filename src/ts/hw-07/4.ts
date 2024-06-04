class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(this: Key): number {
    return this.signature;
  }
}
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }
  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  public abstract openDoor(key: number): void;
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): number {
    return this.key.getSignature();
  }
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  public openDoor(keySignature: number): void {
    if (this.key.getSignature() === keySignature) {
      this.door = true;
      console.log(`Двері будинку відчинені.`);
    } else {
      console.log(`Двері будинку зачинені.`);
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
