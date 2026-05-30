import { CopyIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ResultCardProps {
    title: string;
    values: string[];
    wrapper: string;
    delimiter: string;
}

export const ResultCard = ({ title, values, wrapper, delimiter }: ResultCardProps) => {

    const displayValue = values.map(value => `${wrapper}${value}${wrapper}`).join(`${delimiter}${delimiter === '\n' ? '' : '\n'}`);

    const handleCopy = () => {
        navigator.clipboard.writeText(displayValue);
    }

    return (
        <Card className="w-1/3">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
                <div className="h-[90%] max-h-[260px] overflow-y-auto">
                    <pre>{displayValue}</pre>
                </div>
                <div className="h-[10%] flex justify-end">
                    <Button variant="outline" onClick={handleCopy}><CopyIcon /></Button>
                </div>
            </CardContent>
        </Card>
    )
}