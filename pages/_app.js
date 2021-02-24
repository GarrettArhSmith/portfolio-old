import '../styles/globals.css'
import ColorProvider from '../context/ColorProvider'

function MyApp({ Component, pageProps }) {
    return (
        <ColorProvider>
            <Component {...pageProps} />
        </ColorProvider>
    )
}

export default MyApp
