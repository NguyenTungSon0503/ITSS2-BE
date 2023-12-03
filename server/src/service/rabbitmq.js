import amqp from 'amqplib';
import config from '../config/config.js';

const { RABBITMQ_USER, RABBITMQ_PASSWORD, RABBITMQ_HOST, QUEUE_NAME } =
  config.env;

export async function publishMessage(message, fileContent) {
  try {
    const connection = await rabbitmqConnect();
    const channel = await connection.createChannel();
    const data = {
      bodyEmail: message,
      fileContent: fileContent,
    };
    await channel.assertQueue(QUEUE_NAME, { durable: true });
    await channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(data)));

    await channel.close();
    await connection.close();
  } catch (error) {
    throw new Error(error);
  }
}

export async function rabbitmqConnect() {
  const connection = await amqp.connect(
    'amqp://' + RABBITMQ_USER + ':' + RABBITMQ_PASSWORD + RABBITMQ_HOST,
  );
  return connection;
}
