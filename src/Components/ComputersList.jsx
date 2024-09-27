import React, {useEffect,useState}from 'react';
import axios from 'axios';

const ComputersList = () => {
    const [computers, setComputers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/computers')
        .then(response => {
            setComputers(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[]);
  return (
    <div>
            <h1>Computer List</h1>
            <ul>
                {computers.map(computers => (
                    <li key={computers.id}>
                        <img src={computers.image} alt={computers.model} />
                        <h2>{computers.model}</h2>
                        <p>{computers.description}</p>
                        <p>Price: ${computers.price}</p>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default ComputersList
