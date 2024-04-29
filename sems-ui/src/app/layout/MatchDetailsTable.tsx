import "../../styles/matchdetailstable.css";
import { Table, Thead, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react'

export default function MatchDetailsTable(){
    return (
        <TableContainer>
            <Table variant="simple" size='sm'>
                <Thead >
                    <Tr>
                        <Td className="table-head">QUARTER</Td>
                        <Td isNumeric className="table-head">SCORE</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1st Quarter</Td>
                        <Td isNumeric>23</Td>
                    </Tr>
                    <Tr>
                        <Td>2nd Quarter</Td>
                        <Td isNumeric>20</Td>
                    </Tr>
                    <Tr>
                        <Td>3rd Quarter</Td>
                        <Td isNumeric>21</Td>
                    </Tr>
                    <Tr>
                        <Td>4th Quarter</Td>
                        <Td isNumeric>23</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
}