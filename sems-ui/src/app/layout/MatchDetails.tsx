import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/matchdetails.css";
import { Divider, AbsoluteCenter, Heading, Button } from '@chakra-ui/react'
import { Box, Image, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import MatchDetailsTable from './MatchDetailsTable';
import { Table, Thead, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react'

export default function MatchDetails(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '950px'}}>
                            <Container fluid="md">
                                <Row className='row-1'>
                                    <Col alignItems='left'>
                                        <Breadcrumb fontWeight='600' fontSize='sm' marginTop='15px'>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbItem>
                                                <BreadcrumbLink href='#'>About</BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbItem isCurrentPage>
                                                <BreadcrumbLink href='#'>Current</BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </Breadcrumb>
                                    </Col>
                                    <Col xs={6} className='col-1'>
                                        April 29, 1:00 PM - 2:00 PM
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '40px'}}>
                                    <Col xs={5}>
                                        <Image className='img'
                                            src="/images/team icons/walrus.png" // team icon of TEAM A
                                        />
                                    </Col>
                                    <Col xs={2} style={{margin: 'auto'}}>
                                        <Image className='img-1' src='/images/versus.png'/>
                                    </Col>
                                    <Col xs={5}>
                                        <Image className='img'
                                            src="/images/team icons/boar.png" // team icon of TEAM B
                                        />
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Col xs={5}>
                                        <Box className='box-team-1'>
                                            <h6>
                                                <span>BLACKLIST RIVALRY</span><span>87</span>
                                            </h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2} >
                                    </Col>
                                    <Col xs={5}>
                                        <Box className='box-team-2'>
                                            <h6>
                                                <span>88</span><span>TEAM DARLENG</span>
                                            </h6>
                                        </Box>
                                    </Col>
                                </Row>
                                <Box className='box-divider'>
                                    <Divider />
                                    <AbsoluteCenter bg="#b3e8ff" px="4">
                                        <Heading as='h3' size='lg'>STANDINGS</Heading>
                                    </AbsoluteCenter>
                                </Box>
                                <Row>
                                    <Col xs={5}>
                                        <Box className='box-stats'>
                                            <MatchDetailsTable />
                                        </Box>
                                    </Col>
                                    <Col xs={2}></Col>
                                    <Col xs={5}>
                                        <Box className='box-stats'>
                                            <MatchDetailsTable />
                                        </Box>
                                    </Col>
                                </Row>

                                <Row style={{marginTop: '10px'}}>
                                    <Col xs={5}>
                                        <Box className='box-stats'>
                                            <TableContainer>
                                                <Table variant="simple" size='sm'>
                                                    <Thead >
                                                        <Tr>
                                                            <Td className="table-head">PLAYER</Td>
                                                            <Td className="table-head">SCORE</Td>
                                                            <Td className="table-head">ASSIST</Td>
                                                            <Td className="table-head">STEAL</Td>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                            <Td>Jumba Lumba</Td>
                                                            <Td isNumeric>83</Td>
                                                            <Td isNumeric>40</Td>
                                                            <Td isNumeric>34</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Sandy Haynes</Td>
                                                            <Td isNumeric>1</Td>
                                                            <Td isNumeric>3</Td>
                                                            <Td isNumeric>1</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Darren Reyes</Td>
                                                            <Td isNumeric>1</Td>
                                                            <Td isNumeric>4</Td>
                                                            <Td isNumeric>3</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Christopher Kelly </Td>
                                                            <Td isNumeric>2</Td>
                                                            <Td isNumeric>0</Td>
                                                            <Td isNumeric>6</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Betsy Powell</Td>
                                                            <Td isNumeric>0</Td>
                                                            <Td isNumeric>6</Td>
                                                            <Td isNumeric>3</Td>
                                                        </Tr>
                                                    </Tbody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                    </Col>
                                    <Col xs={2}></Col>
                                    <Col xs={5}>
                                        <Box className='box-stats'>
                                            <TableContainer>
                                                <Table variant="simple" size='sm'>
                                                    <Thead >
                                                        <Tr>
                                                            <Td className="table-head">PLAYER</Td>
                                                            <Td className="table-head">SCORE</Td>
                                                            <Td className="table-head">ASSIST</Td>
                                                            <Td className="table-head">STEAL</Td>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                            <Td>Dale Lindsey</Td>
                                                            <Td isNumeric>30</Td>
                                                            <Td isNumeric>4</Td>
                                                            <Td isNumeric>4</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>John Trinidad</Td>
                                                            <Td isNumeric>1</Td>
                                                            <Td isNumeric>0</Td>
                                                            <Td isNumeric>1</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Paulette Rogers</Td>
                                                            <Td isNumeric>7</Td>
                                                            <Td isNumeric>4</Td>
                                                            <Td isNumeric>5</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Emman Tolosa</Td>
                                                            <Td isNumeric>43</Td>
                                                            <Td isNumeric>20</Td>
                                                            <Td isNumeric>4</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td>Gem Jason</Td>
                                                            <Td isNumeric>7</Td>
                                                            <Td isNumeric>6</Td>
                                                            <Td isNumeric>3</Td>
                                                        </Tr>
                                                    </Tbody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                    </Col>
                                </Row>
                                <Row style={{
                                    display: 'flex',
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    marginTop: '20px'
                                }}>
                                    <Col xs={5}></Col>
                                    <Col xs={2} style={{
                                                display: 'flex',
                                                alignItems: 'center', 
                                                justifyContent: 'center'}}>
                                        <Button colorScheme='blue'>Evaluate Event</Button>
                                    </Col>
                                    <Col xs={5}></Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}