import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/matchhistory.css";
import { Avatar, AvatarBadge, AvatarGroup, Center, TabList, Wrap, WrapItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CanvasJSReact from '@canvasjs/react-charts';
import background from "../../assets/img/sport-1.svg";
import { Box, Tabs, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import MatchHistoryContainer from './MatchHistoryContainer';


export default function MatchHistory(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '550px'}}>
                            <Tabs align='center' variant='enclosed'>
                                <TabList m={1}>
                                    <Tab><img className='sports-icon' src="/images/sports icon/basketball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/football.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/volleyball.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/badminton.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/chess.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/ping-pong.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/tennis.png" alt="Sport1"/></Tab>
                                    <Tab><img className='sports-icon' src="/images/sports icon/base-ball.png" alt="Sport1"/></Tab>
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
                                    <TabPanel>   {/*Chess*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                    <TabPanel>   {/*Ping-pong*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                    <TabPanel>   {/*Tennis*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                    <TabPanel>   {/*Baseball*/}
                                        <MatchHistoryContainer />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>

                            {/* <Container fluid="md" className='match-container'>
                                <Row className='date-row'>
                                    <Col className='date-col'>
                                        April 29, 1:00 PM - 2:00 PM
                                    </Col>
                                </Row>
                                <Row className='match-row'>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>TEAM A</span><span>87</span></h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2} className='vs-col'>VS</Col>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>88</span><span>TEAM B</span></h6>
                                        </Box>
                                    </Col>
                                </Row>
                                <Row className='date-row'>
                                    <Col className='date-col'>
                                        April 29, 2:00 PM - 3:00 PM
                                    </Col>
                                </Row>
                                <Row className='match-row'>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>TEAM C</span><span>43</span></h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2} className='vs-col'>VS</Col>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>75</span><span>TEAM D</span></h6>
                                        </Box>
                                    </Col>
                                </Row>
                                <Row className='date-row'>
                                    <Col className='date-col'>
                                        April 29, 3:00 PM - 4:00 PM
                                    </Col>
                                </Row>
                                <Row className='match-row'>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>TEAM E</span><span>51</span></h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2} className='vs-col'>VS</Col>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>63</span><span>TEAM F</span></h6>
                                        </Box>
                                    </Col>
                                </Row>
                                <Row className='date-row'>
                                    <Col className='date-col'>
                                        April 29, 4:00 PM - 5:00 PM
                                    </Col>
                                </Row>
                                <Row className='match-row'>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>TEAM G</span><span>59</span></h6>
                                        </Box>
                                    </Col>
                                    <Col xs={2} className='vs-col'>VS</Col>
                                    <Col xs={5}>
                                        <Box className='team-box'>
                                            <h6><span>58</span><span>TEAM H</span></h6>
                                        </Box>
                                    </Col>
                                </Row>
                            </Container> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}