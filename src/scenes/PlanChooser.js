import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import swap from '../images/swap.png';
import skip from '../images/skip.png';
import {PLAN} from './model/Plan';
import {Actions} from 'react-native-router-flux';
let colors = ['#C0C0C0', '#ffd700', '#45E4Ef'];
const Item = ({item, onPress, index}) => (
  <Card style={styles.item}>
    <View style={{flexDirection: 'row'}}>
      <View style={{position: 'absolute', left: 10}}>
        <Text
          style={{
            color: colors[index % colors.length],
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>

        <Text
          style={{color: '#b2c2c2', fontFamily: 'arial', fontWeight: 'bold'}}>
          {item.days} days
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#e11d74',
              fontFamily: 'arial',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            ${item.price}{' '}
          </Text>
          <Text
            style={{
              color: '#8f8f8f',
              fontFamily: 'arial',
              fontWeight: 'bold',
              fontSize: 18,
              textDecorationColor: '#000',
              textDecorationStyle: 'double',
              textDecorationLine: 'line-through',
            }}>
            ${item.oldprice}
          </Text>
          <Text
            style={{
              color: '#e11d74',
              fontFamily: 'arial',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            {' '}
            / meal
          </Text>
        </View>
      </View>
      <View style={{position: 'absolute', right: 10}}>
        <TouchableOpacity
          key={item.id}
          onPress={onPress}
          style={styles.selectoffer}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ffffff'}}>
            CHOOSE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Card>
);

export default class PlanChooser extends Component {
  renderItem = ({item, index}) => {
    return (
      <Item
        item={item}
        index={index}
        onPress={() =>
          Actions.address({
            resname: this.props.title,
            price: item.price,
            plan: item.title,
            duration: item.days,
          })
        }
      />
    );
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fffeff'}}>
        <Text style={styles.header}>Best Flexible Plan For You</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{backgroundColor: '#fffeff'}}>
          <Card style={styles.optioncard}>
            <Card.Content>
              <Image source={swap} style={{height:60,width:60}} />
              <Text style={{fontSize:18,fontWeight:'bold'}}>SWAP MEAL</Text>
              <Paragraph style={styles.cardcontent}>
                In Hurry? Swap upcoming meal with any other
              </Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.optioncard}>
            <Card.Content>
              <Image source={skip} style={{height:60,width:60}}/>
              <Text style={{fontSize:18,fontWeight:'bold'}}>SKIP MEAL</Text>
              <Paragraph style={styles.cardcontent}>
                Sudden Change In Plan? Now you can skip 3 meals in monthly
                subscription
              </Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
        <Text style={[{marginTop:20},styles.header]}>Choose Your Plan</Text>

        <FlatList data={PLAN} renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  optioncard: {
    height: 180,
    width: 250,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 5,
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginVertical: 4,
  },
  cardcontent: {
    fontSize: 16,
    color: '#888898',
  },
  header: {
    backgroundColor: '#fffeff',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 7,
  },
  item: {
    padding: 10,
    height: 90,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 4,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    backgroundColor: '#ffffff',
  },
  selectoffer: {
    backgroundColor: '#81b854',
    width: 120,
    height: 30,
    paddingHorizontal:10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
