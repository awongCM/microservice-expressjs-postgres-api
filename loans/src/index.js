const app = require("./server");

const port = 3002;

app.listen(port, () => {
  console.log(`Auth service listening on port: ${port}`);
});
