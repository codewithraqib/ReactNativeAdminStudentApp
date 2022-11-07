import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilState} from 'recoil';
import dimensions from '../../utilities/dimensions';
import {studentDataState} from '../../Recoil/atoms';
import colors from '../../utilities/colors';
import BGCarpoolInnerBottom from '../../Components/BGCarpoolInnerBottom';

const ProfileScreen = props => {
  const [studentData, setStudentData] = useRecoilState(studentDataState);

  const userId = props.route.params && props.route.params.userId;

  const [profileData, setProfiledata] = useState(
    studentData.find(val => val.id == userId),
  );

  const [isEnabled, setIsEnabled] = useState(profileData.status);

  const gotoScreen = screen => {
    props.navigation.navigate(screen, {userId: userId});
  };

  const renderTwoItems = (title, data) => {
    return (
      <View style={styles.twoItems}>
        <Text style={styles.normalText}>{title}</Text>
        <Text style={[styles.bold, {color: colors.blueColor}]}>{data}</Text>
      </View>
    );
  };

  const RenderBodyItem = props => {
    return (
      <TouchableOpacity onPress={() => gotoScreen(props.onPress)}>
        <View style={styles.indItem}>
          <Text style={{color: colors.whiteColor}}>{props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);

    let newStudentData = [];
    studentData.map(student => {
      if (profileData.id === student.id) {
        newStudentData.push({...student, status: !isEnabled});
      } else {
        newStudentData.push(student);
      }
    });

    setStudentData(newStudentData);
  };

  const RenderSwitchItem = () => {
    return (
      <View style={styles.statusBar}>
        <Text style={styles.normalText}>
          <Text>Status:</Text>
          {isEnabled ? ' Active' : ' Inactive'}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: colors.blueColor}}
          thumbColor={isEnabled ? colors.whiteColor : '#f4f3f4'}
          thumbSize={20}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <BGCarpoolInnerBottom />
      <View style={{marginHorizontal: dimensions.vw * 5}}>
        <View style={styles.topView}>
          <View style={styles.avatarContainer}>
            <View style={styles.wrapper}></View>
            <Image source={{uri: profileData.picture}} style={styles.avatar} />

            <View style={styles.profileData}>
              {renderTwoItems(
                'Name:',
                profileData.firstName + ' ' + profileData.lastName,
              )}

              {renderTwoItems('Class:', profileData.class)}
              {renderTwoItems('Roll no.:', profileData.rollNo)}

              <RenderSwitchItem />
            </View>
          </View>
        </View>

        <View style={styles.restBody}>
          <RenderBodyItem name={'Chats'} onPress={'Chat Details'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // marginHorizontal: dimensions.vw * 5,
  },
  buttonContaier: {
    marginVertical: dimensions.vh * 2,
  },
  topView: {
    flexDirection: 'row',
    height: 180,
    width: dimensions.vw * 90,
    borderRadius: 8,
    shadowColor: '#aaa',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 2,
    backgroundColor: '#fff',
    position: 'relative',
    marginTop:
      Platform.OS === 'android' ? dimensions.vh * 8 : dimensions.vh * 2,
  },
  avatarContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -70,
    width: '100%',
    padding: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileData: {
    width: '100%',
    marginTop: 10,
  },
  twoItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  normalText: {
    fontSize: 12,
  },
  restBody: {
    marginTop: 40,
  },

  indItem: {
    height: 44,
    width: dimensions.vw * 90,
    backgroundColor: colors.blueColor,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 2,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  wrapper: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    position: 'absolute',
    top: 10,
    backgroundColor: '#eee',
    borderRadius: 60,
  },
});

export default ProfileScreen;
