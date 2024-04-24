import { Col, Container, Row } from "react-bootstrap";
import "../../styles/rankings.css";
import { AbsoluteCenter, Box, Divider, Grid, GridItem, Heading, Center } from "@chakra-ui/react";

export default function Rankings() {
    return (
        <>
            <div style={{ marginTop: "120px" }}></div>
            <div>
                <Grid className="grid" templateRows="repeat(1, 1fr)" templateColumns="repeat(7, 1fr)">
                    <GridItem colSpan={2}>
                        <Box className="box-1"
                            bgImage="url('/images/team icons/frog.png')" //to be changed by 2nd placer's icon
                        >
                            <img className="rank-icon"
                                src="/images/ranking icon/2nd-place.png"    
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Box className="box-0"
                            bgImage="url('/images/team icons/walrus.png')" //to be changed by 1st placer's icon
                        >
                            <img
                                className="rank-icon-1"
                                src="/images/ranking icon/1st-place.png"
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box className="box-1"
                            bgImage="url('/images/team icons/pig.png')" //to be changed by 3rd placer's icon
                        >
                            <img
                                className="rank-icon"
                                src="/images/ranking icon/3rd-place.png"
                            />
                        </Box>
                    </GridItem>
                </Grid>
                <Box position="relative" padding="10">
                    <Divider />
                    <AbsoluteCenter bg="white" px="4">
                        <Heading as='h2' size='xl'>STANDINGS</Heading>
                    </AbsoluteCenter>
                </Box>
                <Container fluid="md" className="container">
                    <Row className="row">
                        <Col xs={12}>
                            <Box className="box-2">
                                <h6>
                                    <span>1. TEAM DARLENG</span>
                                    <span>12 W  -  0 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col xs={12}>
                            <Box className="box-2">
                                <h6>
                                    <span>2. BLACKLIST RIVALRY</span>
                                    <span>11 W  -  1 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col xs={12}>
                            <Box className="box-2">
                                <h6>
                                    <span>3. AURORA</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col xs={12}>
                            <Box className="box-2">
                                <h6>
                                    <span>4. AURORA</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col xs={12}>
                            <Box className="box-2">
                                <h6>
                                    <span>5. TEAM D</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col xs={12}>
                            <Box className="box-2">
                                <h6>
                                    <span>6. TEAM A</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col xs={12}>
                            <Box bg='white' w="100%" p={5}>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}