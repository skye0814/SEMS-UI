import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, FormControl, FormLabel, Input } from '@chakra-ui/react'
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

export default function NavBar(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <div className='page-menu'>
                <Text fontSize='xl' fontWeight='600'>Event Manager</Text>
                <Tabs>
                <TabList>
                    <Tab>View Events</Tab>
                    <Tab>Create Event</Tab>
                </TabList>
                    <TabPanels>
                        <TabPanel>
                            <TableContainer>
                                <Table variant='simple'>
                                    <TableCaption></TableCaption> 
                                    <Thead>
                                    <Tr>
                                        <Th>Event Name</Th>
                                        <Th>Description</Th>
                                        <Th>Event Start Date</Th>
                                        <Th>Event End Date</Th>
                                        <Th>Location</Th>
                                        <Th>Sport</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                    </Tr>
                                    </Tbody>
                                    <Tfoot>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                    </Tr>
                                    </Tfoot>
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
                            <form>
                                <FormControl isRequired>
                                    <FormLabel>Event name</FormLabel>
                                    <Input placeholder='First name' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Input placeholder='First name' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Event Start Date</FormLabel>
                                    <Input placeholder='First name' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Event End Date</FormLabel>
                                    <Input placeholder='First name' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Location</FormLabel>
                                    <Input placeholder='First name' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Sport</FormLabel>
                                    <Select placeholder='Select option'>
                                        <option value='option1'>Basketball</option>
                                        <option value='option2'>Volleyball</option>
                                        <option value='option3'>Tennis</option>
                                    </Select>
                                </FormControl>
                                
                            </form>
                            <Button colorScheme='blue'>Create</Button>
                        </TabPanel>
                </TabPanels>
            </Tabs>
            </div>
        </div>
        
        </>
    );
}