import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/dashboard.css";
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CanvasJSReact from '@canvasjs/react-charts';
import { color } from 'framer-motion';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Dashboard(){
    useEffect(()=> {
        var bodyElement: HTMLElement = document.getElementsByClassName("canvasjs-chart-credit")[0] as HTMLElement;
        bodyElement.style.visibility = 'hidden';
    }, []);

    const options = {
        color: '#F8F9FB',
        height: 200,
        width: 400,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        animationEnabled: true,
        title:{
            text: "Monthly Sales - 2017"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Sales (in USD)",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 42800 },
                { x: new Date(2017, 3), y: 32400 },
                { x: new Date(2017, 4), y: 35260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 40000 },
                { x: new Date(2017, 7), y: 52500 },
                { x: new Date(2017, 8), y: 32300 },
                { x: new Date(2017, 9), y: 42000 },
                { x: new Date(2017, 10), y: 37160 },
                { x: new Date(2017, 11), y: 38400 }
            ]
        }]
    };

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
                                <div className='dashboard-card' style={{backgroundColor: '#b3e8ff'}}>
                                    <div className='dashboard-card-title'>Event Created</div>
                                    <div className='dashboard-card-counter'>101</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'blue'}} />
                                </div>
                            </Col>
                            <Col>
                                <div className='dashboard-card' style={{backgroundColor: '#b3e8ff'}}>
                                    <div className='dashboard-card-title'>Participants</div>
                                    <div className='dashboard-card-counter'>923</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'red'}} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='dashboard-card' style={{backgroundColor: '#b3e8ff'}}>
                                    <div className='dashboard-card-title'>Joined Participants</div>
                                    <div className='dashboard-card-counter'>431</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'brown'}} />
                                </div>
                            </Col>
                            <Col>
                                <div className='dashboard-card' style={{backgroundColor: '#b3e8ff'}}>
                                    <div className='dashboard-card-title'>Average Rating</div>
                                    <div className='dashboard-card-counter'>0.5</div>
                                    <FontAwesomeIcon className='dashboard-card-icon' icon='chart-line' style={{fontSize: '50', color: 'black'}} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '95%'}}>
                            <div 
                                className='dashboard-card-title' 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px'
                                }}
                            >
                                Chart Statistics
                            </div>
                            <div style={{
                                bottom: '15px',
                                left: '7%',
                                position: 'absolute'
                            }}>
                                <CanvasJSChart options = {options} 
                                    /* onRef={ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '500px'}}>
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
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '500px'}}>
                            <div 
                                className='dashboard-card-title' 
                                style={{
                                    fontWeight: '600', 
                                    fontSize: '20px'
                                }}
                            >
                                Device by User
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}