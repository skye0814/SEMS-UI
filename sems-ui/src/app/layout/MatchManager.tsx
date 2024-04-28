import { Avatar, Grid, GridItem, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
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
import { Modal } from 'react-bootstrap';
import { Team } from '../models/Team';
  
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
    const [error, setError] = useState(null);
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

    useEffect(() => {
        fetchPagedEvents();
    }, []);

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
                    </Modal.Body>
                </Modal>
            </div>
        </div>
        </>
    );
}