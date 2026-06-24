import { View, Text, StyleSheet,Pressable} from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import coffeeOne from'@/assets/images/coffeeOne.png'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeOne}
      contentFit='cover'
      style={styles.image}>
        <Text style={styles.title}>coffee shop</Text>

        <Link href="/menu" style={{marginHorizontal:'auto'}} asChild><Pressable style={styles.button}>
          <Text style={styles.buttonText}>Our Menu</Text>
          </Pressable>
          </Link>
           <Link href="/contact" style={{marginHorizontal:'auto'}} asChild><Pressable style={styles.button}>
          <Text style={styles.buttonText}>contact us</Text>
          </Pressable>
          </Link>

      </ImageBackground>
    </View>
  )
}

export default index
const styles=StyleSheet.create({
  container:{
flex: 1,
flexDirection: 'column',
  },
  image:{
width:'100%',
height:'100%',
resizeMode:'cover',
flex:1,
justifyContent:'center',
  },
  title:{
    color: 'brown',
fontSize:42,
fontWeight: 'bold',
textAlign: 'center',
marginBotton:40
  },
   link:{
    color: 'brown',
fontSize:42,
fontWeight: 'bold',
textAlign: 'center',
textDecorationLine:'underline',
padding:4,
  },
  button:{
    height:60,
    width:150,
    borderRadius:20,
    backgroundColor:'rgba(0,0,0,0.75)',
    justifyContent:'center',
    padding:6,
    marginBottom:50,
  },
  buttonText:{
  color: 'brown',
fontSize:16,
fontWeight: 'bold',
textAlign: 'center',
padding:4,
  },
})