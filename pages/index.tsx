import Head from 'next/head'
import Image from 'next/image'
import { useSockets } from '../context/socket.contect'
import styles from '../styles/Home.module.css'
import RoomsContainer from '../containers/rooms'
import MessagesContainer from '../containers/messages'

export default function Home() {

  const { socket } = useSockets();
  
  return (
    <div>
      <RoomsContainer />
      <MessagesContainer />
    </div>
  )
}
