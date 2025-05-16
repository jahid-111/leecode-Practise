/* Write code that enhances all arrays such that you can call the array.last() method
    on any array and it will return the last element.
        If there are no elements in the array, it should return -1.
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
};

const user = [null, "first message", {}, 3, 4, "last message"];
const arr = [];
console.log(user.last());
console.log(arr.last());

// =====================
// ---------------------------Project use Cases
// =====================

// Chat React Component

/*  
const ChatWindow = ({ messages }) => {
  const lastMessage = messages.last(); 

  return (
    <div className="chat-window">
      <h2>Last Message:</h2>
      <div className="last-msg">
        {lastMessage !== -1 ? lastMessage.text : "No messages yet"}
      </div>
    </div>
  );
};

export default ChatWindow;
 */
