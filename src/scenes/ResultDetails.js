import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import CalenderStrip from 'react-native-calendar-strip';
import {MENU} from './model/Menu';
import MenuItem from './Components/MenuItem';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const renderItem = ({item, index}) => <MenuItem index={index} item={item} />;

export default class ResultDetails extends Component {
  chooser=()=>{
    Actions.planchooser({title:this.props.title});
  }
  dateSelected(date) {
    console.log(date);
  }
  render() {
    return (
      <View style={styles.resultdetails}>
        <Text style={styles.header}>Plan Over View</Text>
        <CalenderStrip
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{
            type: 'background',
            duration: 50,
            highlightColor: 'red',
            
          }}
          style={{
            height: 50,
            paddingTop: 5,
            borderTopColor: '#bdbdbd',
            borderTopWidth: 1,
            borderBottomColor: '#bdbdbd',
            borderBottomWidth: 1,
            marginStart: 5,
            marginEnd: 5,
            paddingBottom: 5,
          }}
          calendarColor={'#fdfdfd'}
          responsiveSizingOffset={1}
          shouldAllowFontScaling={false}
          onDateSelected={(date) => this.dateSelected(date)}
          dateNumberStyle={{color: '#8c8c8c'}}
          dateNameStyle={{color: '#7c7c7c'}}
          selectedDate={Date.now()}
          highlightDateNumberStyle={{color: 'white'}}
          highlightDateNameStyle={{color: 'white'}}
          disabledDateNameStyle={{color: 'grey'}}
          showMonth={false}
          scrollable
          leftSelector={[]}
          rightSelector={[]}
          
        />
          <FlatList
            contentContainerStyle={{marginLeft: 5}}
            data={MENU}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        
        <ScrollView style={styles.footer}
        showsVerticalScrollIndicator={false}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              borderBottomColor: '#ededed',
              borderBottomWidth: 1,
              justifyContent: 'flex-start',
              padding:5
            }}>
            {this.props.title}
          </Text>
          <Text style={{fontSize:16,justifyContent:'flex-start',color:'#585855'}}>
            {this.props.description} {'\n'} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </Text>
          </ScrollView>
          <TouchableOpacity
          onPress={this.chooser}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: '#ffffff',
              backgroundColor: '#02e002',
              fontSize: 28,
              width:'100%',
              
              paddingHorizontal:'10%',
              fontWeight: 'bold',
            }}>
            {' '}
            CHOOSE YOUR PLAN{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  resultdetails: {
    flex: 1,
  },
  card: {
    elevation: 2,
    width: '97%',
    height: 150,
    margin: 5,
  },
  header: {
    height: 50,
    backgroundColor: '#ededed',
    fontSize: 20,
    color: 'black',
    paddingTop: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
    elevation: -1,
    margin: 5,
  },
  footer: {
    overflow: 'scroll',
    padding: 10,
    height:200,
    borderColor: '#ededed',
    margin: 5,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
