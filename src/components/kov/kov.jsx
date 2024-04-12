// Importy potřebných MUI komponent
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

// Data pro tabulku
const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', age: 30 },
  { id: 3, firstName: 'Bob', lastName: 'Smith', age: 22 },
];

// Názvy sloupců
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

// Komponenta pro zobrazení tabulky
const Kov = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* MUI komponenta DataGrid pro zobrazení tabulky */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />

      {/* Příklad použití dalšího MUI komponentu */}
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
};

export default Kov;
