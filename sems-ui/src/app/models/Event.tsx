import { Sport } from "./Sport";

export interface Event{
    id: number,
    name: string,
    description: string,
    startDate: Date | string,
    endDate: Date | string,
    location: string,

    sportId: number,
    sport: Sport | null | undefined
}