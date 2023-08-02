import React, { useEffect, useState } from 'react';
import FileUpload from './components/FileUpload';
import StoreSelect from './components/StoreSelect';
import { getStores } from './api';
import TransactionList from './components/TransactionList';
import Grid from '@mui/material/Grid';

const App = () => {

  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await getStores().then(s => {
        setStores(s.data);
        if (s.data.length > 0)
          setSelectedStore(s.data[0]);
      }).catch(e => {
        getStores([]);
        console.log(e);
      });
    };
    fetchData();
  }, []);

  const handleStoreChange = (event) => {
    event.preventDefault();
    setSelectedStore(stores[event.target.value]);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FileUpload/>
        </Grid>
        <Grid item xs={9}>
          {stores.length > 0 ? <StoreSelect stores={stores} handleStoreChange={handleStoreChange} /> : null}
        </Grid>
      </Grid>
      {stores.length > 0 ? <TransactionList store={selectedStore} /> : null}
    </div>
  );
};

export default App;