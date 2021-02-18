import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card, Text} from 'react-native-elements';
import veg from '../../images/veg.png';
import nonveg from '../../images/nonveg.png';
export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card containerStyle={styles.item} key={this.props.index}>
        <View>
          <Image
            source={{uri: this.props.item.imageURL}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={{marginTop:150,marginLeft:5,color:'#868588',fontSize:18,paddingHorizontal:10}}>
          {this.props.item.day}
        </Text>
        <View style={{flexDirection: 'row'}}>
            <Image source={this.props.item.type==='veg'?veg:nonveg} height={25} width={25} style={styles.typelogo} />
            <Text style={styles.title}>
              {this.props.item.name}
            </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 5,
    paddingVertical: 2,
    paddingHorizontal: 2,
    height: 230,
    bottom:2,
    width: 320,
    marginHorizontal: 2,
    marginVertical:8
  },
  image: {
    width: 306,
    height: 150,
    marginTop: 1,
    marginLeft: 4,
    position: 'absolute',
  },
  title: {
    paddingHorizontal: 5,
    fontWeight:'bold',
    fontSize: 20,
    fontFamily: 'oswald',
    alignSelf: 'flex-start',
  
  },
  typelogo:{
    paddingHorizontal: 5,
    marginLeft:5
  }
});
