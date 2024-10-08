import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export const RiveAnimation = () => {
  
  const { rive, RiveComponent } = useRive({
    src: "./icon.riv", 
    stateMachines: "State Machine 1",  
    autoplay: true,
  });

  // State for screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  
  const button3Input = useStateMachineInput(rive, "State Machine 1", "button 3");

  return (
    <div className="App">
      <RiveComponent
        style={{ height: isMobile ? "400px" : "600px", width: isMobile ? "400px" : "600px" }}  // Adjust dimensions based on screen size
        onClick={() => button3Input && button3Input.fire()}  // Fire the button 3 input on click
      />
    </div>
  );
};

export default RiveAnimation;
