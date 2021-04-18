import axios from 'axios';

const STUDENTS_REST_API_URL="http://localhost:8090/api/students";

class StudentService {
    getStudents(){
       return axios.get(STUDENTS_REST_API_URL);
    }
    

}

export default new StudentService()