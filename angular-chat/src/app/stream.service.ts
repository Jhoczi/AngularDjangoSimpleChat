import { Injectable } from '@angular/core';
import {StreamChat, Channel, ConnectAPIResponse, ConnectionOpen, UnknownType} from 'stream-chat';

declare interface UserInfo {
  token: string;
  apiKey: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class StreamService {
  constructor() {}

  streamClient: StreamChat;
  currentUser: any;

  public async initClient(user: UserInfo): Promise<Channel> {
    this.streamClient = new StreamChat(user.apiKey);
    // this.currentUser = await this.streamClient.connectUser({
    //   id: user.username,
    //   name: user.username,
    // },
    //     user.token
    // );
    this.currentUser = await this.streamClient.setUser(
      {
        id: user.username,
        name: user.username,
      },
      user.token
    );
    return this.streamClient.channel('messaging', 'General');
  }
}
