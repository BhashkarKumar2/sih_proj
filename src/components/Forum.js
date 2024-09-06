import React, { useState } from 'react';
import './Forum.css';

function Forum() {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="forum">
      <h2>Discussion Forum</h2>
      <div className="forum-sections">
        <div className="intra-department">
          <button onClick={() => openModal('Intra-department Content')}>Intra-department</button>
        </div>
        <div className="inter-department">
          <button onClick={() => openModal('Inter-department Content')}>Inter-department</button>
        </div>
        <div className="public-forum">
          <button onClick={() => openModal('Public Forum Content')}>Public Forum</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{modalContent}</h2>
            <p>This is the content for the {modalContent.toLowerCase()}.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Forum;
