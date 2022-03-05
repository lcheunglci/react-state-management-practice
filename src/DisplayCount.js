import { useRecoilValue } from "recoil";
import { numberOfClicksSelector } from "./numberOfClicksSelector";

export const DisplayCount = () => {
    const numberOfCLicks = useRecoilValue(numberOfClicksSelector);

    return (
        <h2>
            Number of clicks: {numberOfCLicks}
        </h2>
    )
};
