import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/eventmatchup.css";
import { Box, Button, TabList} from '@chakra-ui/react'
import { Match } from '../models/Match';
import { Team } from '../models/Team';
import EventMatchupTeams from './EventMatchupTeams';
import { Tabs, Tab, TabPanel, TabPanels } from '@chakra-ui/react'

export default function EventMatchup(){

    // test teams data
    const teamsData: Team[] = [{
        id: 1,
        teamName: 'Team Darleng',
        eventId: 2,
        event: null,
        teamLogoId: 0,
        teamLogo: null
    },
    {
        id: 2,
        teamName: 'Team Buffalo',
        eventId: 2,
        event: null,
        teamLogoId: 0,
        teamLogo: null
    },
    {
        id: 3,
        teamName: 'Team Chameleon',
        eventId: 2,
        event: null,
        teamLogoId: 0,
        teamLogo: null
    },
    {
        id: 4,
        teamName: 'Team Payaman',
        eventId: 2,
        event: null,
        teamLogoId: 0,
        teamLogo: null
    }];

    const [teams, setTeams] = useState<Team[]>(teamsData);
    const [matchSeed, setMatchSeed] = useState<Match[]>([]);
    const [error, setError] = useState<string>("");


    const matchGenerator = (teams: Team[], eventId: number) => {
        const numTeams = teams.length;

        if (numTeams <= 1) {
            setError('Number of teams must be greater than 1');
        }

        if (numTeams % 2 !== 0) {
            setError('Number of teams must be an even number');
        }

        const shuffledTeams = [...teams]; 
        for (let i = shuffledTeams.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTeams[i], shuffledTeams[j]] = [shuffledTeams[j], shuffledTeams[i]];
        }

        const matches: Match[] = [];
        let id = 0;

        for (let round = 1; round <= Math.ceil(Math.log2(numTeams)); round++) {
            const numMatches = Math.pow(2, Math.ceil(Math.log2(numTeams)) - round);
        
            for (let match = 1; match <= numMatches; match++) {
              const team1Index = (match - 1) * 2;
              const team2Index = team1Index + 1;
        
              const team1 = shuffledTeams[team1Index] || undefined; 
              const team2 = shuffledTeams[team2Index] || undefined;

              let currMatch: Match = {
                id: 0,
                eventId: eventId,
                teamId1: team1.id,
                teamId2: team2.id,
                round: round,
                winnerId: 0,
                matchStartDate: null,
                matchStatus: '',

                event: undefined,
                team1: undefined,
                team2: undefined,
                winner: undefined
              }
        
              matches.push(currMatch);
            }
        }
        
        setMatchSeed(matches.filter((match) => match.round === 1));
    }

    useEffect(() => {
        console.log(matchSeed);
    }, [matchSeed])

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                    <div className='dashboard-card' style={{ backgroundColor: '#b3e8ff', height: 'auto', padding: '10px'}}>
                                <Row> {/*ROW 1 */}
                                    <Col xs={2}><Box className='box'>8th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1}></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}></Col>
                                    <Col style={{padding: '0'}}></Col>
                                    <Col xs={2}></Col>
                                </Row>

                                <Row> {/*ROW 2 */}
                                    <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-low"></div></Col>
                                    <Col style={{padding: '0'}}></Col>
                                    <Col xs={2}></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 3 */}
                                    <Col xs={2}><Box className='box'>5th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}></Col>
                                    <Col style={{padding: '0'}}></Col>
                                    <Col xs={2}></Col>
                                </Row>

                                <Row> {/*ROW 4 */}
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 5 */}
                                    <Col xs={2}><Box className='box'>7th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}></Col>
                                    <Col style={{padding: '0'}}></Col>
                                    <Col xs={2}></Col>
                                </Row>

                                <Row> {/*ROW 6 */}
                                <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-low"></div></Col>
                                    <Col style={{padding: '0'}}></Col>
                                    <Col xs={2}></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 7 */}
                                <Col xs={2}><Box className='box'>2nd SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1}></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}></Col>
                                    <Col style={{padding: '0'}}></Col>
                                    <Col xs={2}></Col>
                                </Row>
                        </div>
                        <Button colorScheme='blue' style={{display: 'flex', margin: '0 auto'}} onClick={() => matchGenerator(teams, 2)}>Create a round</Button>
                        <div className='dashboard-card' style={{ backgroundColor: '#b3e8ff', height: 'auto', padding: '10px'}}>
                                <Row> {/*ROW 1 */}
                                    <Col xs={2}><Box className='box'>8th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1}></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={2}><Box className='box'>1st SEED</Box></Col>
                                </Row>

                                <Row> {/*ROW 2 */}
                                    <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-low"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 3 */}
                                    <Col xs={2}><Box className='box'>5th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={2}><Box className='box'>3rd SEED</Box></Col>
                                </Row>

                                <Row> {/*ROW 4 */}
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 5 */}
                                    <Col xs={2}><Box className='box'>7th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={2}><Box className='box'>4th SEED</Box></Col>
                                </Row>

                                <Row> {/*ROW 6 */}
                                <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-low"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 7 */}
                                <Col xs={2}><Box className='box'>2nd SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1}></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={2}><Box className='box'>6th SEED</Box></Col>
                                </Row>
                        </div>    
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '550px'}}>
                            <Tabs align='center' variant='enclosed'>
                                <TabList m={1}>
                                    <Tab><img className='sports-icon' src="/images/sports icon/basketball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/football.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/volleyball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/badminton.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/chess.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/ping-pong.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/tennis.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/base-ball.png" alt="Sport1"/></Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>   {/*Basketball*/}
                                        <EventMatchupTeams />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}