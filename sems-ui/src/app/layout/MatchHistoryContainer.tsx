import { Box } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { Team } from "../models/Team";
import { Match } from "../models/Match";


export default function MatchHistoryContainer() {
    // test teams data
    const matchData: Match[] = [
    {
        id: 1,
        eventId: 0,
        event: undefined,
        teamId1: 0,
        teamId2: 0,
        team1: {
            id: 1,
            teamName: 'Team Darleng',
            eventId: 2,
            event: null,
            teamLogoId: 0,
            teamLogo: null
        },
        team2: {
            id: 2,
            teamName: 'Blacklist Rivalry',
            eventId: 2,
            event: null,
            teamLogoId: 0,
            teamLogo: null
        },
        round: 0,
        winnerId: 0,
        winner: undefined,
        matchStartDate: null,
        matchStatus: "",
        team1Score: 87,
        team2Score: 88
    },
    {
        id: 2,
        eventId: 0,
        event: undefined,
        teamId1: 0,
        teamId2: 0,
        team1: {
            id: 3,
            teamName: 'Aurora',
            eventId: 2,
            event: null,
            teamLogoId: 0,
            teamLogo: null
        },
        team2: {
            id: 4,
            teamName: 'Gaimin Gladiators',
            eventId: 2,
            event: null,
            teamLogoId: 0,
            teamLogo: null
        },
        round: 0,
        winnerId: 0,
        winner: undefined,
        matchStartDate: null,
        matchStatus: "",
        team1Score: 43,
        team2Score: 75
    }
    ]

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
                        <h6>
                            <span>{matchData.find((element, index) => index==0)?.team1?.teamName}</span>
                            <span>{matchData.find((element, index) => index==0)?.team1Score}</span>
                        </h6>
                    </Box>
                </Col>
                <Col xs={2} className='vs-col'>VS</Col>
                <Col xs={5}>
                    <Box className='team-box'>
                        <h6>
                            <span>{matchData.find((element, index) => index==0)?.team2Score}</span>
                            <span>{matchData.find((element, index) => index==0)?.team2?.teamName}</span>
                        </h6>
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
                        <h6>
                            <span>{matchData.find((element, index) => index==1)?.team1?.teamName}</span>
                            <span>{matchData.find((element, index) => index==1)?.team1Score}</span>
                        </h6>
                    </Box>
                </Col>
                <Col xs={2} className='vs-col'>VS</Col>
                <Col xs={5}>
                    <Box className='team-box'>
                        <h6>
                            <span>{matchData.find((element, index) => index==1)?.team2Score}</span>
                            <span>{matchData.find((element, index) => index==1)?.team2?.teamName}</span>
                        </h6>
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