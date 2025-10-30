export const ClassType = {
    BJJ_KIDS_INFANTIS: "Jiu-Jitsu Kids Infantis (4-7 anos)",
    BJJ_KIDS_INICIADOS: "Jiu-Jitsu Kids Iniciados (8-14 anos)",
    BJJ: "Jiu-Jitsu",
    BJJ_KIDS_INICIADOS_AND_ADULTS: "Jiu-Jitsu Kids Iniciados (8-14 anos) e Adultos",
    BJJ_NOGI: "Jiu-Jitsu No-Gi",
} as const;

export type ClassType = typeof ClassType[keyof typeof ClassType];
