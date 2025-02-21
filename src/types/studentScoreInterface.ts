interface StudentScore {
    studentId: string;
    math?: number;
    literature?: number;
    foreignLanguage?: number;
    physics?: number;
    chemistry?: number;
    biology?: number;
    history?: number;
    geography?: number;
    civicEducation?: number;
    foreignLanguageCode?: string;
}

interface TopStudentScore {
    studentId: string;
    math?: number;
    literature?: number;
    foreignLanguage?: number;
    physics?: number;
    chemistry?: number;
    biology?: number;
    history?: number;
    geography?: number;
    civicEducation?: number;
    foreignLanguageCode?: string;
    totalScore: number;
}

export type { StudentScore, TopStudentScore };