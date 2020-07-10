import { Service } from "@roqueando/nous";
import router from "../router";

export default class Web extends Service {
  constructor() {
    super(8000, router);
    this.type = this.HTTP;
  }
}
