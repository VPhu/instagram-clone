import React, { useState } from "react";
import Sidebar from "../../component/layout/Sidebar/Sidebar";
import styles from "./Messages.module.css";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! What's new?",
      isSender: false,
      time: "2025-05-07T10:00:00"
    },
    {
      text: "I just bought a new phone!",
      isSender: true,
      time: "2025-05-07T10:10:00"
    },
    {
      text: "Wow! Which phone is it?",
      isSender: false,
      time: "2025-05-07T10:20:00"
    },
    {
      text: "I got an iPhone 15!",
      isSender: true,
      time: "2025-05-08T09:00:00"
    },
    {
      text: "I really like that phone!",
      isSender: true,
      time: "2025-05-08T09:10:00"
    }
    
  ]
  );

  const sortedMessages = [...messages].sort(
    (a, b) => new Date(a.time) - new Date(b.time)
  );

  return (
    <div className={styles.messagesWrapper}>
      <Sidebar />
      <div className={styles.messages}>
        <div className={styles.allMessages}>
          <div className={styles.messageHeader}>
            <div className={styles.myUsername}>
              <span className={styles.myUsernameText}>levinfoux</span>
              <div className={styles.iconUsernameMore}>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className={styles.btnNewMessages}>
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
          </div>
          <div className={styles.boxFeelings}></div>
          <div className={styles.boxMessages}>
            <div className={styles.boxMessagesHeader}>
              <span className={styles.titleBoxMessages}>Messages</span>
              <span className={styles.btnRequests}>Requests</span>
            </div>
            <div className={styles.conversationList}>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}> · 4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
              <div className={styles.conversationItem}>
                <div className={styles.friendAvatarWrapper}>
                  <img
                    className={styles.friendAvatar}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className={styles.conversationItemInfo}>
                  <div className={styles.friendName}>My name is Portnoy</div>
                  <div className={styles.newMessage}>
                    <span className={styles.textMessage}>
                      You:I’m not good at listening to English :v I...
                    </span>
                    <span className={styles.timeSent}>4W</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.messageDetails}>
          <div className={styles.messageDetailsHeader}>
            <div className={styles.textingPartner}>
              <div className={styles.textingPartnerWrapper}>
                <img
                  className={styles.textingPartnerAvatar}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <span className={styles.textingPartnerName}>
                My name is Portnoy
              </span>
            </div>
            <div className={styles.btnCallBox}>
              <div className={styles.btnCallBoxItem}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles.btnCallBoxItem}>
                <i className="fa-solid fa-video"></i>
              </div>
              <div className={styles.btnCallBoxItem}>
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
          </div>
          <div className={styles.messageDetailsContainer}>
            <div className={styles.chatBox}>
              {sortedMessages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${
                    message.isSender ? styles.right : styles.left
                  }`}
                  data-time={message.time}
                >
                  {!message.isSender && (
                    <div className={styles.avatarWrapperBox}>
                      <img
                        className={styles.avatarBoxChat}
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  )}
                  <p className={styles.textMessageBoxChat}>{message.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.messageBar}>
            <div className={styles.inputSendMessagesWrapper}>
              <div className={styles.iconSendMessages}>
                <i class="fa-regular fa-face-smile"></i>
              </div>
              <div className={styles.inputSendMessages}>
                <input
                  className={styles.inputMessages}
                  placeholder="Message..."
                />
              </div>
              <div className={styles.btnSendMessages}>
                <div className={styles.btnSendMessagesItem}>
                  <i class="fa-solid fa-microphone"></i>
                </div>
                <div className={styles.btnSendMessagesItem}>
                  <i class="fa-regular fa-image"></i>
                </div>
                <div className={styles.btnSendMessagesItem}>
                  <i class="fa-solid fa-note-sticky"></i>
                </div>
                <div className={styles.btnSendMessagesItem}>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
