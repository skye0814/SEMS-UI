import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/matchdetails.css";
import { Divider, AbsoluteCenter, Heading, Button } from '@chakra-ui/react'
import CanvasJSReact from '@canvasjs/react-charts';
import { Box, Image, Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'


export default function MatchDetails(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '830px'}}>
                            <div 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px',
                                    backgroundColor: '#6b8bcc'
                                }}
                            >
                            </div>
                            <Container fluid="md">
                                <Row style={{color: 'white', backgroundColor: "#3646a6", marginLeft: '-22.5px', marginRight: '-22.5px'}} >
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
                                    <Col xs={6} style={{
                                        textAlign: 'right',
                                        margin: 'auto'
                                    }}>
                                        April 29, 1:00 PM - 2:00 PM
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '40px'}}>
                                    <Col xs={5}>
                                        <Image
                                            borderRadius='full'
                                            boxSize='150px'
                                            src="/images/team icons/walrus.png" // team icon of TEAM A
                                            margin='auto'
                                        />
                                    </Col>
                                    <Col xs={2} style={{margin: 'auto'}}>
                                        <Image
                                            borderRadius='full'
                                            boxSize='100px'
                                            src='/images/versus.png' 
                                            margin='auto'
                                        />
                                    </Col>
                                    <Col xs={5}>
                                        <Image
                                            boxSize='150px'
                                            src="/images/team icons/boar.png" // team icon of TEAM B
                                            margin='auto'
                                        />
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white' borderTopRightRadius={30} borderBottomRightRadius={30}>
                                            <h6>
                                                <span>BLACKLIST RIVALRY</span><span>87</span>
                                            </h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2} >
                                    </Col>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white' borderTopLeftRadius={30} borderBottomLeftRadius={30}>
                                            <h6>
                                                <span>88</span><span>TEAM DARLENG</span>
                                            </h6>
                                        </Box>
                                    </Col>
                                </Row>
                                <Box position="relative" padding="10">
                                    <Divider />
                                    <AbsoluteCenter bg="#b3e8ff" px="4">
                                        <Heading as='h3' size='lg'>STANDINGS</Heading>
                                    </AbsoluteCenter>
                                </Box>
                                <Row>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white' borderRadius={10}>
                                            <h6>
                                                <span>1st quarter: </span><span>23</span>
                                            </h6>
                                            <h6>
                                                <span>2nd quarter: </span><span>20</span>
                                            </h6>
                                            <h6>
                                                <span>3rd quarter: </span><span>21</span>
                                            </h6>
                                            <h6>
                                                <span>4th quarter: </span><span>23</span>
                                            </h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2}></Col>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white' borderRadius={10}>
                                            <h6>
                                                <span>1st quarter: </span><span>23</span>
                                            </h6>
                                            <h6>
                                                <span>2nd quarter: </span><span>21</span>
                                            </h6>
                                            <h6>
                                                <span>3rd quarter: </span><span>21</span>
                                            </h6>
                                            <h6>
                                                <span>4th quarter: </span><span>23</span>
                                            </h6>
                                        </Box>
                                    </Col>
                                </Row>

                                <Row style={{marginTop: '10px'}}>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white' borderRadius={10}>
                                            <h6>
                                                <span>Jumba Lumba</span><span>SCORE: 83</span><span>ASSIST: 40</span><span>TURNOVER: 0</span>
                                            </h6>
                                            <h6>
                                                <span>Sandy Haynes</span><span>SCORE: 1</span><span>ASSIST: 3</span><span>TURNOVER: 1</span>
                                            </h6>
                                            <h6>
                                                <span>Darren Reyes</span><span>SCORE: 1</span><span>ASSIST: 4</span><span>TURNOVER: 5</span>
                                            </h6>
                                            <h6>
                                                <span>Christopher Kelly</span><span>SCORE: 2</span><span>ASSIST: 0</span><span>TURNOVER: 10</span>
                                            </h6>
                                            <h6>
                                                <span>Betsy Powell</span><span>SCORE: 0</span><span>ASSIST: 6</span><span>TURNOVER: 3</span>
                                            </h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2}></Col>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white' borderRadius={10}>
                                            <h6>
                                                <span>Dale Lindsey</span><span>SCORE: 30</span><span>ASSIST: 4</span><span>TURNOVER: 4</span>
                                            </h6>
                                            <h6>
                                                <span>John Trinidad</span><span>SCORE: 1</span><span>ASSIST: 0</span><span>TURNOVER: 11</span>
                                            </h6>
                                            <h6>
                                                <span>Paulette Rogers</span><span>SCORE: 7</span><span>ASSIST: 4</span><span>TURNOVER: 5</span>
                                            </h6>
                                            <h6>
                                                <span>Emman Tolosa</span><span>SCORE: 43</span><span>ASSIST: 20</span><span>TURNOVER: 4</span>
                                            </h6>
                                            <h6>
                                                <span>Gem Jason</span><span>SCORE: 7</span><span>ASSIST: 6</span><span>TURNOVER: 3</span>
                                            </h6>
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
                                    <Col xs={2}>
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