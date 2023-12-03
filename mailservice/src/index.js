import express from "express";
import amqp from "amqplib";
import sendEmail from "./nodemailer.js";
import config from "./config.js";

const { PORT, RABBITMQ_USER, RABBITMQ_PASSWORD, RABBITMQ_HOST, QUEUE_NAME } =
  config.env;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function consumeMessages() {
  try {
    const connection = await amqp.connect(
      "amqp://" + RABBITMQ_USER + ":" + RABBITMQ_PASSWORD + RABBITMQ_HOST
    );
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE_NAME, { durable: true });

    await channel.consume(QUEUE_NAME, async (message) => {
      if (message !== null) {
        try {
          const receivedMessage = message.content.toString();
          const receivedMessageJSON = JSON.parse(receivedMessage);
          const { bodyEmail, fileContent } = receivedMessageJSON;
          const bodyEmailJson = JSON.parse(bodyEmail);
          const fileContentBuffer = Buffer.from(fileContent);
          bodyEmailJson.attachments[0].content = fileContentBuffer;

          await sendEmail(bodyEmailJson);
          channel.ack(message);
        } catch (error) {
          console.error("Error processing message:", error);
          channel.nack(message);
        }
      }
    });
  } catch (error) {
    console.error("Error consuming messages:", error);
    process.exit(1);
  }
}

async function startConsuming() {
  try {
    await consumeMessages();
    console.log("Started consuming messages from the queue");
  } catch (error) {
    console.error("Error consuming messages:", error);
  }
}

startConsuming(); // Start consuming messages when the application starts

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
