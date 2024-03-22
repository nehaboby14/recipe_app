import React,{useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

const SigninScreen = ({navigation}: {navigation: any}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        const handleCheckEmail = (email:string) => {
            console.log(email);
            let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
            if (reg.test(email) === false) {
              console.log("Email is Not Correct");
              return 'Email-id is incorrect';
            }
            else {
              console.log("Email is Correct");
              return null;
            }
          }
          
    
        const checkPasswordValidity= (value:string) => {
            const isValidLength = /^.{8,16}$/;
            if(!isValidLength.test(value)){
                return 'Password must be 8-16 characters long.';
            }
            const isNonWhiteSpace=/^\S*$/;
            if(!isNonWhiteSpace.test(value)){
                return 'Password must not contain whitespaces.';
            }
            const isContainsUppercase = /^(?=.*[A-Z]).*$/;
            if(!isContainsUppercase.test(value)){
                return 'Password must have at least one uppercase character.';
            }
            const isContainsLowercase = /^(?=.*[a-z]).*$/;
            if(!isContainsLowercase.test(value)){
                return 'Password must have at least one lowercase character.';
            }
            const isContainsNumber = /^(?=.*[0-9]).*$/;
            if(!isContainsNumber.test(value)){
                return 'Password must have at least one digit.';
            }
            return null;
        };

        const showAlert = (message: string) =>
        Alert.alert('Error', message, [
      {
        text: 'Ok',
        style: 'cancel',
      },],
    {
      cancelable: true,
    },);

        const handleLogin =() =>{
            const checkPassword= checkPasswordValidity(password)
            const checkEmail = handleCheckEmail(email)
            if(!checkEmail && !checkPassword){
                handleLoginApi();
            } else{
                if(checkEmail==null){
                showAlert(checkPassword!)
                } else{
                    showAlert(checkEmail)
                }
            }
        }
        const [loading,setLoading] = useState(false)
        const handleLoginApi = async () => {
          try {
            setLoading(true);
            const response = await axios.post('https://dummyjson.com/auth/login',{username: 'kminchelle',password: '0lelplR',});
            if (response.status === 200) {
              setLoading(false);
              navigation.push('HomeScreen');
            } else {
              showAlert('Login failed. Please check your credentials.');
              setLoading(false);
            }
          } catch (error) {
            showAlert(error.message)
            setLoading(false);
          }
        };
        

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground  style = {styles.root}
        source = {{uri: 'https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-food-western-food-simple-poster-background-image_25130.jpg'}}>
      <View style = {styles.container}>
      <Text style={styles.SigninText}>Sign In</Text>
      
      <View style={styles.boxview}>
        <TextInput style={styles.emailpwText}
        placeholder="Email id"
        value={email}
        onChangeText={text =>setEmail(text)}
        />
     </View>
     <View style={styles.boxview}>
        <TextInput style={styles.emailpwText}
        placeholder='Password'
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
        />
      </View>
        
      <TouchableOpacity style={styles.loginbutton}
      onPress={handleLogin}>
        {loading ? (
      <ActivityIndicator size="small" color="white" />
        ) : (
      <Text style={styles.buttonText}>SUBMIT</Text>
        )}
      </TouchableOpacity> 
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    root: {
      flex:1, 
    
    },
    container:{
      flex:1,
      alignItems:'center'
    },
    backgroundimg:{
      width:100,
        height:100,
        borderRadius:12,
        marginRight:12,
        alignSelf:"center"
    },
    SigninText:{
      fontWeight:'bold',
      fontSize:50,
      color:'#4682b4',
      marginBottom:30,
      marginTop:120,
      textShadowColor:'black',
      textShadowRadius:5,
    },
    emailpwText:{
      color:'black',
      fontSize:20,
    },
    boxview:{
        borderWidth:0.5,
        borderRadius:20,
        marginBottom:20,
        height:50,
        width:"80%",
        backgroundColor:'white'
    },
    textFailed:{
        fontSize:10,
        color:'#f8f8ff',
        marginBottom:10,
    },
    buttonText:{
        color:'#f8f8ff',
        fontSize:20,
        alignItems:"center",
      },
    loginbutton:{
        backgroundColor:'#4682b4',
        width:"50%",
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        marginTop:40,
    },
  });
  export default SigninScreen;
