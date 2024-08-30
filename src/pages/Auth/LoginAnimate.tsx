
import { useLottie } from "lottie-react";
import laptop from "../../assets/register/11067-registration-animation.json";

const LoginAnimate  = () => {
  const options = {
    animationData: laptop,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LoginAnimate;