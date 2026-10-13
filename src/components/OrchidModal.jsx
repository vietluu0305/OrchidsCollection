import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function OrchidModal({show, onHide, orchid}) {
    if (!orchid) return null;

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{orchid.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={orchid.image}
                    alt={orchid.name}
                    className="img-fluid mb-3"
                />  
                <p><strong>Rating:</strong> {orchid.rating}</p>
                <p><strong>Special:</strong> {orchid.isSpecial ? "Yes" : "No"}</p>
                <p><strong>Natural:</strong> {orchid.isNatural ? "Yes" : "No"}</p>
                <p><strong>Color:</strong> {orchid.color}</p>
                <p><strong>Number of Likes:</strong> {orchid.numberOfLike}</p>
                <p><strong>Origin:</strong> {orchid.origin}</p>
                <p><strong>Category:</strong> {orchid.category}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}