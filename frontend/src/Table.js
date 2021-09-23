import React, { Component } from 'react'

class Table extends Component {
           constructor(props) {
              super(props) 
              this.state = {
                 students: [
                    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
                 ]
              }
           }

           viewRow(id,e) {
             alert('selectedId:'+ id);
             localStorage.setItem('transactionId',id);
            }


           renderTableData() {
              return this.state.students.map((student, index) => {
                 const { id, name, age, email } = student //destructuring
                 return (
                    <tr key={id}>
                       <td>{id}</td>
                       <td>{name}</td>
                       <td>{age}</td>
                       <td>{email}</td>
                       <td>
                          <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                            </select>
                        </td>
                       <td><button onClick={(e) => this.viewRow(id, e)}>View Row Id</button></td>

                    </tr>
                 )
              })
           }};
export default Table;