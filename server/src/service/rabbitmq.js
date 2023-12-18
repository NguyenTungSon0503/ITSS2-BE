import amqp from 'amqplib';
import config from '../config/config.js';

const {
  RABBITMQ_USER,
  RABBITMQ_PASSWORD,
  RABBITMQ_HOST,
  EXCHANGE_NAME,
  ROUTING_KEY,
} = config.env;

export async function publishMessage(message, fileContent) {
  try {
    const connection = await rabbitmqConnect();
    const channel = await connection.createConfirmChannel();
    const data = {
      bodyEmail: message,
      fileContent: fileContent,
    };

    await channel.assertExchange(EXCHANGE_NAME, 'direct', { durable: true });
    await channel.publish(
      EXCHANGE_NAME,
      ROUTING_KEY,
      Buffer.from(JSON.stringify(data)),
      {},
      (err, ok) => {
        if (err !== null) {
          console.error('Error publishing message:', err);
        }
      },
    );

    channel.on('ack', (data) => {
      console.log('Message published and confirmed by the broker:', data);
      // Perform actions after message acknowledgment (optional)
    });

    channel.on('nack', (data) => {
      console.error('Message publishing failed:', data);
      // Perform actions when message fails to be published (optional)
    });

    await channel.waitForConfirms(); // Wait for acknowledgments

    await channel.close();
    await connection.close();
  } catch (error) {
    throw new Error(error);
  }
}

export async function rabbitmqConnect() {
  try {
    const connection = await amqp.connect(
      'amqp://' + RABBITMQ_USER + ':' + RABBITMQ_PASSWORD + RABBITMQ_HOST,
    );
    return connection;
  } catch (error) {
    throw new Error(error);
  }
}
