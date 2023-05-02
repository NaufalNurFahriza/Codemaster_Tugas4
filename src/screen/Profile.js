import React from 'react';
import { 
   View, 
   Text,
   ScrollView,
   KeyboardAvoidingView,
   Image,
   TextInput,
   TouchableOpacity,
   StyleSheet,
   Dimensions
} from 'react-native';
const Profile = ({
   navigation,
   route
}) => {
   return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
         <ScrollView //component yang digunakan agar tampilan kita bisa discroll
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
         >
                        <Text>Profile page</Text>
            
         </ScrollView>
      </View>
   )
}
export default Profile;
