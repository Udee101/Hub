import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  let isAdmin = false;

  const trimmedName = name.trim().toLowerCase();
  if (user === "admin") {
    isAdmin = true;
  } else if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="flex flex-col ml-auto p-2 rounded-t-xl rounded-l-xl bg-blue-100 shadow-md m-2 w-max max-w-xs">
      <p className="text-blue-900 pr-2">{trimmedName}</p>
      <div>
        <p className="pr-2">{text}</p>
      </div>
    </div>
  ) : isAdmin ? (
    <div className="flex mx-auto p-3 rounded-2xl bg-gray-200 w-max shadow-md mb-2">
      <div>
        <p className="text-gray-400 w-auto">{text}</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-start p-2 rounded-t-xl rounded-r-xl w-max max-w-xs bg-blue-500 shadow-md text-white m-2">
      <p className="pl-2 text-blue-100">{user}</p>
      <div>
        <p className="pl-2">{text}</p>
      </div>
    </div>
  );
};

export default Message;
