import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/eventmatchup.css";
import { Box, Divider, DividerProps } from '@chakra-ui/react'


export default function EventMatchup(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        <div className='dashboard-card' style={{ backgroundColor: '#b3e8ff', height: '370px', padding: '10px'}}>
                                <Row> {/*ROW 1 */}
                                    <Col xs={2}><Box className='box'>8th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1}></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={2}><Box className='box'>1st SEED</Box></Col>
                                </Row>

                                <Row> {/*ROW 2 */}
                                    <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-low"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 3 */}
                                    <Col xs={2}><Box className='box'>5th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={2}><Box className='box'>3rd SEED</Box></Col>
                                </Row>

                                <Row> {/*ROW 4 */}
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 5 */}
                                    <Col xs={2}><Box className='box'>7th SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical"></div></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'end'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-top"></div></Col>
                                    <Col xs={2}><Box className='box'>4th SEED</Box></Col>
                                </Row>

                                <Row> {/*ROW 6 */}
                                <Col></Col>
                                    <Col></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-low"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={2}><Box className='box'></Box></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>

                                <Row> {/*ROW 7 */}
                                <Col xs={2}><Box className='box'>2nd SEED</Box></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-left"></div></Col>
                                    <Col></Col>
                                    <Col xs={1}></Col>
                                    <Col></Col>
                                    <Col xs={1} style={{display: 'flex', alignItems: 'start'}}><div className="vertical-right"></div></Col>
                                    <Col style={{padding: '0'}}><div className="horizontal-bot"></div></Col>
                                    <Col xs={2}><Box className='box'>6th SEED</Box></Col>
                                </Row>
                        </div>    
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '550px'}}>
                            <div 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px',
                                    backgroundColor: '#6b8bcc'
                                }}
                            >
                                <Row style={{
                                    marginTop: '20px', 
                                    padding: '20px',
                                    display: 'flex',
                                    alignItems: 'center', 
                                    justifyContent: 'center'
                                }}>
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
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/ping-pong.png" alt="Sport1"/>
                                    </Col>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/tennis.png" alt="Sport1"/>
                                    </Col>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/base-ball.png" alt="Sport1"/>
                                    </Col>
                                    <Col p={5}>
                                        <img className='sports-icon' src="/images/sports icon/chess.png" alt="Sport1"/>
                                    </Col>
                                </Row>
                            </div>
                            <Container fluid="md" style={{paddingTop: '20px'}}>
                                
                                <Row style={{marginTop: '20px'}}>
                                    <Col style={{textAlign: 'right', fontSize: '12px', fontWeight: '600'}}>
                                        April 29, 1:00 PM - 2:00 PM
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '5px'}}>
                                    <Col xs={5}>
                                        <Box bg='#3646a6' w='100%' p={5} color='white'>
                                            <h6>
                                                <span>TEAM A</span><span>87</span>
                                            </h6>
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
                                            <h6>
                                                <span>88</span><span>TEAM B</span>
                                            </h6>
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
                                            <h6>
                                                <span>TEAM C</span><span>43</span>
                                            </h6>
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
                                            <h6>
                                                <span>75</span><span>TEAM D</span>
                                            </h6>
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
                                            <h6>
                                                <span>TEAM E</span><span>51</span>
                                            </h6>
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
                                            <h6>
                                                <span>63</span><span>TEAM F</span>
                                            </h6>
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
                                            <h6>
                                                <span>TEAM G</span><span>59</span>
                                            </h6>
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
                                            <h6>
                                                <span>58</span><span>TEAM H</span>
                                            </h6>
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