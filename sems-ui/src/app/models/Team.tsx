import { Event } from "./Event";
import { TeamLogo } from "./TeamLogo";

export interface Team{
    id: number,
    teamName: string,

    eventId: number,
    event: Event | null | undefined

    teamLogoId: number,
    teamLogo: TeamLogo | null | undefined
}