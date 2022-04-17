import { Button, Image, StatusBar, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Chip from '../components/Chip';
import TopBar from '../components/TopBar';

const ConnectSearching = ({ navigation }) => {
  const [searched, setsearched] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setTimeout(() => {
      setsearched(true);
    }, 5000);
  }, []);

  return (
    <View
      marginTop='5%'
      padding={'20px'}
      backgroundColor={'blue.600'}
      height='100%'
      width={'100%'}>
      <StatusBar />
      {searched ? (
        <View paddingTop={'20px'}>
          <Text color='white' fontSize={'3xl'}>
            Found a match!
          </Text>

          <View paddingTop={'30px'} alignItems={'center'}>
            <Image
              size='48'
              rounded='full'
              source={{
                uri: 'https://www.gravatar.com/avatar/0?d=mp',
              }}
              alt='Profile Picture'
            />
            <Text color='white' paddingTop={'10px'} fontSize={'2xl'}>
              Tehzeer Haider
            </Text>
            <Text color='white' paddingTop={'50px'} fontSize={'xl'}>
              Interests in common
            </Text>
            <View paddingTop={'10px'} flexDirection={'row'}>
              <Chip label='Singing' color='red.300' />
              <Chip label='Singing' color='blue.300' />
              <Chip label='Singing' color='green.300' />
            </View>
            <View flexDirection={'row'}>
              <Chip label='Singing' color='yellow.300' />
              <Chip label='Singing' color='orange.300' />
              <Chip label='Singing' color='purple.300' />
              <Chip label='Singing' color='red.300' />
            </View>
            <View
              paddingY={'60px'}
              flexDirection={'row'}
              width='60%'
              justifyContent='space-around'>
              <Button height={'80px'} width={'80px'}>
                No
              </Button>
              <Button height={'80px'} width={'80px'}>
                Yes
              </Button>
            </View>
          </View>
        </View>
      ) : (
        <View paddingTop={'20px'}>
          <Text color='white' fontSize={'3xl'}>
            Searching for the perfect match...
          </Text>
        </View>
      )}
    </View>
  );
};

export default ConnectSearching;
