import { Container, Row } from "react-bootstrap";
import OrchidCard from "./OrchidCard";
import OrchidModal from "./OrchidModal";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function OrchidsPresentation({ orchids }) {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const { theme } = useTheme();

  const handleCardClick = (orchid) => {
    setSelectedOrchid(orchid);
  };

  const handleClose = () => {
    setSelectedOrchid(null);
  };

  return (
    <div className={theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <Container className="my-4">
      <div className="d-flex justify-content-end mb-3">
        <button
        variant = {theme === 'dark' ? 'secondary' : 'primary'}
        onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

        {/* Title */}
        <h2 className="text-center mb-4 fw-bold text-success">
          Orchid Collection
      </h2>

      {/* Orchid Grid */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {orchids.map((orchid) => (
          <OrchidCard
            key={orchid.id}
            orchid={orchid}
            onSelect={() => handleCardClick(orchid)}
          />
        ))}
      </Row>

      {/* Orchid Modal */}
      <OrchidModal
        show={selectedOrchid !== null}
        onHide={handleClose}
        orchid={selectedOrchid}
      />
    </Container>
    </div>
  );
}
