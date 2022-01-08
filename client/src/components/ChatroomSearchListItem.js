import React from 'react'
import logo from '../images/moustache-man.jpg'


function ChatroomSearchListItem({ chatroom, setSelectedChatroom }) {
  const { id, name, image_url, bio } = chatroom

  function handleChatroomClick() {
    setSelectedChatroom(id)
  }

  return (
    <div className='search-item' onClick={handleChatroomClick}>
      <img src={image_url || logo} alt={image_url === '' ? 'moustache man' : 'chatroom image'} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default ChatroomSearchListItem