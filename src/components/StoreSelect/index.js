import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const StoreSelect = ({ stores, handleStoreChange }) => {

  const [storeIndex, setStoreIndex] = useState(0);

  const handleChange = (event) => {
    setStoreIndex(event.target.value);
    handleStoreChange(event)
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="labelId">Store</InputLabel>
            <Select
              labelId="labelId"
              id="selectId"
              value={storeIndex}
              label="Store"
              onChange={handleChange}
            >
              {stores.map((s, index) => (
                <MenuItem key={s.storeId} value={index}>{s.storeName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} align="center">
          <TextField
            disabled
            fullWidth
            id="storeName"
            label="Store"
            defaultValue=""
            value={stores[storeIndex].storeName}
          />
        </Grid>
        <Grid item xs={3} align="center">
          <TextField
            disabled
            fullWidth
            id="ownerName"
            label="Owner"
            defaultValue=""
            value={stores[storeIndex].ownerName}
          />
        </Grid>
        <Grid item xs={3} align="center">
          <TextField
            disabled
            fullWidth
            id="storeBalance"
            label="Balance"
            defaultValue=""
            value={stores[storeIndex].storeBalance}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default StoreSelect;
