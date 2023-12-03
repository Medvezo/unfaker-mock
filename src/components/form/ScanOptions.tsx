import { RadioGroup, Radio } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";

export default function ScanOptions({
    setOption,
}: {
    setOption: Dispatch<SetStateAction<null | string>>;
}) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOption(event.target.value);
    };

    return (
        <RadioGroup
            label="Select your processing option"
            color="warning"
            isRequired
            className="mt-20 "
            onChange={handleChange} 
        >
            <Radio value="real-time" description="Will give result now" >
                Real Time
            </Radio>
            <Radio value="background" description="Will send results to email">
                Background
            </Radio>
        </RadioGroup>
    );
}
