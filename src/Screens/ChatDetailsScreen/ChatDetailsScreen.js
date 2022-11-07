import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, FlatList, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilState} from 'recoil';
import MyInput from '../../Components/MyInput';
import MyText from '../../Components/MyText';
import MyTouchable from '../../Components/MyTouchable';
import {chatsDataState} from '../../Recoil/atoms';
import colors from '../../utilities/colors';
import DateService from '../../utilities/dateService';
import dimensions from '../../utilities/dimensions';
import storageService from '../../utilities/storageService';

const ChatDetailsScreen = props => {
  const [allChats, setAllChats] = useRecoilState(chatsDataState);
  const [newMessage, setNewMessage] = useState('');
  const userId = props.route.params && props.route.params.userId;
  const listRef = useRef(null);

  const [userData, setUserData] = useState(
    allChats.find(user => (user.userId === userId ? user.replies : null)),
  );

  useEffect(() => {
    if (userData && userData.replies && userData.replies.length > 0)
      listRef.current.scrollToEnd();
  }, []);

  const renderReplies = (value, key) => {
    return (
      <View
        key={key}
        style={
          value.user_role === 'USER' ? styles.userStyle : styles.adminStyle
        }
      >
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <MyText style={{lineHeight: 18}}>{value.body}</MyText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 5,
            }}
          >
            <MyText style={{fontSize: 10}}>
              {DateService.changeDateFormat(
                value.created_at.substr(0, 10),
                'yyyy-mm-dd',
                'dd-mm-yyyy',
              )}{' '}
              - {value.created_at.substr(11, 5)}
            </MyText>
          </View>
        </View>

        <View
          style={
            value.user_role === 'USER' ? styles.arrowRight : styles.arrowLeft
          }
        />
      </View>
    );
  };

  const createAReply = type => {
    return {
      id: userData && userData.replies ? userData.replies.length : 0,
      user_role: type,
      created_at:
        DateService.getTodayString('yyyy-mm-dd') +
        'T' +
        DateService.getCurrentHour() +
        ':' +
        DateService.getCurrentMinute(),
      body:
        type == 'USER'
          ? newMessage
          : 'We are not available at this point of time. We will get back you to asap.',
    };
  };

  const sendMessage = () => {
    console.log({userData});

    let newUserData = {
      id: null,
      userId: null,
      replies: [],
    };
    if (userData) {
      newUserData = {id: userData.id, userId: userId, replies: null};
      newUserData['replies'] = [...userData.replies, createAReply('USER')];
    } else {
      newUserData = {id: allChats.length, userId: userId, replies: null};
      newUserData['replies'] = [createAReply('USER')];
    }

    setUserData(newUserData);

    setNewMessage(null);

    setTimeout(() => {
      adminReplies(newUserData);
    }, 1000);
  };

  const adminReplies = oldUserData => {
    let newUserData = {id: oldUserData.id, userId: userId, replies: null};

    newUserData['replies'] = [...oldUserData.replies, createAReply('ADMIN')];

    setUserData(newUserData);

    updateMessgaeStore(newUserData);
  };

  const updateMessgaeStore = newUserData => {
    let newAllChats = [...allChats];

    if (userData && userData.userId) {
      newAllChats.splice(userData.id, 1, newUserData);
    } else {
      newAllChats.push(newUserData);
    }

    storageService.setItem('allChats', JSON.stringify(newAllChats));

    setAllChats(newAllChats);
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={{marginHorizontal: dimensions.vw * 2}}>
        {userData && userData.replies ? (
          <FlatList
            keyExtractor={(item, index) => index}
            data={userData.replies}
            renderItem={({item, index}) => renderReplies(item, index)}
            style={{
              maxHeight:
                Platform.OS === 'android'
                  ? dimensions.vh * 78
                  : dimensions.vh * 74,
            }}
            ref={listRef}
            onContentSizeChange={() => {
              listRef.current.scrollToEnd();
            }}
          />
        ) : (
          <View style={styles.noMessages}>
            <MyText center primary>
              {' No messages yet,\n\n Send a message to start a conversation'}
            </MyText>
          </View>
        )}
      </View>

      <View style={styles.replyInputContainer}>
        <View style={{flex: 1, minWidth: dimensions.vw * 66}}>
          <MyInput
            type={'default'}
            value={newMessage}
            onTextChange={text => setNewMessage(text)}
            placeholder={'reply'}
            onBlur={() => {}}
            style={{width: '95%'}}
          />
        </View>

        <MyTouchable onPress={sendMessage}>
          <View>
            <MyText>SEND</MyText>
          </View>
        </MyTouchable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  cardHeading: {
    backgroundColor: colors.primaryColor,
    height: dimensions.vh * 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  arrowLeft: {
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: '#00ffae',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    position: 'absolute',
    left: -8,
    top: 0,
  },
  arrowRight: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#ccc',
    position: 'absolute',
    right: -8,
    top: 0,
  },
  userStyle: {
    maxWidth: dimensions.vw * 70,
    minWidth: dimensions.vw * 50,
    backgroundColor: '#ccc',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginVertical: 6,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 5,
    marginRight: 8,
    borderTopRightRadius: 0,
  },
  adminStyle: {
    maxWidth: dimensions.vw * 70,
    minWidth: dimensions.vw * 50,
    backgroundColor: '#00ffae',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginVertical: 6,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 5,
    marginLeft: 8,
    borderTopLeftRadius: 0,
  },
  replyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: dimensions.vw * 5,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
  },
  noMessages: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
});

export default ChatDetailsScreen;
