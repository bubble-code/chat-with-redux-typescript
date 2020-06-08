
import React, { FC } from 'react'
import { Message } from "../Store/chat/type"
import { Card, Col } from 'antd'

interface ChatHistoryProps {
    messages: Message[];
}

const ChatHistory: FC<ChatHistoryProps> = ({ messages }) => {
    return (
        <Col xl={{ span: 16 }}>
            {messages.map(item => {
                // let da = new Date(item.timestamp.toString());
                // console.log(da.getTime());
                return <Card key={item.timestamp} title={item.timestamp}  >
                    <h3>From: {item.user}</h3>
                    <p>{item.message}</p>
                </Card>
            })}
        </Col>
    )
}

export default ChatHistory;