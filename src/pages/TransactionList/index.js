import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../api';

const TransactionList = ({ store }) => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getTransactions(store.storeId).then(t => {
                setTransactions(t.data);
            }).catch(e => {
                setTransactions([]);
                alert("Some error happend!");
            });
        };

        fetchData();
    }, [store]);


    return (
        <div>
            <h2>Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <td>Type</td>
                        <td>Date</td>
                        <td>Value</td>
                        <td>CPF</td>
                        <td>Credit Card</td>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t) => (
                        <tr key={t.transactionId}>
                            <td>{t.type}</td>
                            <td>{t.date}</td>
                            <td>{t.transactionValue}</td>
                            <td>{t.cpfNumber}</td>
                            <td>{t.creditCardNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;
