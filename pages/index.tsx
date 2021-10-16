import Head from 'next/head'
import Image from 'next/image'
import { useSockets } from '../context/socket.contect'
import styles from '../styles/Home.module.css'
import RoomsContainer from '../containers/rooms'

export default function Home() {

  const { socket } = useSockets();
  
  return (
    <div>
      <RoomsContainer />
      <RoomsContainer />
    </div>
  )
}
