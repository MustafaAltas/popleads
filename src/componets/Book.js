import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


const API_URL = "http://localhost:3000/books.json "
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));




const Book = ({search}) => {
  const [books,setBooks]=useState()
  const [load,setLoad]=useState(false)
  const [filter,setFilter]=useState()



  useEffect(()=>{


    setTimeout(async()=>{
      await setLoad(true)
       await fetch(API_URL)
        .then(response => response.json())
        .then(data =>setBooks(data.books));
        const filtered = await books.filter((item) => {
            return Object.keys(item).some((key) => {
              return item[key].toLowerCase().toString().includes(search.toLowerCase());
            });
          });
          await setFilter(filtered)
    },2000)  
   
        
 
   
  },[])
  console.log(books);
  
  
    return (
        <Container maxWidth="md">
            {load &&
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
              {
                   filter?.map((item,index)=>{
                      return(
                          <StyledTableRow key={index} >
                    <StyledTableCell component="th" scope="row">
                    {item.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.author}</StyledTableCell>
                    <StyledTableCell align="right">{item.publicationYear}</StyledTableCell>
                  
                  </StyledTableRow>
                      )
                  })
              }
              </TableBody>
            </Table>
          </TableContainer>
            }
        
    </Container>
    
  )
}

export default Book