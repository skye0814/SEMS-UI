import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/dashboard.css";
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row>
                    <div className="container-dashboard-user">
                        <div className="column1">
                            <WrapItem style={{marginLeft:'10px'}}>
                                <Avatar name='Administrator'/>
                            </WrapItem>
                        </div>
                        <div className="column2">
                            <div className="row1">Jan Tangonan</div>
                            <div className="row2">Superadmin</div>
                        </div>
                    </div>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        <Row>
                            <Col>
                                <div className='dashboard-card' style={{backgroundColor: 'rgb(246, 245, 242)'}}>
                                    <div className='dashboard-card-title'>Event Created</div>
                                    <div className='dashboard-card-counter'>101</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'blue'}} />
                                </div>
                            </Col>
                            <Col>
                                <div className='dashboard-card' style={{backgroundColor: 'rgb(240, 235, 227)'}}>
                                    <div className='dashboard-card-title'>Participants</div>
                                    <div className='dashboard-card-counter'>923</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'red'}} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='dashboard-card' style={{backgroundColor: 'rgb(243, 208, 215)'}}>
                                    <div className='dashboard-card-title'>Joined Participants</div>
                                    <div className='dashboard-card-counter'>431</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'brown'}} />
                                </div>
                            </Col>
                            <Col>
                                <div className='dashboard-card' style={{backgroundColor: 'rgb(255, 239, 239)'}}>
                                    <div className='dashboard-card-title'>Average Rating</div>
                                    <div className='dashboard-card-counter'>0.5</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'black'}} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: 'rgb(243, 208, 215)', height: '95%'}}>
                            <div 
                                className='dashboard-card-title' 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px'
                                }}
                            >
                                Chart Statistics
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: 'rgb(255, 239, 239)', height: '500px'}}>
                            <div 
                                className='dashboard-card-title' 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px'
                                }}
                            >
                                Upcoming Events
                            </div>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}