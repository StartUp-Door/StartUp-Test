import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={technician}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}

      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginLeft: 2 }, {display:'flex'}, {flexWrap:'wrap'}}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}

      style={{backgroundColor: 'white'},{width: '40ch'}}

      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Select Your Technician Category" placeholder="Technician" />
      )}

    />
  );
}

const technician = [
  { title: 'IT Services' },
  { title: 'Electrician' },
  { title: 'Plumber' },
  { title: 'Motor Mechanic' },
  { title: 'Carpenter' },
  { title: "Cleaner" },
  { title: 'Oiler' },
  { title: 'Other' },
];


