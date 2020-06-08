import React, { FC, SFC, KeyboardEvent } from 'react'
import {UpdateMessageParam} from '../App'
interface ChatInterfaceProps{
    message:string;
    userName: string;
    sendMessage: (message: string) => void;
    updateMessage: (e: UpdateMessageParam) => void;
}

const ChatInterface:SFC<ChatInterfaceProps> = ({userName, message, updateMessage, sendMessage}) =>{
function keyPress(e:KeyboardEvent<any>){
    if(e.key === "Enter"){
        send();
    }
}
function send(){
    sendMessage(message);
}
return(
    <div className="chat-interface">
        <h3>User: {userName}</h3>
        <input value={message} onChange={updateMessage} onKeyPress={keyPress}
        className="chat-input" placeholder="Type a message..."/>
        <button onClick={send}>Send</button>
    </div>
)
}
export default ChatInterface;