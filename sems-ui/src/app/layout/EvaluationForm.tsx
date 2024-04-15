import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/evaluationform.css";
import { Divider, Heading, Input, Select, Textarea} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Button,
  } from '@chakra-ui/react'


export default function EvaluationForm(){
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '770px', padding: '50px', paddingTop: '30px'}}>
                            <div style={{textAlign: 'center'}}>
                                <Heading>Rate this Event</Heading>
                                <Divider color="#F8F9FB"/>
                                <FormControl isRequired style={{marginTop: '15px'}}>
                                    <FormLabel>Name</FormLabel>
                                    <Input placeholder='Name' style={{backgroundColor: '#F8F9FB'}}/>
                                </FormControl>   
                                
                                <FormControl isRequired>
                                    <FormLabel>
                                        Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 
                                        'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. 
                                        Iam hoc tu facere conatus sum ad te in omni tempore? 
                                    </FormLabel>
                                    <Select placeholder='Select option' style={{backgroundColor: '#F8F9FB'}}>
                                        <option value='option1'>Very Satisfied</option>
                                        <option value='option2'>Satisfied</option>
                                        <option value='option3'>Neutral</option>
                                        <option value='option4'>Disappointed</option>
                                        <option value='option5'>Very Disappointed</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired style={{marginTop: '15px'}}>
                                    <FormLabel>
                                        Qui nunc loqueris? Ecce qui cogitatis? Vos scitis quanta ego faciam annum Id est, ut ego 
                                        dixi vobis non credunt. Scis quid si ne subito placuit ire in opus? 
                                    </FormLabel>
                                    <Select placeholder='Select option' style={{backgroundColor: '#F8F9FB'}}>
                                        <option value='option1'>Very Satisfied</option>
                                        <option value='option2'>Satisfied</option>
                                        <option value='option3'>Neutral</option>
                                        <option value='option4'>Disappointed</option>
                                        <option value='option5'>Very Disappointed</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired style={{marginTop: '15px'}}>
                                    <FormLabel>
                                        Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper 
                                        aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci 
                                        memetipsum explicans. Gus mortuus est. Lorem opus habeo? 
                                    </FormLabel>
                                    <Select placeholder='Select option' style={{backgroundColor: '#F8F9FB'}}>
                                        <option value='option1'>Very Satisfied</option>
                                        <option value='option2'>Satisfied</option>
                                        <option value='option3'>Neutral</option>
                                        <option value='option4'>Disappointed</option>
                                        <option value='option5'>Very Disappointed</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired style={{marginTop: '15px'}}>
                                    <FormLabel>
                                        Mauris a nunc occideritis me rectum. Videtur quod Ive facillimum, qui fecit vos. Potes me 
                                        interficere, sine testibus et tunc manere in pauci weeks vel mensis vestigia Isai Pinkman 
                                        et vos quoque illum occidere. Exercitium inutili option A. Videtur mihi quod autem est?
                                    </FormLabel>
                                    <Select placeholder='Select option' style={{backgroundColor: '#F8F9FB'}}>
                                        <option value='option1'>Very Satisfied</option>
                                        <option value='option2'>Satisfied</option>
                                        <option value='option3'>Neutral</option>
                                        <option value='option4'>Disappointed</option>
                                        <option value='option5'>Very Disappointed</option>
                                    </Select>
                                </FormControl>
                                
                                <FormControl style={{marginTop: '15px'}}>
                                    <FormLabel>
                                        Comments and Suggestion
                                    </FormLabel>
                                    <Textarea placeholder='Here is a sample placeholder' style={{backgroundColor: '#F8F9FB'}}/>
                                </FormControl>

                                <Button colorScheme='blue' style={{marginTop: '20px'}}>Submit</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}