import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function createData(name) {
  return {
    name,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Features Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Drag & drop reservation calendar
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Automated invoicing
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Front desk'),
  createData('Booking engine'),
  createData('House Keeping'),
  createData('Point of Service'),
  createData('Billing'),
  createData('Security'),
];

const paperStyle={
    padding:20,
    height:"auto",
    width:500,
    margin:" 100px auto"

}

export default function Pricing() {
  return (


    <div>
         <Paper elevation={3} style={paperStyle}>
        <Card sx={{ maxWidth: 345 ,marginLeft: '50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/png;base64,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"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PRICING
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Perfect for those looking to optimise performance & gain full control of your operations with more advanced capabilities.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <br/><br/>
   
        <Table aria-label="collapsible table" style={{textTransform:'uppercase'}}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Features</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <Row key={row.name} row={row} />
                ))}
          </TableBody>
        </Table>
      {/* </TableContainer> */}
    </Paper>
                </div>
  );
}
