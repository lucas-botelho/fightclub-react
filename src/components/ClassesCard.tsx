import React from 'react';

type SvgTextCardProps = {
    title: string;
    description: string;
    duration: string;
    schedule: string;
    svg: React.ReactNode[];
};

const ClassesCard: React.FC<SvgTextCardProps> = (props) => {
    const { title, description, duration, schedule, svg } = props;
    return (

        <div className="p-8 rounded-lg bg-dark-tile-primary border border-solid border-[#333333] shadow-sm hover-lift group relative flex flex-col h-full">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-tile-secondary/10 rounded-lg mb-4 group-hover:bg-dark-tile-secondary/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-8 h-8 text-dark-tile-secondary">
                    {svg}
                </svg>
            </div>
            <h3 className="text-6xl font-bold mb-4 text-dark-title-primary">{title}</h3>
            <p className="text-dark-text-primary pb-6">{description}</p>
            <div className="mt-auto space-y-4 mb-4">
                <div className="flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4 mr-2 text-dark-tile-secondary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {duration}
                </div>
                <div className="text-sm">
                    <strong className="text-dark-title-primary">Horário:</strong> {schedule}
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;
