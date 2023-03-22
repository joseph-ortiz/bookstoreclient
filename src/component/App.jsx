//import logo from './../logo.svg';
import './App.css';
import axios from 'axios';
import baseUrl from '../config'
import Layout from './layout/Layout'

function App() {
  axios(`${baseUrl}/api/v1/books`).then(books => {console.log(books)})
  
  return (
    <Layout>
      <div>My First component</div>
    </Layout>
  );
}

export default App;
