import React, {useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BGCarpoolInnerBottom from '../../Components/BGCarpoolInnerBottom';
import MyButton from '../../Components/MyButton';
import dimensions from '../../utilities/dimensions';
import {chatsDataState} from '../../Recoil/atoms';
import {useRecoilState} from 'recoil';
import storageService from '../../utilities/storageService';

const HomeScreen = props => {
  const gotoScreen = screen => {
    props.navigation.navigate(screen);
  };

  const [allChats, setAllChats] = useRecoilState(chatsDataState);

  useEffect(() => {
    setOldChats();
  }, []);

  const setOldChats = async () => {
    try {
      let oldChats = await storageService.getItem('allChats');

      console.log({oldChats});
      if (oldChats) {
        oldChats = JSON.parse(oldChats);
        setAllChats(oldChats);
      }
    } catch (e) {
      console.log('Some issue in getting old chats', e);
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <BGCarpoolInnerBottom />
      <View style={{}}>
        <View style={styles.buttonContaier}>
          <MyButton
            name={'Student List'}
            onPress={() => gotoScreen('Student List')}
          />
        </View>

        <View style={styles.buttonContaier}>
          <MyButton
            name={'Chat List'}
            onPress={() => gotoScreen('Chat List')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '80%',
    alignItems: 'center',
  },
  buttonContaier: {
    marginVertical:
      Platform.OS == 'android' ? dimensions.vh * 1.5 : dimensions.vh * 4,
  },
});

export default HomeScreen;
