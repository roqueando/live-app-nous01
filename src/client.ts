import { Client } from "@roqueando/nous";
const client = new Client("127.0.0.1", 8080);
(async function () {
  const name = await client.send("CustomerService", {
    action: "getName",
    parameters: ["Lago"],
  });

  console.log(name);
})();
