import ChatSearch from "./ChatSearch";
import ChatListItem from "./ChatListItem";
import Toolbar from "./Toolbar";

import "./ChatListItem.css";
export default function ChatList(props) {
  const { getConversations, setChat, setJobView } = props;

  const chatListData = getConversations();

  const chatListItems = chatListData.map((item) => (
    <ChatListItem
      key={item.id}
      data={{ id: item.id, title: item.title, message: item.message }}
      setJobView={setJobView}
      setChat={setChat}
    />
  ));

  return (
    <div className="conversation-list">
      <h3>Messages</h3>
      <ChatSearch />

      <div className="message-list-container">{chatListItems}</div>
    </div>
  );
}
