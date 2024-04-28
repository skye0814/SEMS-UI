import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, FormControl, FormLabel, Grid, GridItem, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
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
import { Sport } from '../models/Sport';
import { PagedRequest } from '../models/PagedRequest';
import { del, deleteAsync, getAsync, post, put } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import { get } from 'http';

export default function SportsManager(){
    // States
    const initialSportData: Sport = {
        id: 0,
        name: ''
    }
    const [showSearchbar, setShowSearchbar] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditSportModal, setShowEditModal] = useState(false);
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [id, setId] = useState(0);
    const [error, setError] = useState(null);
    const [sports, setSports] = useState<PagedResponse<Sport[]>>();
    const [pagedRequest, setPagedRequest] = useState<PagedRequest>({
        pageNumber: 1,
        pageSize: 10,
        search: "",
        sortBy: 'name'
    });
    const [sportAddData, setSportAddData] = useState<Sport>(initialSportData);
    const [fetching, setFetching] = useState(false);

    // Functions
    const fetchPagedSports = () => {
        setFetching(true);

        post(`api/v1/Sport/Sports`, pagedRequest)
        .then((response)=> {
            setSports(response);
        })
        .catch((err)=>{
            setError(err);
        })
        .finally(() => {
            setFetching(false);
        });
    }

    useEffect(() => {
        let timeoutId: any; 
    
        const debouncedFetch = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            fetchPagedSports();
          }, 500);
        };
    
        debouncedFetch();
    
        return () => {
          clearTimeout(timeoutId); 
        };
      }, [sports, fetching]);

    const getSportById = (id: number) => {
        getAsync(`api/v1/Sport/GetSport/${id}`)
        .then((response)=> {
            setSportAddData(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const deleteSport = (id: number) => {
        setShowDeleteModal(false);

        deleteAsync(`api/v1/Sport/DeleteSport/${id}`)
        .then((response: AxiosResponse)=> {
            setResponseMessage("The item was successfully deleted.");
            setShowResponseModal(true);
        })
        .catch((err: AxiosError)=>{
            setResponseMessage(err.response ? err.response?.data as string : "There was an error occured.");
            setShowResponseModal(true);
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSportAddData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        setPagedRequest((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        fetchPagedSports();
    };

    const handleSubmitSport = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/api/v1/Sport/AddSport', sportAddData)
        .then((response) => {
            setResponseMessage("The item was successfully added.");
            setShowResponseModal(true);

            // Reset state value upon successful insert
            setSportAddData({
                id: 0,
                name: ''
            });
        })
        .catch((err: AxiosError) => {
            setResponseMessage(err.response ? err.response?.data as string : "There was an error occured.");
            setShowResponseModal(true);
        })
    };

    const handleSubmitEdited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        put('/api/v1/Sport/UpdateSport', sportAddData)
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
        setSportAddData(initialSportData);
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
        getSportById(id);
        setShowEditModal(true);
    }

    // useEffects
    useEffect(() => {
        // Fetch sports on render
        fetchPagedSports();
    }, []);

    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <div className='page-menu'>
                <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem colSpan={2} h='10'>
                        <Text fontSize='xl' fontWeight='600'>Sports Manager</Text>
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
                    <Tab onClick={() => (setShowSearchbar(true))}>View Sports</Tab>
                    <Tab onClick={handleClear} onFocus={() => setShowSearchbar(false)}>Create Sports</Tab>
                </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <TableCaption></TableCaption> 
                                    <Thead>
                                    <Tr>
                                        <Th>Edit</Th>
                                        <Th>Name</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                    {sports?.data.map((sport) => {
                                        return(
                                            <Tr key={sport.id}>
                                                <Td>
                                                    <FontAwesomeIcon className = 'table-button' icon='pen' onClick={() => handleShowEditModal(sport.id)}/>
                                                    <FontAwesomeIcon className = 'table-button' icon='trash' onClick={() => handleShowDeleteModal(sport.id)}/>
                                                </Td>
                                                <Td>{sport.name}</Td>
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
                            <form onSubmit={handleSubmitSport} id='add-form'>
                                <FormControl isRequired>
                                    <FormLabel>Sport name</FormLabel>
                                    <Input placeholder='Sport name' name='name' value={sportAddData.name} onChange={handleChange}/>
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
                <Button variant="primary" onClick={() => deleteSport(id)}>
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

            <Modal show={showEditSportModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='edit-form' onSubmit={handleSubmitEdited}>
                        <FormControl isRequired>
                            <FormLabel>Sport name</FormLabel>
                            <Input placeholder='Sport name' name='name' value={sportAddData.name} onChange={handleChange} readOnly={false} isRequired={true}/>
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