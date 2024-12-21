import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Reports() {
  const [reports,setReports]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');


  useEffect(()=>{
    const fetchReports= async() =>{
    try{
      const response=await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-11-17&sortBy=publishedAt&apiKey=d2b867f83ad54b9a8df620ba83d7be6a')
      setReports(response.data.articles)
      setLoading(false)
    }
    catch(err)
    {
      setError('Error loading');
      setLoading(false)
    }
  }; 
  fetchReports();

  },[])
  return (
    <>
    {loading && <p>Loading Report....</p>}
    {error && <p>{error}</p>}

    {!loading && !error && (
      <div className='p-4'>
        <h1 className='text-2xl font-bold mb-3 text-center'>Reports</h1>
        <ul className='space-y-4'>
          {reports.map((report,index)=>(
              <li className='border p-4 shadow-lg bg-white hover:bg-slate-300'
              key={index}>
                <h3 className='text-lg font-semibold'>{report.content}</h3>
                <p className='text-sm text-gray-700'>{report.description}</p>
                <a href={report.url} target='_blank' className='text-sm text-blue-700 font-bold mt-2 block'>Read more</a>
              </li>
          ))}
         
        </ul>
      </div>
    )
    }
    </>
  )
}

export default Reports