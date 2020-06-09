
import React, { FC } from 'react'
import { Message } from "../Store/chat/type"
import { Card, Col, List, Popconfirm, Button, Tag } from 'antd'

interface ChatHistoryProps {
    message: Message;
    deleteMessage: (id: number) => void;
}

const ChatHistory: FC<ChatHistoryProps> = ({ message, deleteMessage }) => {
    return (
        <List.Item actions={[
            <Popconfirm title="Are you sure want to delete?" onConfirm={() => deleteMessage(message.timestamp)}>
                <Button type="primary" danger>X</Button>
            </Popconfirm>
        ]} key={message.timestamp} >
<div style={{display:"flex", flexDirection:"column"}}>
    <Tag color="magenta">{message.user}</Tag>
    <Tag color="cyan">{message.message}</Tag>
</div>
        </List.Item>
        // <Col xl={{ span: 23 }}>
        //     {messages.map(item => {
        //         // let da = new Date(item.timestamp.toString());
        //         // console.log(da.getTime());
        //         return <Card key={item.timestamp} title={item.timestamp}  >
        //             <h3>From: {item.user}</h3>
        //             <p>{item.message}</p>
        //         </Card>
        //     })}
        // </Col>
    )
}

export default ChatHistory;