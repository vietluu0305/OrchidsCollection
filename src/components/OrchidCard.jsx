import { Col, Card, Badge, Button } from 'react-bootstrap';
import React from 'react';

export default function OrchidCard({ orchid, onSelect }) {
    //only call onSelect when the button is clicked, not when the card is rendered
    const handleClick = React.useCallback(() => {
        onSelect(orchid);
    }, [onSelect, orchid]); 

    return (
        <Col>
            <Card className="h-100 shadow-sm border-0 position-relative">

                {orchid.isSpecial && (
                    <Badge
                        bg="danger"
                        className="position-absolute top-0 end-0 m-2"
                    >
                        Special
                    </Badge>
                )}

                <Card.Img
                    variant="top"
                    src={orchid.image}
                    alt={orchid.name}
                    style={{
                        height: '200px',
                        objectFit: 'cover'  //nen dua ra file css de style
                    }}
                />

                <Card.Body className="d-flex flex-column">

                    <Card.Title className="fw-bold">
                        {orchid.name}
                    </Card.Title>

                    <Card.Text className="small text-muted mb-2">
                        <strong>Origin:</strong> {orchid.origin} 
                        <br />
                        <strong>Category:</strong> {orchid.category}
                    </Card.Text>

                    <div className="mt-auto pt-2 border-top d-flex justify-content-between align-items-center">

                        <span className="text-warning fw-bold">
                            {orchid.rating} ★
                        </span>

                        <Button
                            variant="primary"
                            onClick = {handleClick}
                        >
                            Details
                        </Button>

                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
}