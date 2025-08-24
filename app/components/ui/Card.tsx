import { ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
}

export function Card({ children }: CardContainerProps) {
    return (
        <div className="bg-white border-2 border-dashed border-green-700 rounded-2xl shadow-lg">
            {children}
        </div>
    )
}