import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

import NumericEditor from '@inovua/reactdatagrid-community/NumericEditor'
import BoolEditor from '@inovua/reactdatagrid-community/BoolEditor'
import SelectEditor from '@inovua/reactdatagrid-community/SelectEditor'

// import people from './people'
// import flags from './flags'

const gridStyle = { minHeight: 550 };

const countryData = [
  { id: 'uk', label: 'United Kindom' },
  { id: 'usa', label: 'United States' },
  { id: 'ca', label: 'Canada' }
]

const columns = [
  { name: 'id', header: 'Id', defaultVisible: false, minWidth: 100, type: 'number' },
  { name: 'name', header: 'Name', defaultFlex: 1, minWidth: 200, maxWidth: 300 },
  { name: 'age', header: 'Age', minWidth: 200, type: 'number', editor: NumericEditor },
//   { name: 'student', header: 'Student', width: 100, render: ({ value }) => value? 'yes':'no', editor: BoolEditor },
  { 
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    width: 100,
    // render: ({ value })=> flags[value]? flags[value] : value,
    editor: SelectEditor,
    editorProps: {
      idProperty: 'id',
      dataSource: countryData,
      collapseOnSelect: true,
      clearIcon: null
    }
  },
  { name: 'city', header: 'City', defaultFlex: 1, minWidth: 200 }
];

export default function App () {
//   const [dataSource, setDataSource] = useState(people);

//   const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
//     const data = [...dataSource];
//     data[rowIndex] = Object.assign({}, data[rowIndex], { [columnId]: value })

//     setDataSource(data);
//   }, [dataSource])

  return (
    <div>
      <h3>Grid with numeric, select & bool editors </h3>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        // onEditComplete={onEditComplete}
        editable={true}
        columns={columns}
        // dataSource={dataSource}
      />
    </div>
  )
}

