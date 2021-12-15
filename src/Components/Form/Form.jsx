import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import s from '../Form/Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // const { name, value } = e.currentTarget;
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <Button type="submit" text="Add contact" />
      </form>
    );
  }
}
// console.log(addContact());
const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(addContact(value)),
});

export default connect(null, mapDispatchToProps)(Form);
