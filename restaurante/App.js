import {} from 'react'
import Navigation from './src/config/navigation/Navigation';
import {app,auth} from './src/config/utils/firebaseConnection'

export default function App() {
  return (
    <Navigation />
  );
}
