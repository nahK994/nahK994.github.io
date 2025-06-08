import { ReactNode } from "react";

interface CardContainerProps {
    children: ReactNode;
}

export function Card({ children }: CardContainerProps) {
    return (
        <div className="bg-white border-2 border-dashed border-violet-700 rounded-2xl shadow-lg opacity-0 animate-fadeIn">
            {children}
        </div>
    )
}