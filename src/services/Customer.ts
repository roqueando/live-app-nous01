import { Service } from "@roqueando/nous";

export default class Customer extends Service {
  public getName(name): string {
    return `Hello ${name}`;
  }
}
