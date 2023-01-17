import React from 'react'
import App from 'next/app'
import ReactDOM from 'react-dom'
import ATCSimulator from './ATCSimulator'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
}

if (typeof window !== 'undefined') {
    ReactDOM.hydrate(<ATCSimulator />, document.getElementById('root'))
}

export default MyApp
