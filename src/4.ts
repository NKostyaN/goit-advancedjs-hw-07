class Key {
  private signature: number;

  constructor() {
    this.signature = Math.round(Math.random() * 100000);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  tenants: Person[];

  constructor(public key: Key) {
    this.tenants = [];
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("You are not welcomed here, go away!");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    if (key === this.key) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
