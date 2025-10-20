import React from "react";

type CardProps = {
    name: string;
    belt: string;
    specialties: string[];
    description: string;
    titles: string[];
    image?: string;
}

const InstructorCard: React.FC<CardProps> = (props) => {
    return (
        <div className="border border-solid border-[#333333] rounded-lg hover-lift">
            <div className="relative w-full overflow-hidden rounded-t-lg md:h-96">
                <img
                    src={props.image || "instructor.jpg"}
                    alt="Instructor"
                    className="absolute inset-0 w-full h-full object-cover object-top block"
                />
                <div className="absolute bottom-0 p-4 w-full flex flex-col space-y-1 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-dark-title-primary text-2xl font-bold mb-1">{props.name}</h3>
                    <div className="rounded-full py-1 px-4 bg-dark-title-secondary text-dark-title-primary text-sm w-max hover:bg-black">
                        {props.belt}
                    </div>
                </div>
            </div>

            <div className="w-full p-4 flex flex-col space-y-3">
                <p className="text-dark-title-primary">Especialidades</p>
                <div className=" inline-flex flex-wrap space-x-2 space-y-1 ">
                    {props.specialties.map((s, i) => <div className="text-dark-title-secondary border rounded-full w-max px-3 py-0.5 text-sm " key={i}>{s}</div>)}
                </div>
                <p className="text-dark-text-primary text-base leading-relaxed">{props.description}</p>
                <div className="flex flex-row align-center">
                    <div className="text-dark-title-primary text-base  mr-2">Titulos: </div>
                    <div className=" text-sm ">{props.titles.join(", ")}</div>
                </div>
            </div>
        </div>
    );
};



export default InstructorCard;
