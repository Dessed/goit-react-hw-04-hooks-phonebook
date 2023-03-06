import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { InputField, Label, Name,  Input, Button  } from './ContactForm.styled';


export const ContactForm = ({onFormSubmit}) => {
    // state = {
    //     id: '',
    //     name: '',
    //     number: '',
    // };
    const [id, setId] = useState ('');
    const [name, setName] = useState ('');
    const [number, setNumber] = useState ('');
    

    const handleChange = e => {
          const {name, value} = e.currentTarget;
          const id = nanoid(3);

          setId(id);
      
          switch (name) {
            case 'name':
              setName(value);
              break; 

            case 'number':
              setNumber(value);
              break;
            
              default: 
            console.log(`Тип поля name - ${name} не обрабатывается`);
          }
          // this.setState({ [name]: value });
        };

    // const handleChange = e => {
    //     const {name, value} = e.currentTarget;
    //     const id = nanoid(3);
    //     setId(id);
    //     setName(value);
    //     // this.setState({id: id, [name]: value });
    //   };

    const handleSubmit = e => {
        e.preventDefault();
        onFormSubmit({id, name, number});
        resetInputData();
      };

    const resetInputData = () => {
        setName('');
        setNumber('');
        // this.setState({
        //   name: '', 
        //   number: '',
        // })
      };
    
    // render () {
    //     const handleChange = this.handleChange;
    //     const handleSubmit = this.handleSubmit;
    //     const { name, number } = this.state;
       
        return (
            <InputField onSubmit={handleSubmit}> 
                <Label>
                  <Name>Name</Name>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, 
                    Charles de Batz de Castelmore d'Artagnan"
                    required/>
        
                  <Name>Phone</Name>
                  <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                  <Button type='submit' name='Contact'>Add contact</Button>
                </Label>
            </InputField> 
        );
    // };
};


ContactForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  })
};