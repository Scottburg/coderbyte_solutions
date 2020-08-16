// We provided some simple React template code. Your goal is to create a simple form at the top that
//  allows the user to enter in a first name, last name, and phone number and there should be a submit
//   button. Once the submit button is pressed, the information should be displayed in a list below
//    (automatically sorted by last name) along with all the previous information that was entered.
//     This way the application can function as a simple phone book. When your application loads, the
//      input fields (not the phone book list) should be prepopulated with the following values already:

// First name = Coder
// Last name = Byte
// Phone = 8885559999

// You are free to add classes and styles, but make sure you leave the element ID's as they are.
//  Submit your code once it is complete and our system will validate your output.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const initialState = {
    userFirstname: '',
    userLastname: '',
    userPhone: '',
  };
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userFirstname, userLastname, userPhone } = state;
    const data = {
      userFirstname,
      userLastname,
      userPhone,
    };
    addEntryToPhoneBook(data);
  };

  const { userFirstname, userLastname, userPhone } = state;
  return (
    <form
      onSubmit={(e) => {
        handleSubmit;
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        placeHolder="Coder"
        value={userFirstname}
        onChange={handleChange}
        type="text"
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        placeHolder="Byte"
        value={userLastname}
        onChange={handleChange}
        type="text"
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        placeHolder="8885559999"
        value={userPhone}
        onChange={handleChange}
        type="text"
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable(props) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.entries &&
          props.entries.length &&
          props.entries.map((entry) => (
            <tr>
              <td style={style.tableCell}>{entry.userFirstname}</td>
              <td style={style.tableCell}>{entry.userLastname}</td>
              <td style={style.tableCell}>{entry.userPhone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [entries, setEntries] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry]);
    console.log(entries);
  };
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={entries} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById('root'));
