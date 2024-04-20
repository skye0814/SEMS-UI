import { Sport } from "./Sport";

export interface Event{
    id: number,
    name: string,
    description: string,
    startDate: string,
    endDate: string,
    location: string,

    sportId: number,
    sport: Sport | null | undefined
}