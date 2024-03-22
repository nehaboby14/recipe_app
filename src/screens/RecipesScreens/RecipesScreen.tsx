
import {SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions, Image,} from 'react-native';
import React from 'react';

const dimensions = Dimensions.get('window');   
const imageWidth = dimensions.width;
const RecipesScreen = ({route}) =>{
    return(
        <SafeAreaView style = {styles.container}>
        <ScrollView style = {styles.container}>
        <View style = {styles.container}>
        <Image  style={styles.image}
             source = {{uri:route.params.item.photoUrl}}  />
            
        <Text style = {styles.itemTitle}>{route.params.item.title}</Text>
        <Text style = {styles.itemCourse}>Course: {route.params.item.course}</Text>
        {route.params.item.cuisine ? (
        <Text style={styles.itemCuisine}>Cuisine: {route.params.item.cuisine}</Text>) : null}
        {route.params.item.mainIngredient ?(
        <Text style = {styles.itemDetails}>Main Ingredient: {route.params.item.mainIngredient}</Text>) : null}
        <Text style = {styles.itemDetails}>Prep time:{route.params.item.prepTime}   Cook time:{route.params.item.cookTime}   Total time:{route.params.item.totalTime}</Text>
        <Text style = {styles.itemDetails}>Ingredients:</Text>
        <Text style = {styles.itemDetails}>{route.params.item.ingredients}</Text>
        <Text style = {styles.itemDetails}>Directions:</Text>
        <Text style = {styles.itemDetails}>{route.params.item.directions}</Text>
        <Text>{'\n'}</Text>
        {route.params.item.calories ? (
        <Text style={styles.itemDetails}>Nutrional score {'\n'}Calories: {route.params.item.calories}</Text>) : null}
        {route.params.item.fat ? (
        <Text style={styles.itemDetails}>Fat: {route.params.item.fat}</Text>) : null}
        {route.params.item.cholestrol ? (
        <Text style={styles.itemDetails}>Cholestrol: {route.params.item.cholestrol}</Text>) : null}
        {route.params.item.sodium ? (
        <Text style={styles.itemDetails}>Sodium: {route.params.item.sodium}</Text>) : null}  
        {route.params.item.sugar ? (
        <Text style={styles.itemDetails}>Sugar: {route.params.item.sugar}</Text>) : null}
        {route.params.item.carbohydrate ? (
        <Text style={styles.itemDetails}>Carbohydrate: {route.params.item.carbohydrate}</Text>) : null}
        {route.params.item.fiber ? (
        <Text style={styles.itemDetails}>Fiber: {route.params.item.fiber}</Text>) : null}
        {route.params.item.protein ? (
        <Text style={styles.itemDetails}>Protein: {route.params.item.protein}</Text>) : null}   
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fffff0',
      paddingTop:5,
      paddingBottom:20,
    },
    image:{
      borderRadius:12,
      alignSelf:'center',
      height: 300, 
      width: imageWidth,
      resizeMode:'cover'
    },
    itemTitle:{
        marginTop:10,
        fontSize:30,
        color:'#4682b4',
        fontWeight:'bold',
        textAlign:'left',
        marginLeft:10
      },
      itemCourse:{
        marginTop:5,
        fontSize:25,
        color:'#4682b4',
        alignItems:'center',
        textAlign:'left',
        marginLeft:10
      },
      itemCuisine:{
        marginTop:5,
        fontSize:24,
        color:'#4682b4',
        textAlign:'left',
        marginLeft:10
      },
      itemDetails:{
        marginTop:5,
        fontSize:20,
        color:'#4682b4',
        textAlign:'left',
        marginLeft:10
      }
})
export default RecipesScreen;
