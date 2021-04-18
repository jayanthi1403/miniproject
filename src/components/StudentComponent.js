import userEvent from '@testing-library/user-event';
import React from 'react';
import StudentService from '../services/StudentService';


class StudentComponent extends React.Component{
             
    constructor(props){
        super(props)
        this.state ={
            students:[]
        }
    }
    componentDidMount(){
        StudentService.getStudents().then((response) => {
            this.setState({students:response.data})
        });
    }
    render(){
        return (
            <div style={{backgroundColor:"pink"}}  >
                
                <h1 style={{color:"red",textAlign:'center'}} className="text-centered">Students List</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr >
                            <td style={{color:"orange"}}>User Id</td>
                            <td style={{color:"orange"}}>Student FirstName</td>
                            <td style={{color:"orange"}}>Student LastName</td>
                            <td style={{color:"orange"}}>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(
                                student =>
                                <tr key={student.id}>
                                    <td style={{color:"blue"}}>{student.id}</td>
                                    <td style={{color:"blue"}}>{student.firstName}</td>
                                    <td style={{color:"blue"}}>{student.lastName}</td>
                                    <td style={{color:"blue"}}>{student.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentComponent