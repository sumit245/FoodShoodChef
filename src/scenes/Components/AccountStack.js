import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, ActionSheetIOS} from 'react-native';
import 'react-native-gesture-handler';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Actions } from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/FontAwesome5';
export default class AccountStack extends Component {
  
  render() {
    return (
      <Animated.View style={styles.navdrawer}>
        <View style={styles.header}>
          <View style={styles.imageNUmName}>
            <TouchableHighlight style={styles.profileContainer}>
              <Image
                source={{
                  uri:
                    'https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png',
                }}
                style={styles.profilepic}
              />
            </TouchableHighlight>
            <View style={{marginTop: 20, marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                +919649240944
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 2}}>
                Sumit Ranjan{' '}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{marginLeft: 5, color: 'purple', fontWeight: 'bold'}}>
                  Edit Details
                </Text>
              </TouchableOpacity>
            </View>
           </View>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 2}}>
                sumitranjan245@gmail.com
              </Text>
              <TouchableOpacity>
                <Text
                  style={{marginLeft: 5, color: 'purple', fontWeight: 'bold'}}>
                  Verify Email
                </Text>
              </TouchableOpacity>
   
            </View>
          
        </View>

        <View style={styles.drawerRow}>
          <Icons name="tag" color={'blue'} size={30} brand />
          <TouchableOpacity onPress={()=>{Actions.coupons()}}>
          <Text style={styles.drawerText}>Add Coupons</Text>

          </TouchableOpacity>
          
        </View>
        <View style={styles.drawerRow}>
          <Icons name="map-marker-alt" color={'blue'} size={30} brand />
          <TouchableOpacity onPress={()=>{Actions.manageaddress()}}>
          <Text style={styles.drawerText}>Manage Address</Text>

          </TouchableOpacity>
          
        </View>
        <View style={styles.drawerRow}>
          <Icons name="file-invoice-dollar" color={'blue'} size={30} brand />
          <Text style={styles.drawerText}>Bill Notifications</Text>
        </View>
        <View style={styles.drawerRow}>
        <Icons name="credit-card" color={'blue'} size={30}  />
          <TouchableOpacity
          onPress={()=>{Actions.checkout()}}
          >
          <Text style={styles.drawerText}>Cards</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.drawerRow}>
          <Icons name="history" color={'blue'} size={30} brand />
          <TouchableOpacity onPress={()=>{Actions.orderhistory()}}>
          <Text style={styles.drawerText}>History</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.drawerRow}>
          <Icons name="lock" color={'blue'} size={30} brand />
          <Text style={styles.drawerText}>Change Password</Text>
        </View>
        <View style={styles.drawerRow}>
          <Icons name="file-alt" color={'blue'} size={30} brand />
          <TouchableOpacity onPress={()=>{Actions.policies()}}>
          <Text style={styles.drawerText}>Policies</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.drawerRow}>
          <Icons name="sign-out-alt" color={'blue'} size={30} brand />
          <Text style={styles.drawerText}>Logout</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  navdrawer: {
    flex: 1,
    alignSelf: 'flex-end',
    alignContent: 'flex-start',
    right: 0,
    borderWidth: 0.2,
    elevation: 1,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'red',
    width: 250,
    zIndex: 1,
    overflow:'scroll'
  },
  header: {
    borderWidth: 1,
    marginHorizontal: 2,
    borderColor: '#bbb',
    height: 200,
    top: 0,
    elevation: 2,
    padding: 10,
  },
  drawerRow: {
    borderBottomColor: '#bbb',
    marginHorizontal: 5,
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    flexDirection: 'row',
    padding: 5,
    marginVertical: 1,
  },
  drawerText: {
    marginLeft: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#5555ff',
  },
  profileContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profilepic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  imageNUmName: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
});
