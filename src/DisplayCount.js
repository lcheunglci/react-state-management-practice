import { useRecoilValue } from "recoil";
import { counterState } from "./counterState";

export const DisplayCount = () => {
    const NumberOfClicks = useRecoilValue(counterState);

    return (
        <h2>
            Number of clicks: {NumberOfClicks}
        </h2>
    )
};
