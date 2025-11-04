import React, {forwardRef, Fragment} from "react"

import { View,Text, TextInputProps } from 'react-native'

import {style} from "./styles"
import {MaterialIcons} from '@expo/vector-icons'; 
import { TextInput } from "react-native";
import { themas } from "../../global/themes";
import { title } from "process";


type Props = TextInputProps & {
    // IconLeft?: IconComponent,
    // IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
     onIconRigthPress?: () => void,

}

export const Input = forwardRef (()=>{
    return(
        <Fragment>
            <Text style={style.titleInput}>ENDEREÇO E-MAIL</Text>
            <View style={style.boxInput}>
                <TextInput
                    style={style.input}
                />
                <MaterialIcons
                    name="email"
                    size={20}
                    color={themas.colors.gray}
                />
            </View>
        </Fragment>
    )
})