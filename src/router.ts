import { Router, HTTPMethods } from "@roqueando/nous";

const router = new Router();

router.register(HTTPMethods.GET, "/", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>Coe menozada</h1>");
  response.end();
});

export default router;
