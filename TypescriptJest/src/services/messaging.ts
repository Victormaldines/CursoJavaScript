import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  public sendMessage(msg: string): void {
    console.log(`Your sent message: ${msg}`);
  }
}
