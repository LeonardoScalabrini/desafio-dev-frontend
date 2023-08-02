import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TransactionList = ({ store }) => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getTransactions(store.storeId).then(t => {
                setTransactions(t.data);
            }).catch(_ => {
                setTransactions([]);
            });
        };

        fetchData();
    }, [store]);


    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Credit Card</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {transactions.map((t) => (
              <TableRow
                key={t.transactionId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {t.type}
                </TableCell>
                <TableCell>{t.date}</TableCell>
                <TableCell>{t.transactionValue}</TableCell>
                <TableCell>{t.cpfNumber}</TableCell>
                <TableCell>{t.creditCardNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default TransactionList;
