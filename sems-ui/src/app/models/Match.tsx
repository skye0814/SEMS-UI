import { Event } from "./Event";
import { Team } from "./Team";

export interface Match {
    id: number,

    eventId: number,
    event: Event | null | undefined,

    teamId1: number,
    teamId2: number,
    team1: Team | null | undefined,
    team2: Team | null | undefined,

    round: number,

    winnerId: number,
    winner: Team | null | undefined,

    matchStartDate: string | null,
    matchStatus: string


}