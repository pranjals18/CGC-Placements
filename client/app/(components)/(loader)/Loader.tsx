// import Spinner from 'react-bootstrap/Spinner';
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    // <Spinner animation="border" variant="dark" />
    
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <ScaleLoader />
    </div>
  );
};

export default Loader;
