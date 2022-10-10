import { FaUserFriends } from 'react-icons/fa';
import { BsChatSquareQuoteFill } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useStore } from '../../State/store'
import { User } from '../../State/Types';

export function Friends() {
    const navigate = useStore(state => state.navigate)
    const setnavigate = useStore(state => state.setnavigate)
    const users = useStore(state => state.users)
    const getUsersFromServer = useStore(state => state.getUsersFromServer)
    useEffect(() => {
        getUsersFromServer()
    }, [])
    return (
        <div className="friends">
            <form className='search_friends'>
                <input placeholder='search friends' />
            </form>
            {navigate === "chats" ?
                <ul className='your-friends'>
                    {users.map((user: User) => (<li>
                        <img src={user.avatar} />
                        <p>{user.fullname}</p>
                    </li>))}
                </ul>
                : navigate === "friends" ? <p> Your friend list</p> : <p> Your groups</p>}

            <div className="navigate">
                <FaUserFriends className={`icon ${navigate === "friends" ? "clicked" : ""}`} onClick={() => setnavigate("friends")} />
                <BsChatSquareQuoteFill className={`icon ${navigate === "chats" ? "clicked" : ""}`} onClick={() => setnavigate("chats")} />
                <MdGroups className={`icon ${navigate === "groups" ? "clicked" : ""}`} onClick={() => setnavigate("groups")} />
            </div>
        </div>
    )
}