import { useState } from "react";

export const CounterButton = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    return (
        <>
        <p>You have clicked the button {numberOfClicks} times.</p>
        <button
            onClick={() => setNumberOfClicks(numberOfClicks + 1)}>
            Click
        </button>
        
        </>
    )

}