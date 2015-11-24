import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Loading from '../../dist/index'
import styles from './Example.css'

class LoadingExample extends Component {
    state = {
      show: false
    }

    onShow = ()=> {
      this.setState({ show: true })
    }

    onHide = ()=> {
      this.setState({ show: false })
    }

    render() {
      return (
        <div className={styles.exampleComponent}>
          <Loading
            show={this.state.show}
            color="red"
          />

          <button
            type="button"
            onClick={this.onShow}>
            show
          </button>

          <button
            type="button"
            onClick={this.onHide}>
            hide
          </button>

        </div>
      )
    }
}

ReactDOM.render(<LoadingExample />, document.getElementById('loadingbar'))
