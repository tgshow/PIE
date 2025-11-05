import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        //padding: 20
    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width:"100%",
        paddingHorizontal: 37
    },
    boxBottom:{
        height: Dimensions.get('window').height/3,
        width:"100%",
        alignItems: 'center',
        justifyContent: "center"
    }, 
    logo:{
        width: 80,
        height: 80,
    },
    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    titleInput:{
        marginLeft: 5,
        color:themas.colors.gray,
        marginTop: 20
    },
    BoxInput:{
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray
    },
    input:{
        height: '100%',
        width: '90%',
        borderRadius: 40,
        paddingLeft: 10

    },
    button:{
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    },
    textButton:{
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold'
    },
    card: {
    padding: 20,
    margin: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginBottom: 6,
    fontWeight: "600",
  },
  input2: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  button2: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    marginTop: 6,
  },
  preview: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 8,
  },
  submit: {
    backgroundColor: "#00C853",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
    
});