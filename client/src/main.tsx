import { createRoot } from 'react-dom/client'
//styles
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//App Entry
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

    <App />
  
)
