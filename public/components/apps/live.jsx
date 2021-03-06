import React from 'react'

export default class AppLiveView extends React.Component {
  componentDidMount () {
    window.title(this.props.appName)
  }

  render () {
    const { appName, path } = this.props.params
    return <iframe ref='myIframe' className='app-live' src={'/i/' + appName + ((path) ? path : '')} frameBorder='0' />
  }
}
