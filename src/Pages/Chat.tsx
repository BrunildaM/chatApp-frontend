import { Connversation } from "./Components/Conversation";
import { Friends } from "./Components/Friends";
import { LeftMenu } from "./Components/LeftMenu";
import "../PagesStyle/chat.css"
export function Chat() {
    return (
        <div className="chat">
            <LeftMenu />
            <Friends />
            <Connversation />
        </div>

    )
}