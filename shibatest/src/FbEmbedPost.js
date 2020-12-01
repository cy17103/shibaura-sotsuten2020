import React, { Component} from 'react';
import { FacebookProvider, EmbeddedPost } from '../node_modules/react-facebook';

export default class FbEmbedPost extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <EmbeddedPost href="http://www.facebook.com" width="500" />
      </FacebookProvider>
    );
  }
}