import React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { DataGrid } from '@material-ui/data-grid';
import { Editors } from "react-data-grid-addons";
// import * as DataGridAddons from 'react-data-grid-addons';

import Navbar from './navbar/Navbar'
import Sidebar from '../components/Food/sidebar/Sidebar'

import "./styles.css";
import PageGuide from "./PageGuide";

import Plus from './Plus'

function getFullName(params) {
  return `${params.getValue(params.id, 'amount') || ''} ${
    params.getValue(params.id, 'price') || ''
  }`;
}

const { DropDownEditor } = Editors;
const Category = [
  { id: "bug", value: "Breakfast" },
  { id: "epic", value: "Lunch" },
  { id: "story", value: "Dinner" },
  { id: "story", value: "Teat-Time" },
  { id: "story", value: "Seasonal Meals" },
  { id: "story", value: "Other" },
];
const FoodCategory = <DropDownEditor options={Category} />;

const Type = [
  { id: "bug", value: "None" },
  { id: "epic", value: "Vegetable" },
  { id: "story", value: "Chicken" },
  { id: "story", value: "Fish" },
  { id: "story", value: "Meat" },
  { id: "story", value: "Other" },
];
const FoodType = <DropDownEditor options={Type} />;

const columns = [
  { key: "id", name: "No" },
  { key: "category", name: "Food Category", editor: FoodCategory },
  { key: "type", name: "Food Type", editable:true, editor: FoodType },
  { key: "menu", name: "Food Menu", editable:true },
  { field: 'amount', key: "amount", name: "Amount", editable:true, type: 'number' },
  { field: 'price', key: "price", name: "Price (LKR)", editable:true, type: 'number'},

  // {
  //   field: 'fullName', 
  //   key: 'fullName',
  //   name: 'Net Price (LKR)',
  //   width: 160,
  //   editable: true,
  //   valueGetter: getFullName,
  //   sortComparator: (v1, v2) => v1.toString().localeCompare(v2.toString()),
  // },

  // {
  //       name: 'Net Price',
  //       key: 'net',
  //       // description: 'This column has a value getter and is not sortable.',
  //       sortable: false,
  //       width: 160,
  //       valueGetter: (params) =>
  //         `${params.getValue(params.key, 'amount')}* ${params.getValue(params.key, 'price')}`,
  //     },
  
];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'foodCategory',
//     headerName: 'Food Category',
//     width: 180,
//     editor: IssueTypeEditor
//   },
//   {
//     field: 'foodType',
//     headerName: 'Food Type',
//     width: 160,
//     editable: true,
//   },
//   {
//     field: 'menu',
//     headerName: 'Food Menu',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'amount',
//     headerName: 'Amount',
//     type: 'number',
//     width: 130,
//     editable: true,
//   },
//   {
//     field: 'price',
//     headerName: 'Price (LKR)',
//     type: 'number',
//     width: 150,
//     editable: true,
//   },
// //   {
// //     field: 'fullName',
// //     headerName: 'Full name',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     width: 160,
// //     valueGetter: (params) =>
// //       `${params.getValue(params.id, 'firstName') || ''} ${
// //         params.getValue(params.id, 'lastName') || ''
// //       }`,
// //   },
// ];

const rows = [
  { id: 1, category: "Select Category", type: "Select Type", menu: "Add Menu", amount: 0, price: 0 },
  { id: 2, category: "Select Category", type: "Select Type", menu: "Add Menu", amount: 0, price: 0 },
  { id: 3, category: "Select Category", type: "Select Type", menu: "Add Menu", amount: 0, price: 0 }
];

class Example extends React.Component {
  
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
      <div >
        <div><Navbar /></div>
        <div style={{display:'flex'}}>
        <div style={{width:502}}><Sidebar /></div>
        {/* <Sidebar /> */}
      <div style={{ height: 0, width: '100%', alignItems:'center', backgroundColor:'#00537773', marginLeft:220, marginTop:20, marginLeft:20 }}>
        <ReactDataGrid
          style={{backgroundColor:'#00537773'}}
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={3}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
        <Plus />
        {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      /> */}
        {/* <PageGuide /> */}
      </div>
      </div>
    </div>
    );
  }
}
export default Example;