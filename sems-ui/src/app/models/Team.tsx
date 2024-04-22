export interface Team{
    id: number,
    teamName: string,

    eventId: number,
    event: Event | null | undefined
}