import { Container, Row, Button } from "react-bootstrap";
import OrchidCard from "./OrchidCard";
import OrchidModal from "./OrchidModal";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function OrchidsPresentation({ orchids }) {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const handleCardClick = (orchid) => {
    setSelectedOrchid(orchid);
  };

  const handleClose = () => {
    setSelectedOrchid(null);
  };

  return (
    <div
      className={theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
    >
      <Container className="py-4">
        {/* Title */}
        <h2 className="text-center mb-4 fw-bold text-success">
          Orchid Collection
        </h2>

        {/* Theme Toggle Button */}
        <Button
          variant={theme === "light" ? "light" : "dark"}
          onClick={toggleTheme}
          className="mb-4"
        >
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </Button>

        {/* Orchid Grid */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {orchids.map((orchid) => (
            <OrchidCard
              key={orchid.id}
              orchid={orchid}
              onSelect={handleCardClick}
              //onSelect={() => handleCardClick(orchid)}
            />
          ))}
        </Row>

        {/* Orchid Modal */}
        {selectedOrchid && ( //Render only the modal if theres an action
          <OrchidModal
            show={true}
            onHide={handleClose}
            orchid={selectedOrchid}
          />
        )}
      </Container>
    </div>
  );
}
