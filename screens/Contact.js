import React, { useState, useCallback } from "react";
import { Text, View, StyleSheet, Image, Linking, Platform, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "../components/CustomText";
import CONSTANTS from "../Constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //messageMaxHeight set ONCE at launch
  const [messageMaxHeight, setMessageMaxHeight] = useState(-1);

  const callback = useCallback((height) => {
    setMessageMaxHeight(height);
  }, [messageMaxHeight]);

  const sendMail = async() => {
    if (firstName && lastName && email && message) {
      let lineBreak
      if (Platform.OS === 'ios') {
        lineBreak = '\r\n'
      } else {
        lineBreak = '<br>'
      }

      const url = `mailto:lynnbentley@knobull.com?subject=Knobull App Contact ` +
                  `Email - ${firstName} ${lastName}&body=first name: ${firstName}` +
                  `${lineBreak}last name: ${lastName}${lineBreak}email: ${email}` +
                  `${lineBreak}message: ${lineBreak}${message}`
      await Linking.canOpenURL(url)
      .then(function() {
        Linking.openURL(url)
      })
      .catch(function(error) {
        console.log(error)
      })
    } else {
      Alert.alert(
        "",
        "Please fill in all fields.",
        [
          {
            text: "OK",
            style: "cancel"
          }
        ]
      )
    }
  }

  const launchLinkedIn = async() => {
    const url = 'https://www.linkedin.com/company/knobull-inc/';
    await Linking.canOpenURL(url)
    .then(function() {
      Linking.openURL(url)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollView} scrollEnabled={false}>
        <View style={styles.viewTop}>
          <CustomText style={styles.textContact}>Contact Us</CustomText>
          <TouchableOpacity style={styles.buttonLinkedIn} onPress={launchLinkedIn}>
            <CustomText style={styles.textLinkedIn}>** Check out our</CustomText>
            <Image source={require('./images/Linkedin.png')} style={styles.imageLinkedIn} />
            <CustomText style={styles.textLinkedIn}>!</CustomText>
          </TouchableOpacity>
          {/* first name */}
          <CustomText style={styles.textTitle}>First Name</CustomText>
          <TextInput
            style={styles.textInputNormal}
            value={firstName}
            onChangeText={setFirstName}
          />
          {/* last name */}
          <CustomText style={styles.textTitle}>Last Name</CustomText>
          <TextInput
            style={styles.textInputNormal}
            value={lastName}
            onChangeText={setLastName}
          />
          {/* email */}
          <CustomText style={styles.textTitle}>Email</CustomText>
          <TextInput
            style={styles.textInputNormal}
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
          />
          {/* message */}
          <CustomText style={styles.textTitle}>Message</CustomText>
          <View 
            style={styles.wrapperTextInputBig}
            onLayout={(event) => {
              //set maxHeight of message textinput ONCE at launch, otherwise will
              //expand with multiline OR textinput shrink itself on android emulator
              if (messageMaxHeight == -1) {
                callback(event.nativeEvent.layout.height);
              }
            }}
          >
            <TextInput
              style={{maxHeight: messageMaxHeight, ...styles.textInputBig}}
              value={message}
              onChangeText={setMessage}
              multiline
            />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonSubmit} onPress={sendMail}>
          <CustomText style={styles.textSubmit}>
            Submit
          </CustomText>
        </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  buttonLinkedIn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 10,
  },
  buttonSubmit: {
    backgroundColor: 'rgba(0, 116, 181, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 150,
    height: 40,
    marginVertical: 30,
  },
  imageLinkedIn: {
    top: -2,
  },
  scrollView: {
    flexGrow: 1,    //necessary for keyboardawarescrollview
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContact: {
    fontSize: CONSTANTS.TITLE_1_FONT_SIZE,
    marginTop: 40,
  },
  textInputBig: {
    backgroundColor: CONSTANTS.GRAY,
    flex: 1,
    alignSelf: 'stretch',
    marginHorizontal: 40,
    borderRadius: 5,
    paddingTop: 10,
    padding: 10,
    textAlignVertical: 'top',   //for android only
  },
  textInputNormal: {
    backgroundColor: CONSTANTS.GRAY,
    alignSelf: 'stretch',
    height: 40,
    marginHorizontal: 40,
    borderRadius: 5,
    padding: 10,
  },
  textLinkedIn: {
    fontSize: 14,
  },
  textSubmit: {
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
    color: 'white',
  },
  textTitle: {
    fontSize: CONSTANTS.TITLE_3_FONT_SIZE,
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 5,
  },
  viewTop: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapperTextInputBig: {
    flex: 1,
    alignSelf: 'stretch',
  }
});

export default Contact;
