import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilState} from 'recoil';
import apiCall from '../../api/apiCall';
import MyButton from '../../Components/MyButton';
import {studentDataState} from '../../Recoil/atoms';
import colors from '../../utilities/colors';
import dimensions from '../../utilities/dimensions';

const StudentList = props => {
  const [studentData, setStudentData] = useRecoilState(studentDataState);

  // for api calling
  // const [studentData, setStudentData] = useState([]);
  const [index, setIndex] = useState(1);
  const [fetchingData, setFetchingData] = useState(false);
  // const [searchKey, setSearchKey] = useState('');
  const [filteredList, setFilteredList] = useState(studentData);

  //to get from api - but api data is not as per our requirements
  // useEffect(() => {

  //   apiCall({
  //     url: `v1/user?limit=${index * 20}`,
  //     callback: res => {
  //       if (res && res.data && res.data.length > 0) {
  //         setStudentData(res.data);
  //         setFetchingData(false);
  //         console.log('all profiles----', JSON.stringify(res.data));
  //       }
  //     },
  //   });
  // }, [index]);

  const gotoScreen = (screen, item) => {
    props.navigation.navigate(screen, {
      userId: item.id,
    });
  };

  const loadMoreData = () => {
    // setFetchingData(true);
    setTimeout(() => {
      if (index < 3) {
        setIndex(index + 1);
      } else {
        // console.log(index);
      }
    }, 2000);
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {fetchingData ? (
          <ActivityIndicator color="black" />
        ) : (
          <TouchableOpacity onPress={() => props.onPress()}>
            <View style={styles.gotoTop}>
              <Text>End of List</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderListItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => gotoScreen('ProfileScreen', item)}
        key={index}
      >
        <View style={styles.item}>
          <Image source={{uri: item.picture}} style={[styles.avatar]} />

          <View style={styles.namesContainer}>
            <View style={styles.itemRow}>
              <Text style={styles.name}>{item.firstName} </Text>
              <Text style={styles.name}>{item.lastName}</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.text}>{'Class:' + item.class} </Text>
              <Text style={[styles.text, {marginLeft: 10}]}>
                {'Roll No.:' + item.rollNo}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const onChange = val => {
    let key = val;
    let filteredList = [];
    if (studentData) {
      filteredList = studentData.filter(
        item => item.firstName.includes(key) || item.lastName.includes(key),
      );
    }

    console.log({filteredList});
    setFilteredList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.topBar}>
          <TextInput
            type={'default'}
            placeholder={'Search student'}
            onChangeText={val => onChange(val)}
            style={{flex: 1}}
            onBlur={() => {}}
          />
        </View>
        <FlatList
          contentContainerStyle={{minHeight: '100%'}}
          keyExtractor={(item, index) => index}
          data={filteredList.slice(0, index * 20)}
          renderItem={({item, index}) => renderListItem(item, index)}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={renderFooter()}
          //Adding Load More button as footer component
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '90%',
    marginHorizontal: dimensions.vw * 5,
  },
  item: {
    padding: 10,
    width: '100%',
    // backgroundColor: colors.primaryColor,
    marginVertical: 6,
    flexDirection: 'row',
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 13,
    color: 'black',
  },
  name: {fontWeight: 'bold', fontSize: 15, color: 'black'},
  footer: {
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  namesContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  itemRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  gotoTop: {
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  topBar: {
    height: 44,
    width: '100%',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 4,
    marginTop: -40,
  },
});

export default StudentList;
