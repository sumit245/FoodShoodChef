import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import {
  State,
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import PhoneInput from 'react-native-phone-number-input';
import LoginImage from '../images/LoginImage.png';
import emailIcon from '../images/emailIcon.png';
import fbicon from '../images/fbicon.png';
import googleIcon from '../images/googleIcon.png';
import {Actions} from 'react-native-router-flux';
import {GoogleLogin} from 'react-google-login';

const {width, height} = Dimensions.get('window');
const responseGoogle = (response) => {
  console.log(response);
};

class AuthScene extends Component {
  doubleTapRef = React.createRef();
  _onSkip = (event) => {
    if (event.nativeEvent.state === State.END) {
      Actions.replace('home');
    }
  };

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <Image
          source={LoginImage}
          style={{
            flex: 1,
            height: height - (height / 2 + 100),
            marginHorizontal: 2,
          }}
          resizeMode="cover"
        />
        <TapGestureHandler
          onHandlerStateChange={this._onSkip}
          numberOfTaps={1}
          ref={this.doubleTapRef}>
          <Animated.View style={styles.skip}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Skip{' '}
            </Text>
          </Animated.View>
        </TapGestureHandler>

        <View
          style={{
            height: height / 2 + 100,
            justifyContent: 'center',
            backgroundColor: '#ff0080',
            marginLeft: 2,
          }}>
          <View style={styles.mobin}>
            <PhoneInput
              placeholder="Enter Mobile Number"
              defaultCode="CA"
              withDarkTheme
              withShadow
            />
          </View>

          <TouchableOpacity>
            <Animated.View
              style={{
                ...styles.btnOTP,
                backgroundColor: '#000000',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Send OTP
              </Text>
            </Animated.View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 2,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
              }}>
              OR
            </Text>
          </View>
          <TouchableOpacity>
            <Animated.View style={styles.buttonEmail}>
              <Image
                source={emailIcon}
                style={{
                  alignContent: 'flex-start',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}
              />
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Continue with Email
              </Text>
            </Animated.View>
          </TouchableOpacity>

          <View style={styles.social}>
            <TouchableOpacity>
              <Animated.View style={styles.buttonFacebook}>
                <Image
                  source={fbicon}
                  style={{
                    alignContent: 'flex-start',
                    justifyContent: 'space-between',
                  }}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {' '}
                  Facebook{' '}
                </Text>
              </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.googleLogin}>
              <Animated.View style={styles.buttonGoogle}>
                <Image
                  source={googleIcon}
                  style={{
                    alignContent: 'flex-start',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                  }}
                />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> Google </Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 5,
              justifyContent: 'flex-end',
            }}>
            By Continuing,you agree to our terms and conditions{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonEmail: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  buttonFacebook: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    width: width / 2 - 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  buttonGoogle: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    width: width / 2 - 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 5,
  },
  btnOTP: {
    backgroundColor: '#cc000000',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  mobin: {
    height: 65,
    fontSize: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  skip: {
    height: 40,
    zIndex: 1,
    width: 80,
    borderRadius: 20,
    backgroundColor: '#131216',
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    right: 5,
  },
});

export default AuthScene;
