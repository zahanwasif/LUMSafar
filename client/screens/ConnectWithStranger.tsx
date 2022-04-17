import React from 'react';
import { Button, FlatList, StatusBar, Text, View } from 'native-base';
import TopBar from '../components/TopBar';

const data = [,];

const renderItem = (item: React.ReactNode) => {
  return <View>{item}</View>;
};

const ConnectWIthStranger = ({ navigation }) => {
  return (
    <View marginTop='5%'>
      <StatusBar />
      <TopBar label={'Connect With Stranger'} />

      <View paddingTop='20px' px='10%'>
        <Text fontSize={18}>Featured</Text>
        <View
          marginTop='10px'
          backgroundColor={'red.300'}
          height={'150px'}
          width={'100%'}
          borderRadius={10}>
          <Text
            paddingLeft={'10px'}
            paddingTop={'10px'}
            fontSize='3xl'
            color='white'>
            Hang Out
          </Text>
          <Text color='white' width={'70%'} marginLeft='10px'>
            Get to know them before finding out how they look like.
          </Text>
          <View
            paddingTop={'5px'}
            paddingX='5px'
            display={'flex'}
            alignItems='flex-end'>
            <Button
              bg={'white'}
              height={'40px'}
              width={'130px'}
              onPress={() => navigation.navigate('ConnectSearching')}>
              <Text color={'red.300'} fontSize='xl'>
                Start Now
              </Text>
            </Button>
          </View>
        </View>
      </View>
      <View px='10%' paddingTop='20px'>
        <Text fontSize={18}>Experiences</Text>
        <View display={'flex'} flexDirection='row'>
          <View
            marginTop='10px'
            backgroundColor={'blue.300'}
            height={'150px'}
            width={'150px'}
            borderRadius={10}>
            <Text
              paddingLeft={'10px'}
              paddingTop={'10px'}
              fontSize='xl'
              color='white'>
              Watch Anime With.
            </Text>
          </View>
          <View
            marginLeft={'10px'}
            marginTop='10px'
            backgroundColor={'yellow.300'}
            height={'150px'}
            width={'150px'}
            borderRadius={10}>
            <Text
              paddingLeft={'10px'}
              paddingTop={'10px'}
              fontSize='xl'
              color='white'>
              Play Sports With.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConnectWIthStranger;
