import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../socket'
import { addMessage } from '../redux/chatSlice'
import ScrollableFeed from 'react-scrollable-feed'



const ChatMessages = ({ name }) => {

  const [message, setMessage] = useState('');
  const {messages} = useSelector(state => state.chatReducer)
  // console.log(messages);

  const dispatch = useDispatch()



  useEffect(() => {
    //  listen for 'chat message' event from server
    socket.on('chat message', (message) => {
      // Add the received message to the Redux store
      dispatch(addMessage(message))


    })

    return () => {
      socket.off('chat message')
    }


  }, [dispatch])
  const sendMessage = () => {
    if (message) {
      const newMessage = {
        id: Date.now(),
        text: message,
        user: name, // Use the user's name in the message
        userId: socket.id
      };

      // Emit the message to the server
      socket.emit('chat message', newMessage);

      // Reset input field
      setMessage('');
    }
  };


  return (
    <div className='d-flex flex-column justify-content-between py-3 px-2 ' style={{ backgroundColor: "#e9ecef",height:"28rem",width:'600px',marginLeft:'100px'}}>
        <ScrollableFeed>

      <ul style={{}}>

          {
            messages?.map((msg, index) => (
              <li key={index}>
                {
                  socket.id == msg.userId ?
                    <>
                      <h6 style={{ float: "right"}} className='fs-5'>  You : <h5 className='rounded p-1' style={{backgroundColor:'white',display:'inline',fontSize:'15px',fontSize:'20px' }}>{msg.text}</h5></h6>
                      <br />
                    </>

                    :
                    <>
                      <h6 className='fs-5'> {msg.user} : <h5 className='rounded p-1' style={{backgroundColor:'white',display:'inline',fontSize:'20px'}}>{msg.text}</h5></h6>

                    </>
                }
              </li>
            ))}

      </ul>
              </ScrollableFeed>


      <div >
        <input
          className='w-75'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.code === 'Enter' ? sendMessage() : null}
        /> <a style={{textDecoration:'none',color:'black'}} href=""> </a>
        <button style={{marginLeft:'35px',marginTop:'-10px',backgroundColor:"sky"}} onClick={sendMessage} className=' btn  rounded-circle shadow '><i class="fa-solid fa-arrow-up"></i></button>
      </div>
    </div>
  )
}

export default ChatMessages