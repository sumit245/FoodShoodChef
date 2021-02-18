import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {Avatar, IconButton} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import veg from '../../images/veg.png';
import nonveg from '../../images/nonveg.png';

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
  }
  isbookmarked = () => {
    Alert.alert(this.props.item.title + ' Added to Favourites 😊');
  };
  onPress = () => {
    Actions.push('reviews');
  };
  detaipage = () => {
    Actions.details({
      title: this.props.item.title,
      url: this.props.item.url,
      description: this.props.item.description,
    });
  };
  render() {
    return (
      <Card containerStyle={styles.item} key={this.props.index}>
        <View>
          <Image
            source={{uri: this.props.item.url}}
            style={styles.image}
            resizeMode="cover"
          />
          <IconButton
            icon="heart-circle"
            color="#fea5a5"
            onPress={this.isbookmarked}
            style={styles.bookmark}
            size={30}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={this.props.item.type === 'veg' ? veg : nonveg}
            height={25}
            width={25}
            style={[styles.typelogo, styles.title, {bottom: -5}]}
          />

          <TouchableOpacity onPress={this.detaipage}>
            <Text h5 style={styles.title} numberOfLines={1}>
              {this.props.item.foodname}
            </Text>
          </TouchableOpacity>
          <View style={styles.rating}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={this.onPress}>
              <Icon name="star" style={{alignSelf: 'center'}} />
              <Text adjustsFontSizeToFit={true} style={{marginHorizontal: 2}}>
                {this.props.item.rating}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text h5 style={{marginLeft:30,color:'#555',adjustsFontSizeToFit:true}} numberOfLines={2} >
              {this.props.item.foodDescription}
            </Text>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image
            size={50}
            source={{uri: this.props.item.chef}}
            style={{marginLeft: 5}}
          />
          <Text
            style={[
              styles.tags,
              {fontSize: 20, fontWeight: 'bold', marginLeft: 5},
            ]}
            numberOfLines={1}>
            {this.props.item.title}
          </Text>

          <Text
            style={[
              styles.tags,
              {marginTop: 20, left: 60, position: 'absolute', fontSize: 16},
            ]}
            numberOfLines={1}>
            {this.props.item.description}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderRightWidth: 1,
              alignItems: 'flex-start',
              width: '33%',
              borderRightColor: '#e0e0e0',
              marginBottom: 2,
            }}>
            <Text style={styles.prices} numberOfLines={1}>
              {this.props.item.plan.basic.time}
            </Text>
            <Text style={styles.prices} numberOfLines={1}>
              {this.props.item.plan.basic.amount}
            </Text>
          </View>
          <View
            style={{
              borderRightWidth: 1,
              alignItems: 'flex-start',
              width: '33%',
              borderRightColor: '#e0e0e0',
              marginBottom: 2,
            }}>
            <Text style={styles.prices} numberOfLines={1}>
              {this.props.item.plan.standard.time}
            </Text>
            <Text style={styles.prices} numberOfLines={1}>
              {this.props.item.plan.standard.amount}
            </Text>
          </View>

          <View
            style={{
              borderRightWidth: 1,
              alignItems: 'flex-start',
              width: '33%',
              borderRightColor: '#e0e0e0',
              marginBottom: 2,
            }}>
            <Text style={styles.prices} numberOfLines={1}>
              {this.props.item.plan.premium.time}
            </Text>
            <Text style={styles.prices} numberOfLines={1}>
              {this.props.item.plan.premium.amount}
            </Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 5,
    shadowOffset: {width: 2, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 5,
    paddingVertical: 2,
    paddingHorizontal: 2,
    height: 300,
    marginHorizontal: 2,
  },
  image: {
    width: '98%',
    height: 150,
    marginTop: 1,
    marginLeft: 1,
    overflow: 'hidden',
    position: 'absolute',
  },
  bookmark: {
    right: 0,
    position: 'absolute',
    color: 'white',
    zIndex: 1000,
  },
  title: {
    paddingHorizontal: 5,
    marginTop: 152,
    borderRadius: 2,
    fontSize: 22,
    fontFamily: 'georgia',
    alignSelf: 'flex-start',
    marginBottom: 0,
  },
  rating: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 5,
    marginTop: 155,
    right: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 2,
    fontSize: 18,
    fontFamily: 'georgia',
    marginBottom: 0,
  },
  tags: {
    margin: 1,
    borderRadius: 2,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  prices: {
    paddingHorizontal: 5,
    alignSelf: 'flex-start',
    margin: 1,
    color: '#706070',
    borderRadius: 2,
    fontSize: 12,
    fontWeight: 'bold',
  },
  typelogo: {
    paddingHorizontal: 5,
    marginLeft: 5,
  },
});
