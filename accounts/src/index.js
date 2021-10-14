const app = require("./server");

const port = 3003;

app.listen(port, () => {
  console.log(`Auth service listening on port: ${port}`);
});
