# React Loading Bar

[![npm version](https://badge.fury.io/js/react-loading-bar.svg)](https://badge.fury.io/js/react-loading-bar)
[![Dependency Status](https://www.versioneye.com/user/projects/5656dc74ff016c002c001c69/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5656dc74ff016c002c001c69)
[![Build Status](https://travis-ci.org/lonelyclick/react-loading-bar.svg?branch=master)](https://travis-ci.org/lonelyclick/react-loading-bar)
[![Coverage Status](https://coveralls.io/repos/lonelyclick/react-loading-bar/badge.svg?branch=test&service=github)](https://coveralls.io/github/lonelyclick/react-loading-bar?branch=test)

## Usage

```
  npm install react-loading-bar --save
```


```
import React, { Component } from 'react'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

export default class LoadingExample extends Component {
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
      <div>
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
```

Support UMD

## Demo

[React Loading Bar Example](http://lonelyclick.github.io/examples/loadingbar.html "react-loading-bar")

## Option Change

```
<Loading
  show={true}
  color="red"
  change={false}
/>
```

If change set `false`, will do nothing, default `true`

## License

MIT
