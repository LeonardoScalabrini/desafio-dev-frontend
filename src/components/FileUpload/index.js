import React, { useState } from 'react';
import { uploadCnab } from '../../api';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      await uploadCnab(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="text/*" multiple type="file" onChange={handleFileChange}/>
      </Button>
      <TextField
            disabled
            size="small"
            variant='outlined'
            id="id-text-file"
            label=""
            defaultValue=""
            value={selectedFile ? selectedFile.name : null}
          />
        <Button variant="outlined" component="label" onClick={handleFileUpload} disabled={!selectedFile}>Send</Button>
    </Stack>
  );
};

export default FileUpload;
