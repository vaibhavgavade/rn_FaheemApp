import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {AppFont} from './AppFont';
const SubListView = ({sub}) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        keyExtractor={item => item.subject_id}
        showsHorizontalScrollIndicator={false}
        data={sub}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#ffa500',
              marginLeft: 5,
              borderRadius: 10,
              marginTop: 5,
            }}>
            <Text
              style={{
                padding: 5,
                fontFamily: AppFont.bold,
                fontSize: 15,
                color: 'white',
              }}>
              {item.subject_name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export {SubListView};
