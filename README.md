# use-zendesk

> React hook to initialize Zendesk widget

[![NPM](https://img.shields.io/npm/v/use-zendesk.svg)](https://www.npmjs.com/package/use-zendesk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-zendesk
```

## Usage

Simply pass your Zendesk key to the hook and initialize it anywhere in your app, preferably in your root component.

```jsx
import React from 'react'
import logo from './logo.svg'
import './App.css'

import useZendesk from 'use-zendesk'

function App() {
  useZendesk({ key: YOUR_ZENDESK_KEY })

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
```

## Locale

Locale can be passed to the hook. Options can be found [here](https://support.zendesk.com/hc/en-us/articles/203761906-Language-codes-for-Zendesk-supported-languages). They also can be changed after mounting the app.

```jsx
useZendesk({ key: YOUR_ZENDESK_KEY, locale: 'pt-br' })
```

### Props

| Name     | Description                                                                                                                                                                          | Default | Required |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | -------- |
| `key`    | Your Zendesk key.                                                                                                                                                                    |         | `true`   |
| `locale` | Locale of your app, can be changed after mount. Options can be found [here](https://support.zendesk.com/hc/en-us/articles/203761906-Language-codes-for-Zendesk-supported-languages). | en-us   | `false`  |
| `onLoad` | Callback function called when the widget. loads                                                                                                                                      | null    | `false`  |

## License

MIT © [rfoel](https://github.com/rfoel)
