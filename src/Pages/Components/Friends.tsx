import { FaUserFriends } from 'react-icons/fa';
import { BsChatSquareQuoteFill } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { useState } from 'react';

export function Friends() {
    const [navigate, setNavigate] = useState("chats")
    return (
        <div className="friends">
            <form className='search_friends'>
                <input placeholder='search friends' />
            </form>
            {navigate === "chats" ?
                <ul className='your-friends'>
                    <li>
                        <img src="https://images.pexels.com/photos/13727429/pexels-photo-13727429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <p>Brunilda</p>
                    </li>
                    <li>
                        <img src="https://images.pexels.com/photos/12009329/pexels-photo-12009329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        <p>Uran</p>
                    </li>
                </ul>
                : null}
            {navigate === "friends" ? <p> Your friend list</p> : null}
            {navigate === "groups" ? <p> Your groups</p> : null}

            <div className="navigate">
                <FaUserFriends className='icon' onClick={() => { setNavigate("friends") }} />
                <BsChatSquareQuoteFill className='icon' onClick={() => { setNavigate("chats") }} />
                <MdGroups className='icon' onClick={() => { setNavigate("groups") }} />
            </div>
        </div>
    )
}