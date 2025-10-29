const InstructorType = {
    FABIO_SENSEI: "Mestre Fabio Dorea",
    MAX_SENSEI: "Mestre Max Fersan",
    GONCALO_SENSEI: "Mestre Gonçalo Pinto"
} as const;

type InstructorType = typeof InstructorType[keyof typeof InstructorType];

export default InstructorType;