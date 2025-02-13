import reactLogo from './assets/react.svg'
import TypingEffect from './component/TypingEffect' // Import component TypingEffect
import './App.css'
function App() {
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'></a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <TypingEffect />
    </>
  )
}

export default App
