export interface Experience {
    company: string
    role: string
    start: string
    end: string | 'Present'
    bullets: string[]
    tech: string[]
}

export interface ResumeData {
    name: string
    title: string
    summary: string
    experiences: Experience[]
    skills: string[]
    education: { school: string; degree: string; gradYear: string }[]
}