import { Box } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";


export default function MatchHistoryContainer() {
    return (
        <Container fluid="md" className='match-container'>
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
        </Container>                                
    );
}