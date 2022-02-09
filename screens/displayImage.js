import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const DisplayImage = ({route, navigation}) => {

    
  return (
    <View style={styles.container}>
      <Image source={{uri:route.params.image}} style={styles.photo}/>
    </View>
  );
};

export default DisplayImage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    photo:{
        resizeMode:'contain',
        width:"80%",
        height:"80%"
    },
});
