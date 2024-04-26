import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, FormControl, FormLabel, Grid, GridItem, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import "../../styles/index.css";
import "../../styles/eventsmanager.css"
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
import { Event } from '../models/Event';
import { PagedResponse } from '../models/PagedResponse';
import { PagedRequest } from '../models/PagedRequest';
import { deleteAsync, getAsync, post, put } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sport } from '../models/Sport';
import { Modal } from 'react-bootstrap';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { Axios, AxiosError, AxiosResponse } from 'axios';

export default function EventsManager(){
    // States
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
    const [showSearchbar, setShowSearchbar] = useState(true);
    const [selected, setSelected] = React.useState<Date>();
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditEventModal, setShowEditModal] = useState(false);
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [id, setId] = useState(0);
    const [error, setError] = useState(null);
    const [events, setEvents] = useState<PagedResponse<Event[]>>();
    const [sports, setSports] = useState<Sport[]>();
    const [pagedRequest, setPagedRequest] = useState<PagedRequest>({
        pageNumber: 1,
        pageSize: 10,
        search: "",
        sortBy: 'name'
    });
    const [eventAddData, setEventAddData] = useState<Event>(initialEventData);
    const minDate = new Date();
    const disabledDays = {
        before: minDate,
        after: eventAddData.endDate
    };
    const disabledDaysEndDate = {
        before: new Date(eventAddData.startDate),
    }

    const formatDate = (dateString: Date | string) => {
        if (dateString) {
          const date = new Date(dateString);
          return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          });
        } else {
          return '';
        }
      };

    // Functions
    const fetchPagedEvents = () => {
        post(`api/v1/Event/Events`, pagedRequest)
        .then((response)=> {
            setEvents(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    useEffect(()=>{
        fetchPagedEvents();
    },[events]);

    const getSports = () => {
        setEventAddData(initialEventData);

        getAsync(`api/v1/Sport/GetAllSports`)
        .then((response)=> {
            setSports(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const getEventById = (id: number) => {
        getAsync(`api/v1/Event/GetEvent/${id}`)
        .then((response)=> {
            setEventAddData(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const deleteEvent = (id: number) => {
        setShowDeleteModal(false);

        deleteAsync(`api/v1/Event/DeleteEvent/${id}`)
        .then((response)=> {
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
        setEventAddData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        setPagedRequest((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        fetchPagedEvents();
    };

    const handleSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/api/v1/Event/AddEvent', eventAddData)
        .then((response) => {
            setResponseMessage("The item was successfully added.");
            setShowResponseModal(true);

            // Reset state value upon successful insert
            setEventAddData(initialEventData);
        })
        .catch((err: AxiosError) => {
            setResponseMessage(err.response ? err.response?.data as string : "There was an error occured.");
            setShowResponseModal(true);
        })
    };

    const handleSubmitEdited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        put('/api/v1/Event/UpdateEvent', eventAddData)
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
        setEventAddData(initialEventData);
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
        getEventById(id);
        setShowEditModal(true);

        getSports();
    }

    const handleShowEndDatePicker = () => {
        setShowEndDatePicker(true);
    }

    const handleHideEndDatePicker = () => {
        setShowEndDatePicker(false);
    }

    const handleShowStartDatePicker = () => {
        setShowStartDatePicker(true);
    }

    const selectStartDate = (selected: Date | any) => {
        setEventAddData({ ...eventAddData, startDate: selected});
        setShowStartDatePicker(false);
    }

    const selectEndDate = (selected: Date | any) => {
        setEventAddData({ ...eventAddData, endDate: selected});
        setShowEndDatePicker(false);
    }

    // useEffects
    useEffect(() => {
        // Fetch Events on render
        fetchPagedEvents();
    }, []);

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <div className='page-menu'>
                <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem colSpan={2} h='10'>
                        <Text fontSize='xl' fontWeight='600'>Event Manager</Text>
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
                    <Tab onClick={() => (setShowSearchbar(true))}>View Events</Tab>
                    <Tab onClick={getSports} onFocus={() => setShowSearchbar(false)}>Create Event</Tab>
                </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <TableCaption></TableCaption> 
                                    <Thead>
                                    <Tr>
                                        <Th>Edit</Th>
                                        <Th>Event Name</Th>
                                        <Th>Event Description</Th>
                                        <Th>Event Start Date</Th>
                                        <Th>Event End Date</Th>
                                        <Th>Location</Th>
                                        <Th>Sport</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                    {events?.data.map((event) => {
                                        return(
                                            <Tr key={event.id}>
                                                <Td>
                                                    <FontAwesomeIcon className = 'table-button' icon='pen' onClick={() => handleShowEditModal(event.id)}/>
                                                    <FontAwesomeIcon className = 'table-button' icon='trash' onClick={() => handleShowDeleteModal(event.id)}/>
                                                </Td>
                                                <Td>{event.name}</Td>
                                                <Td>{event.description}</Td>
                                                <Td>{formatDate(event.startDate)}</Td>
                                                <Td>{formatDate(event.endDate)}</Td>
                                                <Td>{event.location}</Td>
                                                <Td>{event.sport?.name}</Td>
                                            </Tr>
                                        )
                                    })}
                                    </Tbody>
                                </Table>
                            </TableContainer>

                            {/* <Pagination>
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
                            </Pagination> */}
                        </TabPanel>
                        <TabPanel>
                            <form onSubmit={handleSubmitEvent} id='add-form'>
                                <FormControl isRequired>
                                    <FormLabel>Event name</FormLabel>
                                    <Input placeholder='Event name' name='name' value={eventAddData.name} onChange={handleChange} isRequired={true}/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Description</FormLabel>
                                    <Input placeholder='Description' name='description' value={eventAddData.description} onChange={handleChange} isRequired={false}/>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Event Start Date</FormLabel>
                                    <Input placeholder='Event Start Date' 
                                            name='startDate' 
                                            value={formatDate(eventAddData.startDate)} 
                                            onChange={handleChange} 
                                            isRequired={true}
                                            onFocus={handleShowStartDatePicker} 
                                            readOnly={true}
                                    />
                                    {showStartDatePicker && <DayPicker
                                        mode="single"
                                        selected={selected}
                                        onSelect={selectStartDate}
                                        disabled={disabledDays}
                                    />}
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Event End Date</FormLabel>
                                    <Input placeholder='Event End Date' 
                                            name='endDate' 
                                            value={formatDate(eventAddData.endDate)} 
                                            onChange={handleChange} 
                                            isRequired={false} 
                                            onFocus={handleShowEndDatePicker} 
                                            disabled={eventAddData.startDate ? false : true}
                                            readOnly={true}
                                    />
                                    {showEndDatePicker && <DayPicker
                                        mode="single"
                                        selected={selected}
                                        onSelect={selectEndDate}
                                        disabled={disabledDaysEndDate}
                                    />}
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Location</FormLabel>
                                    <Input placeholder='Location' name='location' value={eventAddData.location} onChange={handleChange} isRequired={true} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Sport</FormLabel>
                                    <Select placeholder='Select a Sport' name='sportId' value={eventAddData.sportId} onChange={handleChange} isRequired={true}>
                                        {sports?.map((sport) => {
                                            return(
                                                <option key={sport.id} value={sport.id}>{sport.name}</option>
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
                <Modal.Body>Are you sure you want to delete this sport?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => deleteEvent(id)}>
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

            <Modal show={showEditEventModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='edit-form' onSubmit={handleSubmitEdited}>
                        <FormControl isRequired>
                            <FormLabel>Event name</FormLabel>
                            <Input placeholder='Event name' name='name' value={eventAddData.name} onChange={handleChange} isRequired={true}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input placeholder='Description' name='description' value={eventAddData.description} onChange={handleChange} isRequired={false}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Event Start Date</FormLabel>
                            <Input placeholder='Event Start Date' 
                                    name='startDate' 
                                    value={formatDate(eventAddData.startDate)} 
                                    onChange={handleChange} 
                                    isRequired={true}
                                    onFocus={handleShowStartDatePicker} 
                                    readOnly={true}
                            />
                            {showStartDatePicker && <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={selectStartDate}
                                disabled={disabledDays}
                            />}
                        </FormControl>
                        <FormControl>
                            <FormLabel>Event End Date</FormLabel>
                            <Input placeholder='Event End Date' 
                                    name='endDate' 
                                    value={formatDate(eventAddData.endDate)} 
                                    onChange={handleChange} 
                                    isRequired={false} 
                                    onFocus={handleShowEndDatePicker} 
                                    disabled={eventAddData.startDate ? false : true}
                                    readOnly={true}
                            />
                            {showEndDatePicker && <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={selectEndDate}
                                disabled={disabledDaysEndDate}
                            />}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Location</FormLabel>
                            <Input placeholder='Location' name='location' value={eventAddData.location} onChange={handleChange} isRequired={true} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Sport</FormLabel>
                            <Select placeholder='Select a Sport' name='sportId' value={eventAddData.sportId} onChange={handleChange} isRequired={true}>
                                {sports?.map((sport) => {
                                    return(
                                        <option key={sport.id} value={sport.id}>{sport.name}</option>
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