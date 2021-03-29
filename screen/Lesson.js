import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';


export function Lesson({ route, navigation }) {
  var name = route.params;
  const [dulieu, getDulieu] = useState([]);
  function read() {
    fetch('http://dotplays.com/wp-json/wp/v2/posts?_embed')
      .then(response => response.json())
      .then(json => { getDulieu(json) })
  }
  return (
    <View style={styles.container}>
      {read()}
      <FlatList
        data={dulieu}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { name: item.link})}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                borderColor: 'black',
                borderWidth: 1,
                margin: 5,
                width:370
              }}>
              <View style={{
                flex: 1,
                flexDirection: 'row',

              }}>
                <Image
                  source={{ uri: item._embedded['wp:featuredmedia'][0].source_url }}
                  style={{ width: 50, height: 70, margin: 5, backgroundColor: 'blue' }}
                >
                </Image>
                <View
                  style={{
                    flexDirection: 'column'
                  }}>
                  <View>
                    <Text style={styles.flatListItem}> {item.title.rendered}</Text>
                    <Text style={styles.flatListItem1}>{item.date_gmt}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListItem: {
    width: 300,
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  flatListItem1: {
    marginVertical: 5,
    marginHorizontal: 10,
  }
});
