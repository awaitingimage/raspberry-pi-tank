import express from "express";
import path from "path";
import expressWs from "express-ws";
import pigpio from "pigpio";
const Gpio = pigpio.Gpio;

let app = express();
const expressWs2 = expressWs(app);
app = expressWs2.app;
const port = 4000;

const enabler = new Gpio(17, { mode: Gpio.OUTPUT });
const input1 = new Gpio(27, { mode: Gpio.OUTPUT });
const input2 = new Gpio(22, { mode: Gpio.OUTPUT });

app.use("/favicon.ico", express.static("favicon.ico"));

// Serve the static files from the React app
app.use(express.static(`${path.resolve()}/client/build/`));

app.get("*", (req, res) => {
  res.sendFile(`${path.resolve()}/client/build/index.html`);
});

app.ws("/", function(ws, req) {
  ws.on("message", function(motorValue) {
    changeMotor(motorValue);
  });
});

function changeMotor(motorValue) {
  console.log(motorValue);
  if (motorValue > 0 && motorValue <= 255) {
    enabler.pwmWrite(motorValue);
    input1.digitalWrite(1);
    input2.digitalWrite(0);
  } else if (motorValue < 0 && motorValue >= -255) {
    enabler.pwmWrite(-motorValue);
    input1.digitalWrite(0);
    input2.digitalWrite(1);
  } else {
    enabler.digitalWrite(0);
    input1.digitalWrite(0);
    input2.digitalWrite(0);
  }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
