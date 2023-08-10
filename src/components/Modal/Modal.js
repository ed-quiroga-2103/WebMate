import Modal from 'react-modal';

const CustomModal = ({ children, isModalOpen, onModalClose, name }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onModalClose}
            contentLabel={name}
            style={{
                content: { margin: 0, padding: 0, height: 'fit-content' },
                overlay: { marginTop: '100px' },
            }}
        >
            Test
            {children}
        </Modal>
    );
};

export default CustomModal;
