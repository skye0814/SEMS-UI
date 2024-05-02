import { Avatar, Button, Grid, GridItem, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PagedResponse } from '../models/PagedResponse';
import { useEffect, useState } from 'react';
import { getAsync, post } from '../services/api';
import { PagedRequest } from '../models/PagedRequest';
import { Event } from '../models/Event';
import '../../styles/matchmanager.css';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Team } from '../models/Team';
import { Match } from '../models/Match';
  
export default function MatchManager() {
    const initialEventData: Event = {
        id: 0,
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        location: '',

        sportId: 0,
        sport: undefined
    }
    const [showMatchEditor, setShowMatchEditor] = useState(false);
    const [events, setEvents] = useState<PagedResponse<Event[]>>();
    const [event, setEvent] = useState<Event>(initialEventData);
    const [teams, setTeams] = useState<Team[]>([]);
    const [matchSeed, setMatchSeed] = useState<Match[]>([]);
    const [error, setError] = useState<string>("");
    const [pagedRequest, setPagedRequest] = useState<PagedRequest>({
        pageNumber: 1,
        pageSize: 10,
        search: "",
        sortBy: 'name'
    });

    const handleShowMatchEditor = (eventId: number) => {
        getEventById(eventId);
        getTeamsByEventId(eventId);
        setShowMatchEditor(true);
    }

    const fetchPagedEvents = () => {
        post(`api/v1/Event/Events`, pagedRequest)
        .then((response)=> {
            setEvents(response);
        })
        .catch((err)=>{
            setError(err);
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setPagedRequest((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        fetchPagedEvents();
    };

    const matchGenerator = (teams: Team[], eventId: number) => {
        const numTeams = teams.length;

        if (numTeams <= 1) {
            setError('Number of teams must be greater than 1');
        }

        if (numTeams % 2 !== 0) {
            setError('Number of teams must be an even number');
        }

        // Shuffle teams using Fisher-Yates algorithm
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
                team1Score: 0,
                team2Score: 0,

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
        fetchPagedEvents();
    }, []);

    useEffect(() => {
        console.log(matchSeed);
    }, [matchSeed]);

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <div className='page-menu'>
                <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem colSpan={2} h='10'>
                        <Text fontSize='xl' fontWeight='600'>Match Manager</Text>
                    </GridItem>
                        <GridItem colStart={4} colEnd={6} h='10'>
                        <InputGroup>
                            <InputLeftElement style={{height: '50px'}} pointerEvents='none'>
                                <FontAwesomeIcon icon='magnifying-glass'/>
                            </InputLeftElement>
                            <Input name='search' placeholder='Search' onChange={handleChange}/>
                        </InputGroup>
                    </GridItem>
                </Grid>

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
                            {events?.data.map((event) => {
                                return(
                                    <Tr className='match-manager-table-tr' key={event.id} onClick={() => handleShowMatchEditor(event.id)}>
                                        <Td>{event.name}</Td>
                                        <Td>{event.sport?.name}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>

                <Modal show={showMatchEditor} fullscreen={true} onHide={() => setShowMatchEditor(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{event.name} Matches</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TableContainer style={{marginTop: 50}}>
                            <Table variant='simple'>
                                <TableCaption></TableCaption> 
                                <Thead>
                                <Tr>
                                    <Th>Teams</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                    {teams?.map((team) => {
                                        return(
                                            <Tr key={team.id}>
                                                <Td style={{height: '50px', lineHeight: '50px'}}> 
                                                    <Avatar src={team.teamLogo?.imageUrl}/> 
                                                    <span style={{marginLeft: 20}}>{team.teamName}</span>
                                                </Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Container fluid style={{padding: '0 7%'}}>
                            <Row>
                                <Col><Input></Input></Col>
                                <Col style={{textAlign: 'right', margin: 'auto'}}>1 of 1</Col>
                                <Col style={{textAlign: 'center', margin: 'auto'}}>VS</Col>
                                <Col style={{textAlign: 'left', margin: 'auto'}}>1 of 1</Col>
                                <Col><Input></Input></Col>
                            </Row>
                            <Row>
                                <Col><Input></Input></Col>
                                <Col style={{textAlign: 'right', margin: 'auto'}}>1 of 1</Col>
                                <Col style={{textAlign: 'center', margin: 'auto'}}>VS</Col>
                                <Col style={{textAlign: 'left', margin: 'auto'}}>1 of 1</Col>
                                <Col><Input></Input></Col>
                            </Row>
                        </Container>
                        <Button colorScheme='blue' style={{display: 'flex', margin: '0 auto'}} onClick={() => matchGenerator(teams, event.id)}>Create a round</Button>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
        </>
    );
}