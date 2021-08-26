import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className="container">
      <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
