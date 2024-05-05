import { Grid, GridItem } from '@chakra-ui/react'
import "../../styles/eventmatchup.css";

export function TestEventMatchup() {
    return(
        <>
        <div style={{marginTop: '120px'}}></div>
        <div className='container-index'>
            <div className='dashboard-card' style={{backgroundColor: '#b3e8ff', height: '550px', padding: '15px', margin: '20px'}}>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={2} colEnd={3}w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={4} colEnd={5} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>

                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={3} colEnd={4} w='100%' h='10' bg='blue.500' />
                </Grid>
                
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={2} colEnd={3}w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={4} colEnd={5} w='100%' h='10' bg='blue.500' />
                </Grid>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem colStart={1} colEnd={2} w='100%' h='10' bg='blue.500' />
                    <GridItem colStart={5} colEnd={6} w='100%' h='10' bg='blue.500' />
                </Grid>
            </div>
        </div>
        </>
        
    );
}