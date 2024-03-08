import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FilmModal = ({ selectedFilm, onCloseModal }) => {
  return (
    <Modal show={selectedFilm !== null} onHide={onCloseModal} centered size="xl">
      <Modal.Header closeButton className="bg-primary-subtle">
        <Modal.Title>{selectedFilm.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-primary-subtle">
        <iframe
          title={selectedFilm.title}
          width="100%"
          height="500"
          src={`https://archive.org/embed/${selectedFilm.identifier}`}
          allowFullScreen
          style={{ maxWidth: '100%' }}
        ></iframe>
      </Modal.Body>
      <Modal.Footer className="bg-primary-subtle">
        <Button variant="primary" className="gradient-bg-blue rounded-pill" onClick={onCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilmModal;
