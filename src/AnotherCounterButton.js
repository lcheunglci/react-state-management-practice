import { useState } from "react";

export const AnotherCounterButton = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    return (
    <>
        <p>You have clicked another button {numberOfClicks} times.</p>
        <label>
            Increment by: 
            <input
                value={incrementBy}
                onChange={e => setIncrementBy(Number(e.target.value))}
                type="number"
            ></input>
        </label>
        <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>Click</button>
    </>
    );


}