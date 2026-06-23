import {StyleSheet,Appearance,Platform,SafeAreaContext,ScrollView,FlatList,View,Text,Image} from 'react-native';
import {Colors} from '@/constants/theme';
import {coffeeMenu} from '@/constants/MenuItems';
import MenuImages from '@/constants/MenuImages'



export default function MenuScreen(){
     const colorScheme = Appearance.getColorScheme()
      const theme= colorScheme==='dark' ? Colors.dark: Colors.light;
const styles= createStyles(theme,colorScheme)
const Container= Platform.OS==='web' ? ScrollView: SafeAreaContext;
return(
<Container>
   <FlatList data={coffeeMenu}
  keyExtractor={(item)=>item.id.toString()}
  renderItem={({item})=>(
   <View>
      <View>
         <Text> {item.name}</Text>
         <Text>{item.category}</Text>
         <Text>{item.price}</Text>
         <Text>{item.size}</Text>
         <Text>{item.available}</Text>
      </View>
      <Image source={MenuImages[item.id]} />
   </View>
  )} >

   </FlatList>
</Container>
)

}
 function createStyles(theme,colorScheme){
    return StyleSheet.create({
 })
}