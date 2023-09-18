// 1. { useState } is needed to import so that we can access the state info from React for our Toggle component

import React, { useState }  from "react";

function Toggle() {

  // 2. Setting up the initial state (i.e. setting our getter variable of "isOn" to false because the toggle button should render as being OFF when first rendered)

  let [isOn, setIsOn] = useState(false); 
    // Now, if we change our false to true in our useState function, our toggle button should render with ON instead of OFF in the browser
    // "setIsOn" is our setter function that allows us to update our toggle state
  
  function handleClick() {

    // 5. Here, we call our setter function ("setIsOn()") using our handler function ("handleClick()") to update our state variable

    setIsOn((isOn) = !isOn);
  }

  // 6. To get our color property to change with each click event, we set the "color" variable to a ternary where when our toggle component "isOn" (meaning the button is showing ON) the button will be red but when it "!isON" (meaning the button is showing OFF) it is white

  const color = isOn ? "red" : "white";

  return (

    // 3. After setting the initial state for our toggle component, we then declare that new state variable (isOn) in our return value as a ternary to determine what text to display in the button depending on what "state" the button is at that time (i.e. ON or OFF)

    // 4. Once the ternary is set, we add in our onClick event handler to our button followed by defining that handler callback function above the return 

    <button style={{background: color}}  onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
    // 7. Finally, we call that "color" variable in our style part of our button element 
  );
}

export default Toggle;
