import {StyleSheet,Appearance,Platform,SafeAreaContext,ScrollView,FlatList,View,Text,Image} from 'react-native';
import {Colors} from '@/constants/theme';
import {coffeeMenu} from '@/constants/MenuItems';
import MenuImages from '@/constants/MenuImages'

export default function MenuScreen(){
     const colorScheme = Appearance.getColorScheme()
      const theme= colorScheme=== 'dark' ? Colors.dark: Colors.light;
const styles= createStyles(theme,colorScheme)
const Container= Platform.OS==='web' ? ScrollView: SafeAreaContext;
const seperatorComp=<View style={styles.seperator}/>
const headerComp=<Text>Top of list</Text>
const footerComp=<Text>End of menu</Text>
return(
<Container>
   <FlatList data={coffeeMenu}
  keyExtractor={(item)=>item.id.toString()}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.contentContainer}
  ItemSeparatorComponent={seperatorComp}
  ListHeaderComponent={headerComp}
  ListFooterComponent={footerComp}
  ListFooterComponentStyle={styles.footerComp}
  ListEmptyComponent={<Text>No Items</Text>}

  renderItem={({item})=>(
   <View style={styles.row}>
      <View  style={styles.menuTextRow}>
         <Text style={styles.menuItemName}> {item.name}</Text>
         <Text>{item.category}</Text>
         <Text>{item.price}</Text>
         <Text>{item.size}</Text>
         <Text>{item.available}</Text>
      </View>
      <Image source={MenuImages[item.id]} style={styles.menuImage} />
   </View>
  )} >

   </FlatList>
</Container>
)

}
 function createStyles(theme,colorScheme){
    return StyleSheet.create({
      contentContainer:{
         paddingTop:10,
         paddingBottom:20,
         paddingHorizontal:12,
         backgroundColor:theme.background
      },
      seperator:{
         height:1,
         backgroundColor:colorScheme ==='dark'?'papayawhip' : '#000',
         width:'100%',
         maxWidth:300,
         marginHorizontal:'auto',
         marginBottom: 20,
      },
      footerComp:{

         marginHorizontal:'auto',
      },
      row:{
         flexDirection:'row',
         width: '100%',
         maxWidth:600,
         height:100,
         marginBottom:10,
         borderStyle: 'solid',
         borderColor: colorScheme=== 'dark' ? "papayawhip" : '#000',
         borderWidth:1,
         borderRadius:20,
         overflow: 'hidden',
         marginHorizontal:'auto'
      },
      menuTextRow:{
         width: '65%',
         paddingTop: 10,
         paddingLeft: 10,
         paddingRight: 5,
         flexGrow: 1,
      },
      menuItemName:{
         fontSize: 18,
         textDecorationLine: 'underline',
      },
      menuItemText:{
       color: theme.text,  
      },
      menuImage:{
         width:100,
         height: 100
      }
 })
}