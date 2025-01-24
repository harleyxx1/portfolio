"use client";

import { LottieOptions, useLottie } from "lottie-react";
import { CSSProperties } from "react";

interface LottieComponentProps {
  animationData: unknown;
  style?: CSSProperties;
  loop: boolean;
}

const LottieComponent = (props: LottieComponentProps) => {
  const options: LottieOptions<"svg"> = {
    animationData: props.animationData,
    loop: props.loop,
    style: { ...styles.lottieStyle, ...props.style },
  };

  const { View } = useLottie(options);
  return <>{View}</>;
};

export default LottieComponent;

const styles = {
  lottieStyle: {
    height: "100%",
  },
};
