import React from 'react';
class Count extends React.Component
{
    render()
    {
        const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
        return (
            <div> 
             <h1>currDate = {`${date} / ${month} / ${year}`}</h1> 
             
            
            </div>
        )
        
    }
}

export default Count;