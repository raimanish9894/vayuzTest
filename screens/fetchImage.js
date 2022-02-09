import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React,{ useState } from 'react';


const FetchImage = ({navigation}) => {

    const [Url, setUrl] = useState();

    const dogPhotos = () => {
        fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(result => {
          console.log(result);
          console.log(result.message);
          setUrl(result.message);
          alert(result.status);
        })
        
      };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={dogPhotos} style={styles.button1}>
        <Text style={styles.txt}>Fetch Image</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Image Screen',{
            image: Url
        })} style={styles.button2}>
        <Text style={styles.txt}>Display Image</Text>
        </TouchableOpacity>
    </View>
  );
};

export default FetchImage;

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    button1:{
        width:'50%',
        height:80,
        backgroundColor:'yellow',
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:24
    },
    button2:{
        width:'50%',
        height:80,
        backgroundColor:'grey',
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    txt:{
        fontSize:18,
        fontWeight:'700',
        lineHeight:26
    },
});

