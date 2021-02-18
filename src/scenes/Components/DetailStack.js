import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import BannerCarousel from './BannerCarousel';
import SearchLayout from './SearchLayout';
import {DATA} from '../model/Data';
import ItemCard from './ItemCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabView,SceneMap,TabBar} from 'react-native-tab-view'

const renderItem = ({item, index}) => <ItemCard index={index} item={item} />;

const modalComponent = () => {};

const onPress = () => {
  Actions.details({title: 'Sponsored'});
};

const Lunch =()=>{
  return(
    <ScrollView invertStickyHeaders>
  <BannerCarousel />
  <TouchableOpacity onPress={onPress}>
  </TouchableOpacity>
  <FlatList
    contentContainerStyle={{marginLeft: 5}}
    data={DATA}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
</ScrollView>
  )
}
const Dinner=()=>{
 return(
  <ScrollView invertStickyHeaders>
  <BannerCarousel />
  <TouchableOpacity onPress={onPress}>
  </TouchableOpacity>
  <FlatList
    contentContainerStyle={{marginLeft: 5}}
    data={DATA}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
</ScrollView>

 ) 

}
export default class DetailStack extends Component {
  state = {
    index: 0,
    routes: [{ key: '1', title: 'Lunch'}, { key: '2', title: 'Dinner' }],
  };
  _handleIndexChange = index => {
    this.setState({index})
  };

  _renderScene = SceneMap({
    '1': Lunch,
    '2': Dinner,
  });
  constructor(props) {
    super(props);
    this.setState({
      visible: 'true',
    });
  }
  

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ededed'}}>
        <SearchLayout />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            paddingTop: 10,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Text style={{fontSize: 18}}>DELIVER TO</Text>
              <Icon name="chevron-down-outline" color="red" size={26} />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 20, top: -10}}>
              Saraswati Garden
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              backgroundColor: '#888',
              paddingHorizontal: 10,
              paddingTop: 10,
              borderRadius: 16,
              height: 32,
            }}>
            <TouchableOpacity onPress={modalComponent}>
              <Icon name="funnel-outline" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      
        <TabView
      navigationState={this.state}
      renderScene={this._renderScene}
      onIndexChange={this._handleIndexChange}
       />
          
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {backgroundColor: 'white', padding: 20},
});
