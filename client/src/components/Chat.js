const Chat = ({descendingOrderMessages, user}) => {
    return (
        <>
            <div className="chat-display">
                {descendingOrderMessages.map((message, _index) => (
                    <div
            key={_index}
            className={`chat-message ${
              message.name === user.name ? 'user-message' : 'friend-message'
            }`}
          >
            
            <p className="message-content">{message.message}</p>
          </div>
                ))}
            </div>
        </>
    )
}

export default Chat