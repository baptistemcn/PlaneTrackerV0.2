import { Text } from "react-native";
import { styled } from "nativewind";

import { ReTextProps } from "@types";

const StyledText = styled(Text);

export const ReText = ({
  children,
  fontFamily = "Regular",
  fontSize = 16,
  letterSpacing = 1,
  nativewind,
  styles = {
    fontFamily: fontFamily,
    fontSize: fontSize,
    letterSpacing: letterSpacing,
  },
  testID = "text",
}: ReTextProps) => (
  <StyledText className={nativewind} style={styles} {...{ testID }}>
    {children}
  </StyledText>
);
