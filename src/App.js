import React, { useEffect, useState } from 'react';
import FileUpload from './pages/FileUpload';
import StoreSelect from './pages/StoreSelect';
import { getStores } from './api';
import TransactionList from './pages/TransactionList';

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
        alert("Some error happend!");
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
          <StoreSelect stores={stores} selectedStore={selectedStore} handleStoreChange={handleStoreChange} />
          <TransactionList store={selectedStore} />
        </div>
        : null
      }
    </div>
  );
};

export default App;