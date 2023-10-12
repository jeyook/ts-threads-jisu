import app from "./app";

const port = 8001;

function start(port: number) {
  app.listen(port, () => {
    console.log(`ts-thread listening on port ${port}`);
  });
}

start(port);
