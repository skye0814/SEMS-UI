import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import "../../styles/eventmatchup.css";
import { Box, Button, Table, TableCaption, TableContainer, TabList, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import { Match } from '../models/Match';
import { Team } from '../models/Team';
import EventMatchupTeams from './EventMatchupTeams';
import { Tabs, Tab, TabPanel, TabPanels } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { getAsync } from '../services/api';
import { AxiosError } from 'axios';

export function EventMatchupDetails(){
    const [searchParams]: any = useSearchParams();

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
    const [error, setError] = useState<AxiosError>();

    // state for showing/hiding 8-4-2 brackets
    const [show8, setShow8] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showBracketErr, setShowBracketErr] = useState(false);


    const matchGenerator = (teams: Team[], eventId: number) => {
        const numTeams = teams.length;

        if (numTeams <= 1) {
            throw new Error('Number of teams must be greater than 1');
        }

        if (numTeams % 2 !== 0) {
            throw new Error('Number of teams must be an even number');
        }

        const shuffledTeams = [...teams]; 
        for (let i = shuffledTeams.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTeams[i], shuffledTeams[j]] = [shuffledTeams[j], shuffledTeams[i]];
        }

        const matches: Match[] = [];

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
                team1Score: 0,
                team2Score: 0,

                event: undefined,
                team1: team1,
                team2: team2,
                winner: undefined
              }
        
              matches.push(currMatch);
            }
        }
        
        setMatchSeed(matches.filter((match) => match.round === 1));
    }

    const getEventById = (id: number) => {
        getAsync(`api/v1/Event/GetEvent/${id}`)
        .then((response)=> {
        })
        .catch((err)=>{
            setError(err);
        })
    }

    useEffect(() => {
        console.log(matchSeed);
    }, [matchSeed]);

    // effect for showing/hiding brackets onload
    useEffect(() => {
        if (teams.length == 8) {
            setShow8(true);
        }
        else if (teams.length == 4) {
            setShow4(true);
        }
        else if (teams.length == 2) {
            setShow2(true);
        }
        else {
            setShow8(false);
            setShow4(false);
            setShow2(false);
            setShowBracketErr(true);
        }
    }, []);

    // effect to fetch event data onload
    useEffect(() => {
        getEventById(!isNaN(parseInt(searchParams.get('eventId'))) ? searchParams.get('eventId') : 0);
    },[]);

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                    {show4 && 
                    <form id='add-match4'>
                        <div className='dashboard-card' style={{ backgroundColor: '#b3e8ff', height: 'auto', padding: '10px'}}>
                                <Row> {/*ROW 1 */}
                                    <Col xs={2}>
                                        <Box className='box'>{matchSeed.find((ele, index) => index == 0)?.team1?.teamName}</Box>
                                    </Col>
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
                                    <Col xs={2}>
                                        <Box className='box'>{matchSeed.find((ele, index) => index == 0)?.team2?.teamName}</Box>
                                    </Col>
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
                                    <Col xs={2}>
                                        <Box className='box'>{matchSeed.find((ele, index) => index == 1)?.team1?.teamName}</Box>
                                    </Col>
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
                                <Col xs={2}>
                                    <Box className='box'>{matchSeed.find((ele, index) => index == 1)?.team2?.teamName}</Box>
                                </Col>
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
                    </form>
                    }
                        {show8 && <div className='dashboard-card' style={{ backgroundColor: '#b3e8ff', height: 'auto', padding: '10px'}}>
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
                        </div>}
                        
                        {showBracketErr && 
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                Team count required is 8, 4, or 2 to create a bracketing system.
                            </div>
                        }
                        {!showBracketErr && show4 &&
                            <Button colorScheme='blue' 
                                    style={{display: 'flex', margin: '0 auto'}} 
                                    onClick={() => matchGenerator(teams, 2)}
                                    form='add-match4'
                            >
                                Create a round
                            </Button>
                        }
                        
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
            <Modal
                show={error ? true : false}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                <Modal.Title>Something went wrong</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Col>
                            <Row>
                                <img className='error-image' src='/images/icons/error.png' alt='Fetch Error'/>
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                We are unable to connect to the server. Please try again later.
                            </Row>
                        </Col>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => window.location.reload()}>Try again</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}

export default function EventMatchup() {

    const goToMatchDetails = (eventId: number) => {
        window.location.href = `/eventmatchup/event-matchup-details?eventId=${eventId}`
    };

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <div className='page-menu'>
                <TableContainer style={{marginTop: 50}}>
                    <Table variant='simple'>
                        <TableCaption></TableCaption> 
                        <Thead>
                        <Tr>
                            <Th>Event Name</Th>
                            <Th>Sport</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            <Tr className='match-manager-table-tr' onClick={() => goToMatchDetails(2)}>
                                <Td>Alley-oop Extravaganza</Td>
                                <Td>Basketball</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        </>
    );
}