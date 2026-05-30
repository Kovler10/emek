import { useState } from "react";
import { compact, difference, intersection, uniq } from "lodash-es";

import { ToolBar } from "./tool-bar"
import { Textarea } from "../ui/textarea"
import { ResultCard } from "./result-card"

export const DataComparison = () => {
    const [text1, setText1] = useState<string[]>([]);
    const [text2, setText2] = useState<string[]>([]);

    const [delimiter, setDelimiter] = useState<string>("\n");
    const [wrapper, setWrapper] = useState<string>(``);

    const onlyAValues = difference(compact(uniq(text1)), compact(uniq(text2)));
    const onlyBValues = difference(compact(uniq(text2)), compact(uniq(text1)));
    const bothValues = intersection(compact(uniq(text1)), compact(uniq(text2)));

    return (
        <>
            <div className="flex justify-around h-1/4 w-full text-white">
                <div className="w-1/4 h-full">
                    <Textarea placeholder="Enter your text here..." className="h-full" value={text1.join("\n")} onChange={(e) => setText1(e.target.value.split("\n"))} />
                </div>
                <div className="w-1/4 h-full">
                    <Textarea placeholder="Enter your text here..." className="h-full" value={text2.join("\n")} onChange={(e) => setText2(e.target.value.split("\n"))} />
                </div>
            </div>

            <ToolBar delimiter={delimiter} wrapper={wrapper} setDelimiter={setDelimiter} setWrapper={setWrapper} />

            <div className="w-full h-96 flex justify-around gap-4">
                <ResultCard title="Only A Values" values={onlyAValues} wrapper={wrapper} delimiter={delimiter} />
                <ResultCard title="Both Values" values={bothValues} wrapper={wrapper} delimiter={delimiter} />
                <ResultCard title="Only B Values" values={onlyBValues} wrapper={wrapper} delimiter={delimiter} />
            </div>
        </>
    )
}