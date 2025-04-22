import { useRegistry } from "../../contexts/RegistryContext";
import "../ProductRegistration/Sidebar.css";

const SidebarRegistration: React.FC = () => {
  const {
    openCloseBrands,
    openCloseColors,
    openCloseLines,
    openCloseSoccerBoot,
  } = useRegistry();

  function handleOpenCloseBrands(value: boolean) {
    openCloseBrands(value);
    openCloseColors(false);
    openCloseLines(false);
    openCloseSoccerBoot(false);
  }

  function handleOpenCloseLines(value: boolean) {
    openCloseLines(value);
    openCloseBrands(false);
    openCloseColors(false);
    openCloseSoccerBoot(false);
  }

  function handleOpenCloseColors(value: boolean) {
    openCloseColors(value);
    openCloseLines(false);
    openCloseBrands(false);
    openCloseSoccerBoot(false)
  }

  function handleOpenCloseSoccerBoot(value: boolean) {
    openCloseColors(false);
    openCloseLines(false);
    openCloseBrands(false);
    openCloseSoccerBoot(value)
  }

  return (
    <div className="sidebar">
      <h2>Registrar</h2>
      <button className="open-registry-button" onClick={() => handleOpenCloseSoccerBoot(true)}>
        Registrar Chuteiras
      </button>
      <button className="open-registry-button" onClick={() => handleOpenCloseBrands(true)}>
        Registrar Marcas
      </button>
      <button className="open-registry-button" onClick={() => handleOpenCloseLines(true)}>
        Registrar Linhas
      </button>
      <button className="open-registry-button" onClick={() => handleOpenCloseColors(true)}>
        Registrar Cores
      </button>
    </div>
  );
};

export default SidebarRegistration;
