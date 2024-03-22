import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
const HomeScreen = (props: Props) =>{
   const navi = useNavigation();



const [dataSource,setDataSource] = useState([])
const [loading,setLoading] = useState(true)
useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.sampleapis.com/recipes/recipes/`);
        setDataSource(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setLoading(false);
      }
    };
fetchData();
},[]);



    return (
        
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.screenTitle}>Recipes</Text>
            {loading ? (
      <ActivityIndicator size="large" color="#4682b4" />
        ) : (
            <FlatList style = {styles.flatlistStyle}
            data={dataSource}
            renderItem={({ item }) =>(
            <TouchableOpacity style = {styles.flatlistStyle}
               onPress={() => { navi.navigate( 'RecipesScreen', {item})}}>
            <View style = {styles.listItemBackground}>
                <Image style = {styles.image}
                source={ item.photoUrl ?  { uri:item.photoUrl }: require('../../images/seconditemimg.jpeg') }
                 />
                    <View style = {styles.itemDetails} >
                    <Text style = {styles.itemTitle}>{item.title}</Text>
                    <Text style = {styles.itemDetails}>{item.course}</Text>
                    <View style = {styles.timeDetails}>
                    <Text style = {styles.timeDetails}>Time:{item.totalTime} mins</Text>
                    
                    </View>
                    </View>
            </View>
            </TouchableOpacity>
    )}/>
    )}
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffebcd',
        paddingTop:40,
        paddingHorizontal:20,
        alignItems:'center',
    },
    root:{
        flex:1
    },
    screenTitle:{
            fontWeight:'bold',
            fontSize:40,
            color:'#4682b4',
            marginBottom:30,
            marginTop:3,
    },
    flatlistStyle:{
        flexGrow:1,
        width:"100%",
    },
    listItemBackground:{
        backgroundColor:'#4682b4',
        borderWidth:0.5,
        borderRadius:30,
        flex:1,
        alignItems:'stretch',
        flexDirection:'row',
        marginVertical:15,
        padding:12
    },
    itemTitle:{
        marginTop:10,
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    },
    itemDetails:{
        fontSize:15,
        color:'white',
        flexDirection:'column',
        marginRight:15,
    },
    timeDetails:{
        fontSize:12,
        color:'white',
        flexDirection:'row',
        paddingTop:10,
    },
    image:{
        width:100,
        height:100,
        borderRadius:12,
        marginRight:12,
        alignSelf:"center"
    },
});
export default HomeScreen;