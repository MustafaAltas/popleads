import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Book = ({ search ,books,load}) => {
  
  
  const [filter, setFilter] = useState();


  useEffect(() => {
    const filtered = books?.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(filtered);
  }, [search,books]);


  return (
    <Container maxWidth="md">
      {load && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Author</StyledTableCell>
                <StyledTableCell align="right">Year</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {search !== "" ? (
                filter?.map((item, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {item.title}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.author}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.publicationYear}
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                })
             ) : (
              books?.map((item, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.author}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.publicationYear}
                    </StyledTableCell>
                  </StyledTableRow>
                )
              })
             )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Book;
