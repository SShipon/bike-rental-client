
import { useLottie } from "lottie-react";
import laptop from "../../assets/register/38435-register.json";

const RegisterAnimate  = () => {
  const options = {
    animationData: laptop,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default RegisterAnimate;