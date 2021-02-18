import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import AddressPicker from '../scenes/Components/AddressPicker';
import { Actions } from 'react-native-router-flux';

export default class ManageAddress extends Component {
  render() {
    return (
      <View>
        <AddressPicker />
        <Text
          style={{top: 300, padding: 10, textAlign: 'center', fontSize: 16}}>
          Add Other Address
        </Text>
        <View
          style={{
            top: 310,
            elevation: 2,
            width: '98%',
            height:180,
            borderRadius:5,
            marginHorizontal: '1%',
            shadowOffset:{height:2,width:2},
            shadowColor:'#000000',
            shadowOpacity:0.6
          }}>
          <Input placeholder="Address Line 1"
          leftIcon={{ type: 'font-awesome', name: 'building-o' }} 
          containerStyle={{height:50}}
          />
          <Input placeholder="Address Line 2"
          leftIcon={{ type: 'font-awesome', name: 'road' }} 
          containerStyle={{height:50}}
          />
          <View style={{flexDirection:'row'}}>
          <Input placeholder="City"
          leftIcon={{ type: 'font-awesome', name: 'location-arrow' }} 
          containerStyle={{height:50,width:'33%'}}
          />
          <Input placeholder="State" 
          leftIcon={{ type: 'font-awesome', name: 'map-marker' }} 
          containerStyle={{height:50,width:'33%'
        }}
          />
          <Input placeholder="Zip" 
          containerStyle={{height:50,width:'33%'}}
          type='number'
          />
          </View>
        </View>
        <View style={{position: 'absolute', top: 550, marginHorizontal: '25%'}}>
          <TouchableOpacity
            style={{
              width: '98%',
              borderRadius: 2,
              borderWidth: 2,
              elevation: 1,
              borderColor: '#55ff55',
              marginHorizontal: '1%',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
            }}
            onPress={() => {
              Actions.checkout();
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#058F05'}}>
              {' '}
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
