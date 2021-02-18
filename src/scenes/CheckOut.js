import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import {CreditCardInput} from 'react-native-credit-card-input';

export default class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = { cardData: { valid: false } };
      }
    render() {
        const { onSubmit, submitted, error } = this.props;
        return (
           <View>
               <View>
          <CreditCardInput requiresName onChange={(cardData) => this.setState({ cardData })} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='Subscribe'
            disabled={!this.state.cardData.valid || submitted}
            onPress={() => onSubmit(this.state.cardData)}
          />
        </View>
           </View>
        )
    }
}
const styles=StyleSheet.create({
    buttonWrapper: {
        padding: 10,
        zIndex: 100
      },
      alertTextWrapper: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      alertIconWrapper: {
        padding: 5,
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
      },
      alertText: {
        color: '#c22',
        fontSize: 16,
        fontWeight: '400'
      },
      alertWrapper: {
        backgroundColor: '#ecb7b7',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 5,
        paddingVertical: 5,
        marginTop: 10
      }
})