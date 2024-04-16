import { Col, Container, Row } from "react-bootstrap";
import "../../styles/evaluationform.css";
import { AbsoluteCenter, Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";

export default function Rankings() {
    return (
        <>
            <div style={{ marginTop: "120px" }}></div>
            <div>
                <Grid
                    h="350px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(7, 1fr)"
                    gap={4}
                    padding={20}
                    paddingTop={0}
                    paddingBottom={0}
                    alignItems="end"
                >
                    <GridItem colSpan={2}>
                        <Box
                            bgImage="url('/images/team icons/frog.png')" //to be changed by 2nd placer's icon
                            bgSize="cover"
                            height="280px"
                            display="Flex"
                            alignItems="end"
                            justifyContent="center"
                        >
                            <img
                                className="sports-icon"
                                src="/images/ranking icon/2nd-place.png"
                                alt="Sport1"
                                style={{ height: "100px" }}
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Box
                            bgImage="url('/images/team icons/walrus.png')" //to be changed by 1st placer's icon
                            bgSize="cover"
                            height="350px"
                            display="Flex"
                            alignItems="end"
                            justifyContent="center"
                        >
                            <img
                                className="sports-icon"
                                src="/images/ranking icon/1st-place.png"
                                alt="Sport1"
                                style={{ height: "150px" }}
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box
                            bgImage="url('/images/team icons/pig.png')" //to be changed by 3rd placer's icon
                            bgSize="cover"
                            height="280px"
                            display="Flex"
                            alignItems="end"
                            justifyContent="center"
                        >
                            <img
                                className="sports-icon"
                                src="/images/ranking icon/3rd-place.png"
                                alt="Sport1"
                                style={{ height: "100px" }}
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
                <Container fluid="md" style={{ paddingTop: "20px" }}>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={12}>
                            <Box bg="#3646a6" w="100%" p={5} color="white">
                                <h6>
                                    <span>1. TEAM DARLENG</span>
                                    <span>12 W  -  0 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={12}>
                            <Box bg="#3646a6" w="100%" p={5} color="white">
                                <h6>
                                    <span>2. BLACKLIST RIVALRY</span>
                                    <span>11 W  -  1 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={12}>
                            <Box bg="#3646a6" w="100%" p={5} color="white">
                                <h6>
                                    <span>3. AURORA</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={12}>
                            <Box bg="#3646a6" w="100%" p={5} color="white">
                                <h6>
                                    <span>4. AURORA</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={12}>
                            <Box bg="#3646a6" w="100%" p={5} color="white">
                                <h6>
                                    <span>5. TEAM D</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
                        <Col xs={12}>
                            <Box bg="#3646a6" w="100%" p={5} color="white">
                                <h6>
                                    <span>6. TEAM A</span>
                                    <span>10 W  -  2 L</span>
                                </h6>
                            </Box>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "15px" }}>
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
