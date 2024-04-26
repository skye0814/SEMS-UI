import React, { useEffect, useState } from 'react';
import { Avatar, Button, ButtonGroup, FormControl, FormLabel, Grid, GridItem, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import "../../styles/index.css";
import "../../styles/sportsmanager.css"
import { Text } from '@chakra-ui/react'
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
import Pagination from 'react-bootstrap/Pagination';
import { Select } from '@chakra-ui/react'
import { PagedResponse } from '../models/PagedResponse';
import { Team } from '../models/Team';
import { PagedRequest } from '../models/PagedRequest';
import { del, deleteAsync, getAsync, post, put } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { get } from 'http';
import { Event } from '../models/Event';
import { TeamLogo } from '../models/TeamLogo';

export default function TeamManager(){
    // States
    const initialTeamData: Team = {
        id: 0,
        teamName: '',

        eventId: 0,
        event: null,
        
        teamLogoId: 0,
        teamLogo: null
    }
    const [showSearchbar, setShowSearchbar] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditTeamModal, setShowEditModal] = useState(false);
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [id, setId] = useState(0);
    const [error, setError] = useState(null);
    const [Teams, setTeams] = useState<PagedResponse<Team[]>>();
    const [events, setEvents] = useState<Event[]>();
    const [logos, setLogos] = useState<TeamLogo[]>();
    const [pagedRequest, setPagedRequest] = useState<PagedRequest>({
        pageNumber: 1,
        pageSize: 10,
        search: "",
        sortBy: 'name'
    });
    const [TeamAddData, setTeamAddData] = useState<Team>(initialTeamData);

    // Functions
    const fetchPagedTeams = () => {
        post(`api/v1/Team/Teams`, pagedRequest)
        .then((response)=> {
            setTeams(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    useEffect(()=>{
        fetchPagedTeams();
    },[Teams]);

    const getTeamById = (id: number) => {
        getAsync(`api/v1/Team/GetTeam/${id}`)
        .then((response)=> {
            setTeamAddData(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const getEvents = () => {
        setTeamAddData(initialTeamData);

        getAsync(`api/v1/Event/GetAllEvents`)
        .then((response)=> {
            setEvents(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const getLogos = () => {
        setTeamAddData(initialTeamData);

        getAsync(`api/v1/TeamLogo/GetAllTeamLogo`)
        .then((response)=> {
            setLogos(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const loadData = () => {
        getEvents();
        getLogos();
    }

    const deleteTeam = (id: number) => {
        setShowDeleteModal(false);

        deleteAsync(`api/v1/Team/DeleteTeam/${id}`)
        .then((response: AxiosResponse)=> {
            setResponseMessage("The item was successfully deleted.");
            setShowResponseModal(true);
        })
        .catch((err: AxiosError)=>{
            setResponseMessage(err.response ? err.response?.data as string : "There was an error occured.");
            setShowResponseModal(true);
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTeamAddData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        setPagedRequest((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        fetchPagedTeams();
    };

    const handleSubmitTeam = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/api/v1/Team/AddTeam', TeamAddData)
        .then((response) => {
            setResponseMessage("The item was successfully added.");
            setShowResponseModal(true);

            // Reset state value upon successful insert
            setTeamAddData(initialTeamData);
        })
        .catch((err: AxiosError) => {
            setResponseMessage(err.response ? err.response?.data as string : "There was an error occured.");
            setShowResponseModal(true);
        })
    };

    const handleSubmitEdited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        put('/api/v1/Team/UpdateTeam', TeamAddData)
        .then((response) => {
            setResponseMessage("The item was successfully updated.");
            setShowResponseModal(true);
        })
        .catch((err: AxiosError) => {
            setResponseMessage(err.response ? err.response?.data as string : "There was an error occured.");
            setShowResponseModal(true);
        })
    };

    const handleClear = () => {
        setTeamAddData(initialTeamData);
    }

    const handleClose = () => {
        setShowDeleteModal(false);
        setShowResponseModal(false);
        setShowEditModal(false);
    }
    const handleCloseAndReload = () => {
        window.location.reload();
        setShowDeleteModal(false);
        setShowResponseModal(false);
    }
    const handleShowDeleteModal = (id: number) => {
        setId(id);
        setShowDeleteModal(true);
    }
    const handleShowEditModal = (id: number) => {
        setId(id);
        getTeamById(id);
        setShowEditModal(true);

        loadData();
    }

    // useEffects
    useEffect(() => {
        // Fetch Teams on render
        fetchPagedTeams();
    }, []);

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <div className='page-menu'>
                <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem colSpan={2} h='10'>
                        <Text fontSize='xl' fontWeight='600'>Team Manager</Text>
                    </GridItem>
                        <GridItem colStart={4} colEnd={6} h='10'>
                        {showSearchbar && <InputGroup>
                            <InputLeftElement style={{height: '50px'}} pointerEvents='none'>
                                <FontAwesomeIcon icon='magnifying-glass'/>
                            </InputLeftElement>
                            <Input name='search' placeholder='Search' onChange={handleChange}/>
                        </InputGroup>}
                    </GridItem>
                </Grid>
                <Tabs>
                <TabList>
                    <Tab onClick={() => (setShowSearchbar(true))}>View Teams</Tab>
                    <Tab onClick={loadData} onFocus={() => setShowSearchbar(false)}>Create Team</Tab>
                </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <TableCaption></TableCaption> 
                                    <Thead>
                                    <Tr>
                                        <Th>Edit</Th>
                                        <Th>Logo</Th>
                                        <Th>Name</Th>
                                        <Th>Event Name</Th>
                                        <Th>Sport</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                    {Teams?.data.map((Team) => {
                                        return(
                                            <Tr key={Team.id}>
                                                <Td>
                                                    <FontAwesomeIcon className = 'table-button' icon='pen' onClick={() => handleShowEditModal(Team.id)}/>
                                                    <FontAwesomeIcon className = 'table-button' icon='trash' onClick={() => handleShowDeleteModal(Team.id)}/>
                                                </Td>
                                                <Td>
                                                    {Team.teamLogo?.imageUrl && <Avatar src={Team.teamLogo?.imageUrl} />}
                                                </Td>
                                                <Td>{Team.teamName}</Td>
                                                <Td>{Team.event?.name}</Td>
                                                <Td>{Team.event?.sport?.name}</Td>
                                            </Tr>
                                        )
                                    })}
                                    </Tbody>
                                </Table>
                            </TableContainer>

                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </TabPanel>
                        <TabPanel>
                            <form onSubmit={handleSubmitTeam} id='add-form'>
                                <FormControl isRequired>
                                    <FormLabel>Team name</FormLabel>
                                    <Input placeholder='Team name' name='teamName' value={TeamAddData.teamName} onChange={handleChange} readOnly={false}/>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Event</FormLabel>
                                    <Select placeholder='Select an Event' name='eventId' value={TeamAddData.eventId} onChange={handleChange} isRequired={true}>
                                        {events?.map((event) => {
                                            return(
                                                <option key={event.id} value={event.id}>{event.name}</option>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Team Logo</FormLabel>
                                    <Select placeholder='Select Team Logo' name='teamLogoId' value={TeamAddData.teamLogoId} onChange={handleChange} isRequired={true}>
                                        {logos?.map((logo) => {
                                            return(
                                                <option key={logo.id} value={logo.id}>{logo.name}</option>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                                <Button colorScheme='blue' type='submit' form='add-form'>Create</Button>
                            </form>
                            
                        </TabPanel>
                </TabPanels>
            </Tabs>

            <Modal show={showDeleteModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Team?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => deleteTeam(id)}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showResponseModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>{responseMessage}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => (handleCloseAndReload())}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditTeamModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='edit-form' onSubmit={handleSubmitEdited}>
                        <FormControl isRequired>
                            <FormLabel>Team name</FormLabel>
                            <Input placeholder='Team name' name='teamName' value={TeamAddData.teamName} onChange={handleChange} readOnly={false} isRequired={true}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Event</FormLabel>
                            <Select placeholder='Select an Event' name='eventId' value={TeamAddData.eventId} onChange={handleChange} isRequired={true}>
                                {events?.map((event) => {
                                    return(
                                        <option key={event.id} value={event.id}>{event.name}</option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Team Logo</FormLabel>
                            <Select placeholder='Select Team Logo' name='teamLogoId' value={TeamAddData.teamLogoId} onChange={handleChange} isRequired={true}>
                                {logos?.map((logo) => {
                                    return(
                                        <option key={logo.id} value={logo.id}>{logo.name}</option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" type='submit' form='edit-form' onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
        
        </>
    );
}