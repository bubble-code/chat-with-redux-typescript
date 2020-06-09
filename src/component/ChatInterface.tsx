import React, {SFC, KeyboardEvent } from 'react'
import { UpdateMessageParam } from '../App'
import { Col, Form, Button, Row } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'

interface ChatInterfaceProps {
    message: string;
    userName: string;
    sendMessage: (message: string) => void;
    updateMessage: (e: UpdateMessageParam) => void;
}

const ChatInterface: SFC<ChatInterfaceProps> = ({ userName, message, updateMessage, sendMessage }) => {

    const [form] = Form.useForm();
    function keyPress(e: KeyboardEvent<any>) {
        if (e.key === "Enter") {
            send();
        }
    }
    function send() {
        sendMessage(message);
        form.resetFields();
    }
    return (
        <Form form={form} onFinish={send} layout="horizontal">
            <Row gutter={[0, 23]} align="stretch" >
                <Col xl={{ span: 23 }}>
                    <h3>User: {userName}</h3>
                    <Form.Item name={'message'} rules={[{
                        required: true,
                        message: 'Enter message'
                    }]}>                        
                        <TextArea placeholder="enter your message here" value={message} onChange={updateMessage} onKeyPress={keyPress}/>
                    </Form.Item>
                    </Col>
                    <Col xl={{ span: 23 }}>
                        <Button type='primary' htmlType="submit" block>
                            <PlusCircleOutlined />
                            Send message
                        </Button>
                    </Col>
            </Row>
        </Form>
    )
}
export default ChatInterface;