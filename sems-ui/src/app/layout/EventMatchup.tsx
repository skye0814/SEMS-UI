import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import "../../styles/eventmatchup.css";
import { Box, Button, FormControl, FormLabel, Input, Table, TableCaption, TableContainer, TabList, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import { Match } from '../models/Match';
import { Team } from '../models/Team';
import EventMatchupTeams from './EventMatchupTeams';
import { Tabs, Tab, TabPanel, TabPanels } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { get, getAsync, post } from '../services/api';
import { AxiosError } from 'axios';
import { Event } from '../models/Event';
import { Bracket, IRoundProps, Seed, SeedItem, SeedTeam } from 'react-brackets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function EventMatchupDetails(){
    const [searchParams]: any = useSearchParams();
    const eventId = !isNaN(parseInt(searchParams.get('eventId'))) ? searchParams.get('eventId') : 0;

    const [teams, setTeams] = useState<Team[]>([]);
    const [matchSeed, setMatchSeed] = useState<Match[]>([]);
    const [error, setError] = useState<AxiosError | any>();
    const [event, setEvent] = useState<Event>();
    const [rounds, setRounds] = useState<IRoundProps[]>();

    // state for showing/hiding 8-4-2 brackets
    const [show8, setShow8] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showBracketErr, setShowBracketErr] = useState(false);

    // other states
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [showEditScore, setShowEditScore] = useState(false);
    const [editId, setEditId] = useState("");

    const addMatch = (matches: Match[]) => {
        matches = matches.map((match) => {
                    return { ...match, team1: null, team2: null}
                });

        console.log(matches);

        post(`api/v1/match/addmatches`, matches)
        .then(() => {
            setResponseMessage("Match successfully created.");
            setShowResponseModal(true);
        })
        .catch((err: AxiosError)=>{
            setResponseMessage(err.response ? err.response?.data as string : "There was an error occured.");
            setShowResponseModal(true);
        })
    }

    const getEventById = (id: number) => {
        getAsync(`api/v1/Event/GetEvent/${id}`)
        .then((response)=> {
            setEvent(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const getTeamsByEventId = (id: number) => {
        getAsync(`api/v1/Team/GetTeamsByEventId/${id}`)
        .then((response)=> {
            setTeams(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const getMatchByEventId = (eventId: number) => {
        // use it to disable match generator if there is no match found
        get(`api/v1/Match/GetMatchByEventId/${eventId}`)
        .then((response)=> {
            setMatchSeed(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const populateRoundDisplay = () => {
        let newRound: IRoundProps[] = [];

        if (teams.length === 2) {

        }
        else if (teams.length === 4) {

        }
        else if (teams.length === 8) {

        }
    }

    const roundss: IRoundProps[] = [
        {
          title: 'Round 1',
          seeds: [
            {
              id: 1,
              date: new Date().toDateString(),
              teams: [
                { 
                    name: matchSeed.find((ele, index) => index === 0)?.team1?.teamName, score: matchSeed.find((ele, index) => index === 0)?.team1Score
                }, 
                { 
                    name: matchSeed.find((ele, index) => index === 0)?.team2?.teamName, score: matchSeed.find((ele, index) => index === 0)?.team2Score
                }],
            },
            {
              id: 2,
              date: new Date().toDateString(),
              teams: [
                { 
                    name: matchSeed.find((ele, index) => index === 1)?.team1?.teamName, score: matchSeed.find((ele, index) => index === 1)?.team1Score
                }, 
                { 
                    name: matchSeed.find((ele, index) => index === 1)?.team2?.teamName, score: matchSeed.find((ele, index) => index === 1)?.team2Score
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
              teams: [{ name: '', score: 0 }, { name: '', score: 0}],
            },
          ],
        },
        {
            title: 'Winner',
            seeds: [
              {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: '', score: 0 }],
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
                    backgroundColor: (homeTeam?.score ? homeTeam?.score : 0) > (awayTeam?.score ? awayTeam?.score : 0) && "red",
                    }}
                >
                    <div>{homeTeam?.name ? homeTeam?.name : "----"}</div>
                    <div>{homeTeam?.score ? homeTeam?.score : '-'}</div>
                </SeedTeam>
                <SeedTeam
                    style={{
                    backgroundColor: (homeTeam?.score ? homeTeam?.score : 0) < (awayTeam?.score ? awayTeam?.score : 0 ) && "red",
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


    const matchGenerator = (teams: Team[], eventId: number) => {
        if (matchSeed.length === 0) 
        {
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
            addMatch(matches.filter((match) => match.round === 1));
        }
        else {
            throw new Error(`Cannot generate match anymore because there are already existing matches in the event "${event?.name}"`);
        }
    }

    const updateScores = (event: SyntheticEvent<HTMLInputElement>, editId: number) => {
        const { name, value } = event.target as HTMLInputElement;

        let matches: Match[] = [];
        
        if (name === "team1Score") {
            matches = matchSeed.map((match, index) => {
                if (index === editId) {
                    return { ...match, team1Score: parseInt(value)}
                }
                else {
                    return { ...match}
                }
            });
        }
        if (name === "team2Score") {
            matches = matchSeed.map((match, index) => {
                if (index === editId) {
                    return { ...match, team2Score: parseInt(value)}
                }
                else {
                    return { ...match}
                }
            });
        }

        setMatchSeed(matches);
    }

    const handleClose = () => {
        setShowResponseModal(false);
    }
    const handleCloseAndReload = () => {
        window.location.reload();
        setShowResponseModal(false);
    }

    useEffect(() => {
        console.log(matchSeed);
    }, [matchSeed]);

    // effect for showing/hiding brackets onload
    useEffect(() => {
        if (teams.length === 8) {
            setShow8(true);
            setShowBracketErr(false);
        }
        else if (teams.length === 4) {
            setShow4(true);
            setShowBracketErr(false);
        }
        else if (teams.length === 2) {
            setShow2(true);
            setShowBracketErr(false);
        }
        else {
            setShow8(false);
            setShow4(false);
            setShow2(false);
            setShowBracketErr(true);
        }
    }, [teams]);

    // effect to fetch event data onload
    useEffect(() => {
        getEventById(eventId);
        getTeamsByEventId(eventId);
        getMatchByEventId(eventId);
    },[]);

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <Bracket
            rounds={roundss}
            renderSeedComponent={CustomSeed}
            swipeableProps={{
            enableMouseEvents: true,
            animateHeight: true
            }}
        />
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        {showBracketErr && 
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                Team count required is 8, 4, or 2 to create a bracketing system.
                            </div>
                        }
                        {!showBracketErr && show4 && !matchSeed.length &&
                            <Button colorScheme='blue' 
                                    style={{display: 'flex', margin: '0 auto'}} 
                                    onClick={() => matchGenerator(teams, 2)}
                                    form='add-match4'
                            >
                                Create a round
                            </Button>
                        }
                        {!showBracketErr && show4 && matchSeed.length === 0 ? false : true &&
                            <Button colorScheme='blue' 
                                    style={{display: 'flex', margin: '0 auto'}} 
                                    onClick={() => matchGenerator(teams, 2)}
                                    form='add-match4'
                            >
                                Save changes
                            </Button>
                        }
                        
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '550px'}}>
                            <Tabs align='center' variant='enclosed'>
                                <TabList m={1}>
                                    <Tab>Round 1</Tab>
                                    <Tab>Round 2</Tab>
                                    <Tab>Round 3</Tab>
                                    {/* <Tab><img className='sports-icon' src="/images/sports icon/basketball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/football.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/volleyball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/badminton.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/chess.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/ping-pong.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/tennis.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/base-ball.png" alt="Sport1"/></Tab> */}
                                </TabList>
                                <TabPanels>
                                    <TabPanel>   {/*Basketball*/}
                                        {/* <EventMatchupTeams/> */}
                                        <Container fluid="md" className='match-container'>
                                            {matchSeed.map((match, index) => {
                                                if (match.round === 1)
                                                {
                                                    return(
                                                        <>
                                                        <Row className='date-row'>
                                                            <Col className='date-col'>
                                                                {new Date().toDateString()}
                                                            </Col>
                                                        </Row>
                                                        <Row className='match-row'>
                                                            <Col xs={5} style={{display: 'flex'}}>
                                                                <FontAwesomeIcon className='match-row-pen' icon='pen'
                                                                    style={{
                                                                        fontSize: '25px',
                                                                        margin: 'auto',
                                                                        paddingRight: '20px'
                                                                    }}
                                                                    onClick={() => {setShowEditScore(true); setEditId(index.toString())}}
                                                                />
                                                                <Box className='team-box'>
                                                                    <h6 style={{position: 'absolute', left: 20}}><span>{match.team1?.teamName}</span></h6>
                                                                    <h6 style={{position: 'absolute', right: 20}}><span>{match.team1Score}</span></h6>
                                                                </Box>
                                                            </Col>
                                                            <Col xs={2} className='vs-col'>VS</Col>
                                                            <Col xs={5}>
                                                                <Box className='team-box'>
                                                                    <h6 style={{position: 'absolute', left: 20}}><span>{match.team2Score}</span></h6>
                                                                    <h6 style={{position: 'absolute', right: 20}}><span>{match.team2?.teamName}</span></h6>
                                                                </Box>
                                                            </Col>
                                                        </Row>
                                                        </>
                                                    );
                                                }
                                                else return <></>;
                                            })}
                                        </Container>
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
                    <Button onClick={() => window.location.reload()}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showEditScore}
                onHide={() => setShowEditScore(false)}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Edit Scores</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl isRequired>
                        <FormLabel>{matchSeed.find((ele, index) => index === parseInt(editId))?.team1?.teamName} Score</FormLabel>
                        <Input 
                            name="team1Score"
                            type='number' 
                            value={matchSeed.find((ele, index) => index === parseInt(editId))?.team1Score} 
                            onChange={(e) => updateScores(e, parseInt(editId))} 
                            isRequired={true}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>{matchSeed.find((ele, index) => index === parseInt(editId))?.team2?.teamName} Score</FormLabel>
                        <Input 
                            name="team2Score"
                            type='number' 
                            value={matchSeed.find((ele, index) => index === parseInt(editId))?.team2Score} 
                            onChange={(e) => updateScores(e, parseInt(editId))} 
                            isRequired={true}
                        />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowEditScore(false)}>Save</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showResponseModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>{responseMessage}</Modal.Body>
                <Modal.Footer>
                <Button onClick={() => (handleCloseAndReload())}>
                    Confirm
                </Button>
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