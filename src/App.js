import React, { useEffect, useState } from 'react';
import FileUpload from './components/FileUpload';
import StoreSelect from './components/StoreSelect';
import { getStores } from './api';
import TransactionList from './components/TransactionList';

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
      <FileUpload />
      {stores.length > 0 ?
        <div>
          <StoreSelect stores={stores} handleStoreChange={handleStoreChange} />
          <TransactionList store={selectedStore} />
        </div>
        : null
      }
    </div>
  );
};

export default App;