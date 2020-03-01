import React from 'react';
import {View, Text} from 'react-native';
import {AppFont} from './AppFont';
const PerHourList = () => {
  const hourData = [
    {
      id: '1',
      title: 'SR 93',
    },
  ];
return (
    <View>
      {hourData.map(data => {
        return (
          <View>
            <Text
              style={{
                fontFamily: AppFont.regular,
                fontSize: 15,
              }}>
              {data.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export {PerHourList};
