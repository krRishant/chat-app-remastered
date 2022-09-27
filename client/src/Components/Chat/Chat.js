import React, { useEffect, useState } from 'react'
import socketIo, { connect } from 'socket.io-client';
import './Chat.css'
import querystring from 'query-string';
import { useLocation } from 'react-router-dom';

const ENDPOINT= "http://localhost:5000";


const Chat = () => {
  const socket = socketIo(ENDPOINT,{transports: ['websocket']});
  // const location = useLocation();
  // const {name,room}=querystring.parse(location.search);
  // console.log(name,room);
  // useEffect(() => {
  //    socket.on('connect', ()=>{
  //      alert("connected");
  //      socket.emit('join',{name,room});
  //    })
  
  //   return () => {
  //       socket.emit('disconnect',{name});
  //       socket.off();
  //   }
  // });
  // socketIo.on('connection',()=>{
  //   alert('connected');
  // })
  socket.on("connect",()=>{
    alert("connected");
  })
  
  return (
    <div>Chat</div>
  )
}

export default Chat