import React, { useState } from 'react'
import ChatHead from './ChatHead';
import ChatMessages from './ChatMessage';

const UserLogin = () => {

    const [name,setName] = useState('');
    const [isNameSet,setIsNameSet] = useState(false);

    console.log(name);
    console.log(!isNameSet);
    
    const handleSetName = () =>{
        if(name) {
            setIsNameSet(true); 
        }
    }
  return (
   <>
        
       {
        !isNameSet  ?
        <>
            <div style={{height:'100vh' }} className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h1 style={{marginLeft:'300px',marginTop:'100px'}} className=' fw-bolder text-black'>CHAT APP</h1>
                <div style={{height:'400px', width:'800px'}} className="d-flex ms-3 shadow flex-row  justify-content-center align-items-center">
                    <div>
                    <img height={'400px'} width={'400px'} className='border rounded mt-2 img-fluid' src="https://web3canvas.com/wp-content/uploads/2019/04/progressive-web-app-illustration-gif-animation-banner.gif" alt="" />
                    </div>
                    <div className='ms-5 d-flex flex-column justify-content-center'>
                      <h3 style={{marginTop:'-1rem'}} className='fw-bolder text-primary text-center'>Connect With Us</h3>
                    <input value={name} onChange={(e)=>setName(e.target.value)} style={{height:'40px',width:'250px',border:" none",borderRadius:'10px',border:'5px solid white'}} className='ms-5 bg-white' type="text" placeholder='Enter  name here' />
                    <button onClick={handleSetName} style={{width:'150px',height:'50px',borderRadius:'10px',fontSize:'18',marginLeft:'90px'}} className='mt-4 fw-bolder bg-primary boreder-light text-light'>Get Started</button>
                    </div>
                </div>
              </div>
            </div>

        </>
        :
        <div className='w-100 ' >
                <ChatHead name={name}/>
                <ChatMessages name={name}/>
              
            </div>
        }
   </>
  )
}

export default UserLogin