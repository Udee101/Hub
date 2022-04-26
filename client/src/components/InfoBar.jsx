import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import closeIcon from '../assets/icons/closeIcon.png';
import onlineIcon from '../assets/icons/onlineIcon.png';
import { requestPermission } from '../utils/notification';
import useStore from '../utils/store';
import { Modal } from './atoms/Modal';
import { NotificationBar } from './atoms/Notification';
import { ShareButton } from './Share';

const InfoBar = ({ room, name }) => {
  const history = useHistory();
  const [showPermissionMsg, setShowPermissionMsg] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const resetStore = useStore((state) => state.resetStore);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPermissionMsg(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.Fragment>
      {showPermissionMsg && Notification.permission === 'default' ? (
        <NotificationBar
          variant="default"
          header={`Hi ${name}`}
          message="Click here to get notification of all incoming messages"
          onClose={() => setShowPermissionMsg(false)}
          onBodyClick={() => {
            requestPermission();
            setShowPermissionMsg(false);
          }}
        />
      ) : null}
      <div
        className="flex justify-between items-center
        w-full overflow-y-hidden
        bg-white rounded-t-xl p-4 pl-2
        border-b-2 border-blue-50"
      >
        <div className="flex items-center">
          <img src={onlineIcon} alt="online" className="h-3 ml-5 place-self-center" />
          <h3 className="mx-2 place-self-center text-lg text-gray-600 font-semibold">{room}</h3>
          <ShareButton
            link={`${window.location.origin}/#/?room=${room}`}
            text={`Hey! ${name} invites you to join ${room} Chat Room on Chatcus`}
          />
        </div>
        <div>
          <button type="button" onClick={() => setShowCloseModal(true)}>
            <h3 className="p-2 border-red-50 border-2 rounded-md hover:bg-red-50">Log Out</h3>
            {/* <img src={closeIcon} alt="close" className="h-7 p-2" /> */}
          </button>
        </div>
      </div>
      {showCloseModal && (
        <Modal
          data={{ header: 'You are about to exit YctHub' }}
          actions={{
            onCancel: () => setShowCloseModal(false),
            onConfirm: () => {
              resetStore();
              history.push('/');
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

export default InfoBar;
