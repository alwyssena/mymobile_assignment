


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './jokes.css'
function Homepage() {
    
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    async function fetchJokes() {
      try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
        setJokes(response.data.jokes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jokes:', error);
      } 
    }
    fetchJokes();
  }, []);

  return (
    <>
   
        <h2 className='text-center'>Jokes</h2>
    <div className=" d-flex container mt-5 b c">
      
      
      {loading ? <div>Loading...</div> : (
        <table className="table table-striped" style={{border:"10px"}}>
          <thead >
            <tr className='text-center '>
              <th className="border">Num</th>
              <th className="border">Joke</th>
              <th className="border">category</th>
              <th className="border">id</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index} >
                <td className="border ">{index + 1}</td>
                <td className="border" >{joke.joke}</td>
                <td className="border">{joke.category}</td>
                <td className="border">{joke.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
    </div></>
  );
}

export default Homepage;