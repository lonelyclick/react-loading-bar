# React Loading Bar

## Usage

```
  npm install react-loading-bar
```


```
import React from 'react'
import 'react-loading-bar/dist/index.css'

export default class ToastExample extends Component {
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

## Demo

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
