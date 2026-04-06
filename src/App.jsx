import { BrowserRouter } from 'react-router-dom';
import Approutes from "./routes";
import Providers from './providers';

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </Providers>
  );
}
export default App;