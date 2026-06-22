import {Stylesheet} from 'react-native';
import {Colors} from '@/constants/theme';

export default function MenuScreen(){
     const colorScheme = Appearance.getColorScheme()
      const theme= colorScheme==='dark' ? Colors.dark: Color.light;
const styles= createStyles(theme,colorScheme)

}
 function createStyles(theme,colorScheme){
    return StyleSheet.create({
 })
}