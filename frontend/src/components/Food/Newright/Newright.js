import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Editors } from "react-data-grid-addons";

import Check from './Check'

// const { DropDownEditor } = Editors;
// const issueTypes = [
//   { id: "bug", value: "Bug" },
//   { id: "epic", value: "Epic" },
//   { id: "story", value: "Story" }
// ];
// const IssueTypeEditor = <DropDownEditor options={issueTypes} />;

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'foodCategory',
    headerName: 'Food Category',
    width: 180,
    editor: IssueTypeEditor
  },
  {
    field: 'foodType',
    headerName: 'Food Type',
    width: 160,
    editable: true,
  },
  {
    field: 'menu',
    headerName: 'Food Menu',
    width: 200,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 130,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price (LKR)',
    type: 'number',
    width: 150,
    editable: true,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
];

const rows = [
  { id: 1, foodCategory: 'Breakfast', foodType: '', menu:'', amount: 0, price: 0 },
  { id: 2, foodCategory: 'Lunch', foodType: '', menu:'', amount: 0, price: 0 },
  { id: 3, foodCategory: 'Dinner', foodType: '', menu:'', amount: 0 , price: 0},
  { id: 4, foodCategory: 'Tea Time', foodType: '', menu:'', amount: 0 , price: 0},
  { id: 5, foodCategory: 'Seasonal Meals', foodType: '', menu:'', amount: 0 , price: 0 },
];

export default function DataGridDemo() {
  return (
<div>
    <div>
        
    </div>
    <div style={{ height: 400, width: '68%', alignItems:'center', backgroundColor:'#00537773' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
</div>
  );
}
