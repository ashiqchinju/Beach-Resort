import React from 'react'
import { withRoomConsumer } from '../context'
import Loading from './Loading'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomsList'

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    return (
      <>
        <RoomsFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </>
    )
}

export default withRoomConsumer(RoomsContainer)