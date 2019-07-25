import express from "express";
import path from "path";
import expressWs from "express-ws";
import pigpio from "pigpio";

const { Gpio } = pigpio;

const expressWs2 = expressWs(express());
const { app } = expressWs2;
const port = 4000;

//left track
const leftInput2 = new Gpio(2, { mode: Gpio.OUTPUT });
const leftInput1 = new Gpio(3, { mode: Gpio.OUTPUT });
const leftEnabler = new Gpio(4, { mode: Gpio.OUTPUT });

// right track
const input1 = new Gpio(17, { mode: Gpio.OUTPUT });
const input2 = new Gpio(27, { mode: Gpio.OUTPUT });
const enabler = new Gpio(22, { mode: Gpio.OUTPUT });

app.use("/favicon.ico", express.static("favicon.ico"));

// Serve the static files from the React app
app.use(express.static(`${path.resolve()}/client/build/`));

function changeRightMotor(motorValue) {
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

function changeLeftMotor(motorValue) {
  if (motorValue > 0 && motorValue <= 255) {
    leftEnabler.pwmWrite(motorValue);
    leftInput1.digitalWrite(1);
    leftInput2.digitalWrite(0);
  } else if (motorValue < 0 && motorValue >= -255) {
    leftEnabler.pwmWrite(-motorValue);
    leftInput1.digitalWrite(0);
    leftInput2.digitalWrite(1);
  } else {
    leftEnabler.digitalWrite(0);
    leftInput1.digitalWrite(0);
    leftInput2.digitalWrite(0);
  }
}

app.ws("/", (ws, req) => {
  ws.send("connected");
  ws.on("message", message => {
    const data = JSON.parse(message);
    console.log(data);
    if (data.track === "right") changeRightMotor(data.value);
    if (data.track === "left") changeLeftMotor(data.value);
  });
});

app.get("*", (req, res) => {
  res.sendFile(`${path.resolve()}/client/build/index.html`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
