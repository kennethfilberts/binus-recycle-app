import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import {backgroundTheme, blackTheme} from '../../assets/colors';

const RectangleWithText = () => {
  const [showRectangle, setShowRectangle] = useState([false, false, false, false, false, false]);
  const [activeRectangle, setActiveRectangle] = useState(null);

  const toggleRectangle = (index: any) => {
    const updatedRectangles = [...showRectangle];
    updatedRectangles[index] = !updatedRectangles[index];
    setShowRectangle(updatedRectangles);

    if (activeRectangle === index) {
      setActiveRectangle(null);
    } else {
      setActiveRectangle(index);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Text Got Question */}
      <View>
        <View>
          <Image source={require('./components/images/imagecard.png')} style={styles.image_background} />
          <View style={styles.header_txt_img}>
            <Text style={styles.header_text_1}>Welcome to the Curiosity Oasis!</Text>
            <Text style={styles.header_text_2}>Your go-to destination for unraveling the mysteries of recycling!</Text>
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.txt_ques}>Got Question?</Text>
        </View>
      </View>

      {/* List Question */}
      <View style={styles.box_question}>
        <Text style={styles.text_box_question}>How can I start recycling?</Text>
        <TouchableOpacity onPress={() => toggleRectangle(0)} style={styles.box}>
          <Image source={showRectangle[0] ? require('./components/images/arrowdown.png') : require('./components/images/arrow.png')} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      {showRectangle[0] && (
        <View style={styles.long_box}>
          <Text style={styles.long_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum ad laudantium cumque sapiente aliquam, voluptate labore consequatur accusamus id repudiandae quas necessitatibus! Sed asperiores expedita tenetur beatae incidunt illo?
          </Text>
        </View>
      )}

        <View style={styles.box_question_1}>
          <Text style={styles.text_box_question}>How do I know if an item is recyclable or not?</Text>
          <TouchableOpacity onPress={() => toggleRectangle(1)} style={styles.box}>
            <Image source={showRectangle[1] ? require('./components/images/arrowdown.png') : require('./components/images/arrow.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        {showRectangle[1] && (
          <View style={styles.long_box}>
            <Text style={styles.long_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum ad laudantium cumque sapiente aliquam, voluptate labore consequatur accusamus id repudiandae quas necessitatibus! Sed asperiores expedita tenetur beatae incidunt illo?
            </Text>
          </View>
        )}

        <View style={styles.box_question_2}>
          <Text style={styles.text_box_question}>What are eco hotspots and where do I find them?</Text>
          <TouchableOpacity onPress={() => toggleRectangle(2)} style={styles.box}>
            <Image source={showRectangle[2] ? require('./components/images/arrowdown.png') : require('./components/images/arrow.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        {showRectangle[2] && (
          <View style={styles.long_box}>
            <Text style={styles.long_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum ad laudantium cumque sapiente aliquam, voluptate labore consequatur accusamus id repudiandae quas necessitatibus! Sed asperiores expedita tenetur beatae incidunt illo?
            </Text>
          </View>
        )}

        <View style={styles.box_question_3}>
          <Text style={styles.text_box_question}>How do I earn more eco-coins?</Text>
          <TouchableOpacity onPress={() => toggleRectangle(3)} style={styles.box}>
            <Image source={showRectangle[3] ? require('./components/images/arrowdown.png') : require('./components/images/arrow.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        {showRectangle[3] && (
          <View style={styles.long_box}>
            <Text style={styles.long_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum ad laudantium cumque sapiente aliquam, voluptate labore consequatur accusamus id repudiandae quas necessitatibus! Sed asperiores expedita tenetur beatae incidunt illo?
            </Text>
          </View>
        )}

        <View style={styles.box_question_4}>
          <Text style={styles.text_box_question}>How can I redeem my eco-coins for rewards?</Text>
          <TouchableOpacity onPress={() => toggleRectangle(4)} style={styles.box}>
            <Image source={showRectangle[4] ? require('./components/images/arrowdown.png') : require('./components/images/arrow.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        {showRectangle[4] && (
          <View style={styles.long_box}>
            <Text style={styles.long_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum ad laudantium cumque sapiente aliquam, voluptate labore consequatur accusamus id repudiandae quas necessitatibus! Sed asperiores expedita tenetur beatae incidunt illo?
            </Text>
          </View>
        )}

        <View style={styles.box_question_5}>
          <Text style={styles.text_box_question}>Can I cancel or change a reward redemption after it's been processed?</Text>
          <TouchableOpacity onPress={() => toggleRectangle(5)} style={styles.box}>
            <Image source={showRectangle[5] ? require('./components/images/arrowdown.png') : require('./components/images/arrow.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        {showRectangle[5] && (
          <View style={styles.long_box}>
            <Text style={styles.long_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum ad laudantium cumque sapiente aliquam, voluptate labore consequatur accusamus id repudiandae quas necessitatibus! Sed asperiores expedita tenetur beatae incidunt illo?
            </Text>
          </View>
        )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: backgroundTheme,
    alignItems: 'center',
  },

  container_img: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },

  image_background: {
    resizeMode: 'cover',
  },

  header_txt_img: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  header_text_1: {
    marginLeft: 20,
    marginBottom: 25,
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    padding: 8,
    color: blackTheme,
    width: 300,
  },

  header_text_2: {
    marginLeft: 20,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    padding: 15,
    width: 340,
  },

  question: {
    marginBottom: 10,
  },

  txt_ques: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: '#142625',
  },

  box_question: {
    width: 351,
    height: 57,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },

  box_question_1: {
    width: 351,
    height: 73,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 10,
  },

  box_question_2: {
    width: 351,
    height: 73,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 10,
  },

  box_question_3: {
    width: 351,
    height: 57,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 10,
  },

  box_question_4: {
    width: 351,
    height: 73,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 10,
  },

  box_question_5: {
    width: 351,
    height: 88,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 10,
  },

  text_box_question: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    alignItems: 'center',
    padding: 5,
  },

  long_box: {
    width: 351,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 5,
  },

  long_text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    justifyContent: 'center',
    color: '#000000',
  },

  box: {
    width: 33,
    height: 33,
    borderRadius: 5,
    backgroundColor: '#FE7A6B',
    marginRight: 8,
  },

  arrow: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 8,
  },

});

export default RectangleWithText;
