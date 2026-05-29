import type { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface ToolBarProps {
    delimiter: string;
    wrapper: string;
    setDelimiter: Dispatch<SetStateAction<string>>;
    setWrapper: Dispatch<SetStateAction<string>>;
}

const delimiterOptions = [
    { value: "\n", label: "New Line" },
    { value: ",", label: "Comma" },
    { value: ";", label: "Semicolon" },
    { value: "\t", label: "Tab" },
];

const wrapperOptions = [
    { value: `"`, label: "Double Quote" },
    { value: `'`, label: "Single Quote" },
];

export const ToolBar = ({ delimiter, wrapper, setDelimiter, setWrapper }: ToolBarProps) => {
    return (
        <div className="w-full h-5 flex justify-center gap-5 items-center text-white">
            <p>Delimiter:</p>
            <Select value={delimiter} onValueChange={setDelimiter}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a delimiter" />
                </SelectTrigger>
                <SelectContent>
                    {delimiterOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <p>Wrapper:</p>
            <Select value={wrapper} onValueChange={setWrapper}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a wrapper" />
                </SelectTrigger>
                <SelectContent>
                    {wrapperOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}