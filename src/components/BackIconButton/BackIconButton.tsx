import { TouchableOpacity } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Feather";
import { GlobalColors } from "../../infrastructure/GlobalColors";

interface icon {
  icon_name: string;
  onPress?(): {};
  style?: object;
}

const BackIconButton = (props: icon) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icons name={props.icon_name} size={30} color={GlobalColors.white} />
    </TouchableOpacity>
  );
};

export default BackIconButton;
