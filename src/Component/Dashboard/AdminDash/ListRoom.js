import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)`
  background-color: #f5f5f5; /* Replace with your desired light shade color */
`;

function createData(name, floor, rate, availability) {
  return { name, floor, rate, availability };
}

const rows = [
  createData('Deluxe', 9, 10000, 'YES'),
  createData('Single AC', 9, 4545, 'YES'),
  createData('Double AC', 2, 7878, 'YES'),
  createData('Single Non-AC', 3, 5433, 'YES'),
  createData('Double Non-AC', 6, 787, 'NO'),
];

const ListRoom = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "150px" }}>
      <Typography variant="h4" gutterBottom>
        LIST OF ROOMS
      </Typography>

      <StyledTableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>TYPE</TableCell>
              <TableCell align="right">FLOOR</TableCell>
              <TableCell align="right">RATE PER DAY</TableCell>
              <TableCell align="right">AVAILABILITY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.floor}</TableCell>
                <TableCell align="right">{row.rate}</TableCell>
                <TableCell align="right">{row.availability}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Container>
  );
};

export default ListRoom;
