import React, { SyntheticEvent, FC, useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { AppState } from './Store'

// import "./main.css";

import { SystemState } from "./Store/system/type"
import { updateSession } from "./Store/system/actions"

import { ChatState } from "./Store/chat/type"
import { sendMessage, deleteMessage } from "./Store/chat/actions"

import ChatHistory from './component/ChatHistory'
import ChatInterface from './component/ChatInterface'

import { thunkSendMessage } from './thunks'
import { Row, Col, PageHeader, List, message as mess } from 'antd'

export type UpdateMessageParam = SyntheticEvent<{ value: string }>;

interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
  thunkSendMessage: any;
}

export const App: FC<{}> = () => {
  const data: AppState = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e: UpdateMessageParam) => {
    setMessage(e.currentTarget.value);
  };
  const submitMessage = (message: string) => {
    dispatch(sendMessage({
      user: data.system.userName,
      message: message,
      timestamp: new Date().getTime()
    })
    )
    setMessage("");
    mess.success("New message");
  };
  const deleteMessagee = (id: number) => {
    dispatch(deleteMessage(id))
    mess.warn("Message delete");
  };

  useEffect(() => {
    dispatch(
      updateSession({
        loggedIn: true,
        session: " Alejandro",
        userName: "All"

      }
      )
    )
    dispatch(
      sendMessage({
        user: "Chat Bot",
        message: "Este es un mensaje de prueba",
        timestamp: new Date().getTime()
      })
    )
    dispatch(
      thunkSendMessage("Este es enviado por thunk")
    );
  }, [dispatch])

  return (
    <div className="parent">
      <PageHeader title="Sala de Chat" />
      <Row gutter={[0, 22]} align="top" justify="center">
        <Col xl={{ span: 14 }} lg={{ span: 20 }} md={{ span: 21 }}>
          <List locale={{ emptyText: "You no have message" }}
            dataSource={data.chat.messages} renderItem={item => (
              <ChatHistory message={item} deleteMessage={deleteMessagee} />
            )}
            pagination={{ position: "top", pageSize: 5 }} />
        </Col>
        <Col xl={{ span: 8 }}>
          <ChatInterface
            userName={data.system.userName}
            message={message}
            updateMessage={handleChangeMessage}
            sendMessage={submitMessage}
          />
        </Col>
      </Row>
    </div>
  );
}


//   sendMessage = (message: string) => {
//     this.props.sendMessage({
//       user: this.props.system.userName,
//       message: message,
//       timestamp: new Date().getTime()
//     });
//     this.setState({ message: "" });
//   };


  // const mapStateToProps = (state: AppState) => ({
  //   system: state.system,
  //   chat: state.chat
  // });

  // export default connect(
  //   mapStateToProps,
  //   { sendMessage, updateSession, thunkSendMessage }
  // )(App);
