import React, {forwardRef, Fragment} from "react"
import { LegacyRef } from 'react';


import { View,Text, TextInputProps,TextInput, TouchableOpacity } from 'react-native'

import {style} from "./styles"
import {FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons'; 
import { themas } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons >>;


type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void,

}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput>| null)=>{
    const {IconLeft, IconRight, IconLeftName, IconRightName, title,  onIconLeftPress, onIconRigthPress, ...rest } = Props
    
    const calculatorSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%'
        }else if (IconLeft || IconRight) {
            return '90%'
        }else {
            return '100%'
        }
    }
        const calculatorSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 10;
        }else if (IconLeft || IconRight) {
            return 10;
        }else {
            return 20;
        }
    }
    
    
    return(
        <Fragment>
            <Text style={style.titleInput}>{title}</Text>
            <View style={[style.boxInput, {paddingLeft: calculatorSizePaddingLeft()}]}>
                {IconLeft && IconLeftName &&(
                <TouchableOpacity onPress={onIconLeftPress}>
                    <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
                </TouchableOpacity>
                )}
                <TextInput
                style={[style.input, { width: calculatorSizeWidth() }

                ]}
                {...rest}
                />
                
                {IconRight && IconLeftName &&(
                <TouchableOpacity onPress={onIconRigthPress}>
                    <IconRight name={ IconRightName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
                </TouchableOpacity>
                )}
                
            </View>
        </Fragment>
    )
})