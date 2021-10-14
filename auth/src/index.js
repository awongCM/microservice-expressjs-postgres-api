const app = require("./server");

const port = 3001;

app.listen(port, () => {
  console.log(`Auth service listening on port: ${port}`);
});
