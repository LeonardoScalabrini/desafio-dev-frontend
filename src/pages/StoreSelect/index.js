import React from 'react';

const StoreSelect = ({stores, selectedStore, handleStoreChange}) => {
  return (
    <div>
      <h2>Stores</h2>
      <select id={selectedStore.transactionId} value={selectedStore.storeName} onChange={handleStoreChange}>
        {stores.map((store, index) => (
          <option key={store.transactionId} value={index}>
            {store.storeName}
          </option>
        ))}
      </select>
      <br/>
      <br/>
      <table>
        <thead>
          <tr>
            <td>Store Name</td>
            <td>Store Owner</td>
            <td>Balance</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedStore.storeName}</td>
            <td>{selectedStore.ownerName}</td>
            <td>{selectedStore.storeBalance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StoreSelect;
