// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Name,  Input } from './Filter.styled';

export const Filter = ({filter, onChange}) => {
    // const [filter, setFilter] = useState('');

    // const handleFilterChange = e => {
    //     setFilter(e.currentTarget);
    // };


    return (
        <Label>
            <Name>Find contacts by name</Name>
          <Input
              type="text"
              name="filter"
            //   value={filter}
              onChange={onChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required/>
        </Label> 
    );
};


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
};