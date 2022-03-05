import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfClicks } from "./selectors";
import { counterButtonClicked } from "./actions";

export const ReduxCounterButton = () => {
    const numberOfClicks = useSelector(getNumberOfClicks);
    const dispatch = useDispatch();
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
        <button onClick={() => dispatch(counterButtonClicked(incrementBy))}>Click</button>
    </>
    );


}