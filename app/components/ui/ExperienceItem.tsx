"use client";
import { Experience } from "@/content/types";
import Popover from '@mui/material/Popover';
import { useState } from "react";

type ExperienceProps = {
    item: Experience;
};

export function ExperienceItem({ item }: ExperienceProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} className="flex bg-white rounded-2xl text-lg px-2 md:px-6 py-3 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300">
                <div className="text-2xl">{item.emoji}</div>
                <div className="flex flex-col ml-6">
                    <h3 className="text-xl font-weight-800 text-green-800">{item.role}</h3>
                    <span className="text-blue-600">{item.company}</span>
                    <span className="text-gray-600">{item.period}</span>
                </div>
            </div>

            <Popover
                id="mouse-over-popover"
                sx={{ pointerEvents: 'none' }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                slotProps={{ paper: { style: { borderRadius: '8px' } } }}
            >
                <div className="p-4 text-gray-600">
                    <div className="font-semibold">Responsibilities</div>
                    <ul className="list-disc list-inside">
                        {item.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                </div>
            </Popover>
        </>
    )
}