const func = () => {
  "use strict";

  const greetMe = (yourName: string) => {
    alert(`Hello ${yourName}`);
    return yourName;
  };

  greetMe("John");
};

export default func;
