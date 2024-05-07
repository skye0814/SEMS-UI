import { Grid, GridItem } from '@chakra-ui/react'
import "../../styles/eventmatchup.css";
import { Bracket, IRoundProps, Seed, SeedItem, SeedTeam } from 'react-brackets';

export function TestEventMatchup() {
    const rounds: IRoundProps[] = [
        {
          title: 'Round 1',
          seeds: [
            {
              id: 1,
              date: new Date().toDateString(),
              teams: [
                { 
                    // name: matchSeed.find((ele, index) => index === 0)?.team1?.teamName, score: 0
                    name: "TEAM DARLENG", score: 90
                }, 
                { 
                    name: "BLACKLIST RIVALRY", score: 23
                }],
            },
            {
              id: 2,
              date: new Date().toDateString(),
              teams: [
                { 
                    name: "AURORA", score: 12
                }, 
                { 
                    name: "GAMIN GLADIATORS", score: 52
                }],
            },
          ],
        },
        {
          title: 'Round 2',
          seeds: [
            {
              id: 3,
              date: new Date().toDateString(),
              teams: [{ name: "TEAM DARLENG", score: 10 }, { name: "GAMIN GLADIATORS", score: 9}],
            },
          ],
        },
        {
            title: 'Winner',
            seeds: [
              {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: "TEAM DARLENG", score: 10 }],
              },
            ],
        },
    ];

    const CustomSeed = ({ seed, title, breakpoint, roundIndex, seedIndex }: any) => {
        const homeTeam = seed.teams[0];
        const awayTeam = seed.teams[1];
        console.log(seed.type);
        
        return (
            <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
            <SeedItem>
                <div>
                <SeedTeam
                    style={{
                    backgroundColor: (homeTeam?.score ? homeTeam?.score : 0) > (awayTeam?.score ? awayTeam?.score : 0) && "green",
                    }}
                    
                >
                    <div>{homeTeam?.name ? homeTeam?.name : "----"}</div>
                    <div>{homeTeam?.score ? homeTeam?.score : '-'}</div>
                </SeedTeam>
                <SeedTeam
                    style={{
                    backgroundColor: (homeTeam?.score ? homeTeam?.score : 0) < (awayTeam?.score ? awayTeam?.score : 0 ) && "green",
                    }}
                >
                    <div>{awayTeam?.name ? awayTeam?.name : "----"}</div>
                    <div>{awayTeam?.score ? awayTeam?.score : "-"}</div>
                </SeedTeam>
                </div>
            </SeedItem>
            </Seed>
        );
    };

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        {/* <div className='container-index'>
            <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '550px', padding: '15px', margin: '20px'}}>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={2} colEnd={3}w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={4} colEnd={5} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>

                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={3} colEnd={4} w='100%' h='10' bg='blue.500' />
                </Grid>
                
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={2} colEnd={3}w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={4} colEnd={5} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>
            </div>
        </div> */}
        <div style={{marginTop: '120px'}}></div>
        <Bracket
            rounds={rounds}
            renderSeedComponent={CustomSeed}
            swipeableProps={{
            enableMouseEvents: true,
            animateHeight: true
            }}
        />
        </>
        
    );
}