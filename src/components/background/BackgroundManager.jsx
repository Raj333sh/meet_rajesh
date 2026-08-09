import BackgroundCanvas from "./BackgroundCanvas";
import BlueprintGrid from "./BlueprintGrid";
import ParticleBackground from "./ParticleBackground";
import HexagonOverlay from "./HexagonOverlay";
import CircuitOverlay from "./CircuitOverlay";
import NoiseOverlay from "./NoiseOverlay";
import RadialGlow from "./RadialGlow";
import Vignette from "./Vignette";

const BackgroundManager = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <BackgroundCanvas />
      <RadialGlow />
      <BlueprintGrid />

      {/* Particle Network */}
      <ParticleBackground />

      {/* Blueprint overlays */}
      <CircuitOverlay />
      <HexagonOverlay />

      <NoiseOverlay />
      <Vignette />
    </div>
  );
};

export default BackgroundManager;