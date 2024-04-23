import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/home.css";
import background from "../../assets/img/sport-1.svg";
import { Box, Tabs, Tab, TabPanel, TabPanels, TabList, Heading,Center } from '@chakra-ui/react'
import MatchHistoryContainer from './MatchHistoryContainer';

export default function Home(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        <Box 
                            bgImage="url('/images/sport-1.svg')"
                            bgSize="cover"
                            height="500px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            margin= "auto">                           
                            <Center bg='white' px='4'>
                                <Heading>UPCOMMING MATCHUPS</Heading>
                            </Center>
                        </Box>
                    </Col>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '500px'}}>
                        <Tabs align='center' variant='enclosed'>
                                <TabList m={1}>
                                    <Tab><img className='sports-icon' src="/images/sports icon/basketball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/football.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/volleyball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/badminton.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/chess.png" alt="Sport1"/></Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>   {/*Basketball*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                    <TabPanel>   {/*Football*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                    <TabPanel>   {/*Volleyball*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                    <TabPanel>   {/*Badminton*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}