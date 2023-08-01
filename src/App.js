import React, { useState } from 'react';
import FileUpload from './pages/FileUpload';
import StoreSelect from './pages/StoreSelect';
import { getTransactions } from './api';

const stores = await getTransactions();

const App = () => {

  const [selectedStore, setSelectedStore] = useState(stores.data[0]);

  const handleStoreChange = (event) => {
    setSelectedStore(stores.data[event.target.value]);
  };

  return (
    <div>
      <FileUpload/>
      <StoreSelect stores={stores.data} selectedStore={selectedStore} handleStoreChange={handleStoreChange}/>
    </div>
  );
};

export default App;