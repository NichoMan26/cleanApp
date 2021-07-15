

import HeaderContainer from "./Components/Header/HeaderContainer";
import ContentContainer from "./Components/Content/ContentContainer";

import store from './redux/store.js'
import { Provider } from 'react-redux'

function App() {
  return (
    
    <Provider store={store}>
      <div className="App">
        <HeaderContainer/>
        <ContentContainer/>
      </div>
    </Provider>
  );
}

export default App;
