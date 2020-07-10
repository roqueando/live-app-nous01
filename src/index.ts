import { Manager, Client } from "@roqueando/nous";
import * as fs from "fs";
import Customer from "./services/Customer";
import Web from "./services/Web";

const manager = new Manager(8080);
manager.run();
console.log("Running manager on 8080");

const customer = new Customer();
customer.setName("CustomerService");
customer.run();

const web = new Web();
web.setName("WebService");
web.run();

console.log(`Running customer on ${customer.port}`);
