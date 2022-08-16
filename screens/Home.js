import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import CustomText from "../components/CustomText";



const TITLE_1_FONT_SIZE = 40;
const TITLE_2_FONT_SIZE = 30;
const TITLE_3_FONT_SIZE = 18;
const TITLE_4_FONT_SIZE = 12;
const GRAY = 'rgba(230, 230, 230, 1)';
const LIGHT_GRAY = 'rgba(240, 240, 240, 1)';

function Home() {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} scrollEnabled={false}>
          <View style={styles.viewWelcome}>
            <CustomText style={styles.textWelcome}>Welcome!</CustomText>
            <View style={styles.searchBox}>
              <TextInput 
                style={styles.textInput}
                onChangeText={setQuery}
                value={query}
                placeholder={'search here...'}
              />
              <TouchableOpacity>
                <Image
                  source={require('./images/search.png')}
                  style={styles.imageSearch}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewNews}>
            <CustomText style={styles.textNews}>News</CustomText>
            <View style={styles.containerNews}>
              {/* item 1 */}
              <TouchableOpacity style={styles.itemNews}>
                <View style={styles.containerImage}>
                  <Image
                    source={require('./images/HomePage1.png')}
                    style={styles.imageNews}
                  />
                </View>
                <View style={styles.descriptionNews}>
                  <CustomText style={styles.textNewsItem1}>Health</CustomText>
                  <CustomText style={styles.textNewsItem2}>The Diabetic Fat Spiral</CustomText>
                </View>
              </TouchableOpacity>
              {/* item 2 */}
              <TouchableOpacity style={styles.itemNews}>
                <View style={styles.containerImage}>
                  <Image
                    source={require('./images/HomePage2.png')}
                    style={styles.imageNews}
                  />
                </View>
                <View style={styles.descriptionNews}>
                  <CustomText style={styles.textNewsItem1}>Finance</CustomText>
                  <CustomText style={styles.textNewsItem2}>Essential Tips On How To Get A Credit Card</CustomText>
                </View>
              </TouchableOpacity>
              {/* item 3 */}
              <TouchableOpacity style={styles.itemNews}>
                <View style={styles.containerImage}>
                  <Image
                    source={require('./images/HomePage3.png')}
                    style={styles.imageNews}
                  />
                </View>
                <View style={styles.descriptionNews}>
                  <CustomText style={styles.textNewsItem1}>Home {'&'} Family</CustomText>
                  <CustomText style={styles.textNewsItem2}>Anniversary Party Planning</CustomText>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonMore}>
              <CustomText style={styles.textMore}>More...</CustomText>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonMore: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GRAY,
    marginVertical: 15,
    width: 90,
    height: 30,
    borderRadius: 10,
  },
  containerImage: {
    flex: 1,
  },
  containerNews: {
    flex: 1,
    alignSelf: 'stretch',
  },
  descriptionNews: {
    flex: 2.5,
    marginHorizontal: 15,
    marginVertical: 5,
    height: 50,
  },
  imageNews: {
    height: '100%',
  },
  imageSearch: {
    width: 25,
    height: 25,
  },
  itemNews: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: GRAY,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: LIGHT_GRAY,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GRAY,
    alignSelf: 'stretch',
    marginHorizontal: 50,
    marginVertical: 20,
    borderRadius: 25,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  textInput: {
    flex: 1,
  },
  textMore: {
    fontSize: TITLE_3_FONT_SIZE,
  },
  textNews: {
    fontSize: TITLE_2_FONT_SIZE,
    marginVertical: 20,
  },
  textNewsItem1: {
    fontSize: TITLE_4_FONT_SIZE,
    color: 'orange',
  },
  textNewsItem2: {
    fontSize: TITLE_3_FONT_SIZE,
  },
  textWelcome: {
    fontSize: TITLE_1_FONT_SIZE,
  },
  viewNews: {
    flex: 1.8,
    backgroundColor: LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewWelcome: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home;