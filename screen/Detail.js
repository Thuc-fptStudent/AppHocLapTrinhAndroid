import * as React from 'react';
import {WebView} from 'react-native-webview';
export function Detail({route, navigation}) {
  const {name}=route.params;
  return (
       <WebView
           source={{ uri: name}}
           style={{ marginTop: 20 }}
       />

  );
}
 