import type { Dispatch, SetStateAction } from "react";

import { Input } from "../ui/input";

interface ToolBarProps {
    delimiter: string;
    wrapper: string;
    setDelimiter: Dispatch<SetStateAction<string>>;
    setWrapper: Dispatch<SetStateAction<string>>;
}

export const ToolBar = ({ delimiter, wrapper, setDelimiter, setWrapper }: ToolBarProps) => {
    return (
        <div className="w-full h-5 flex justify-around  text-white">
            <div className="flex items-center gap-2 w-1/4">
                <p>Delimiter:</p>
                <Input type="text" placeholder="Enter a delimiter" value={delimiter} onChange={(e) => setDelimiter(e.target.value)} />
            </div>
            <div className="flex items-center gap-2 w-1/4">
                <p>Wrapper:</p>
                <Input type="text" placeholder="Enter a wrapper" value={wrapper} onChange={(e) => setWrapper(e.target.value)} />
            </div>
        </div>
    )
}