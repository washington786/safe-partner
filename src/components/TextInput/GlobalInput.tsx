import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { GlobalColors } from "../../infrastructure/GlobalColors";

interface Input {
  customStyle?: Object;
  config: Object;
  secureTextEntry?: boolean;
  icon: string;
}

const GlobalInput = (props: Input) => {
  return (
    <TextInput
      {...props.config}
      style={props.customStyle}
      placeholderTextColor={GlobalColors.grey.l3}
      secureTextEntry={props.secureTextEntry}
      left={<TextInput.Icon name={props.icon} />}
      autoCapitalize="none"
    />
  );
};

export default GlobalInput;
