import app from "./app";

const port = 8000;

app.listen(port, () => {
  console.log("helloworld");
  console.log(`Server is running on: http://localhost:${port}`);
});
