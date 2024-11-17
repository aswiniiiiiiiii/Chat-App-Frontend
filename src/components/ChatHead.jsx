import React from 'react'

const ChatHead = ({name}) => {
  return (
    <div style={{minHeight:'30px',width:'600px',marginLeft:'100px',backgroundColor:'skyblue'}} className='mt-5  p-2 d-flex justify-content-between '>
        <div className='d-flex'>
            <h2 className="text-dark ms-3">{name}</h2>
        </div>
        <div  className='d-flex p-3'>
        <a style={{textDecoration:'none',color:'black'}} href="">  <i class="fa-solid fa-ellipsis-vertical"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default ChatHead