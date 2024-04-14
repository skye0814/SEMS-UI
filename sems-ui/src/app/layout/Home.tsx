import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/home.css";
import { Avatar, AvatarBadge, AvatarGroup, Center, Wrap, WrapItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CanvasJSReact from '@canvasjs/react-charts';
import background from "../../assets/img/sport-1.svg";
import { Box } from '@chakra-ui/react'
import baskeball from "../../assets/Sports Icon/basketball.png"

export default function Home(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        <div style={{
                            height: '500px',
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover'
                            }}>
                            <div 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px',
                                    textAlign: 'center'
                                }}
                            >
                                Upcoming Events
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '500px'}}>
                            <div 
                                className='dashboard-card-title' 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px'
                                }}
                            >
                                
                            </div>
                            <Container fluid="md" style={{paddingTop: '20px'}}>
                                <Row style={{marginTop: '20px'}}>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/basketball.png" alt="Sport1"/>
                                    </Col>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/football.png" alt="Sport1"/>
                                    </Col>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/volleyball.png" alt="Sport1"/>
                                    </Col>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/badminton.png" alt="Sport1"/>
                                    </Col>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/chess.png" alt="Sport1"/>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Col style={{textAlign: 'right', fontSize: '12px', fontWeight: '600'}}>
                                        April 29, 1:00 PM - 2:00 PM
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '5px'}}>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white'>
                                            Team A
                                        </Box>
                                    </Col>
                                    <Col xs={2} style={{
                                        textAlign: 'center', 
                                        display: 'flex',
                                        alignItems: 'center', 
                                        justifyContent: 'center'
                                        }}>
                                            VS
                                    </Col>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white'>
                                            Team B
                                        </Box>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Col style={{textAlign: 'right', fontSize: '12px', fontWeight: '600'}}>
                                        April 29, 2:00 PM - 3:00 PM
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '5px'}}>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={4} color='white'>
                                            Team C
                                        </Box>
                                    </Col>
                                    <Col xs={2} style={{
                                        textAlign: 'center', 
                                        display: 'flex',
                                        alignItems: 'center', 
                                        justifyContent: 'center'
                                        }}>
                                            VS
                                    </Col>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={4} color='white'>
                                            Team D
                                        </Box>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Col style={{textAlign: 'right', fontSize: '12px', fontWeight: '600'}}>
                                        April 29, 3:00 PM - 4:00 PM
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '5px'}}>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={4} color='white'>
                                            Team E
                                        </Box>
                                    </Col>
                                    <Col xs={2} style={{
                                        textAlign: 'center', 
                                        display: 'flex',
                                        alignItems: 'center', 
                                        justifyContent: 'center'
                                        }}>
                                            VS
                                    </Col>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={4} color='white'>
                                            Team F
                                        </Box>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '20px'}}>
                                    <Col style={{textAlign: 'right', fontSize: '12px', fontWeight: '600'}}>
                                        April 29, 4:00 PM - 5:00 PM
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '5px'}}>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={4} color='white'>
                                            Team G
                                        </Box>
                                    </Col>
                                    <Col xs={2} style={{
                                        textAlign: 'center', 
                                        display: 'flex',
                                        alignItems: 'center', 
                                        justifyContent: 'center'
                                        }}>
                                            VS
                                    </Col>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={4} color='white'>
                                            Team H
                                        </Box>
                                    </Col>
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