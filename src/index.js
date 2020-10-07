import { useEffect } from 'react'
import { func, oneOf, string } from 'prop-types'

import locales from './locales.json'

const insertScript = ({ key, onLoaded }) => {
  const script = document.createElement('script')
  script.async = true
  script.id = 'ze-snippet'
  script.src = `https://static.zdassets.com/ekr/snippet.js?key=${key}`
  script.addEventListener('load', onLoaded)
  document.body.appendChild(script)
}

const removeScript = () => {
  const script = document.querySelector('#ze-snippet')
  const product = document.querySelector('iframe[data-product="web_widget"]')
  const widget = document.querySelector('iframe#webWidget')
  document.body.removeChild(script)
  if (product) document.body.removeChild(iframe)
  if (widget) document.body.removeChild(widget.parentNode)
  delete window.zE
  delete window.zESettings
}

const setLocale = locale => {
  if (window.zE) window.zE('webWidget', 'setLocale', locale)
}

const useZendesk = ({ key, locale, onLoad, ...props }) => {
  const onLoaded = () => {
    setLocale(locale)
    if (onLoad) onLoad()
  }

  useEffect(() => {
    if (!window.zE) {
      insertScript({ key, onLoaded })
      window.zESettings = props
    }
    return removeScript
  }, [])

  useEffect(() => {
    setLocale(locale)
  }, [locale])

  return null
}

useZendesk.propTypes = {
  key: string.isRequired,
  locale: oneOf(locales),
  onLoad: func,
}

useZendesk.defaultProps = {
  locale: 'en-us',
  onLoad: null,
}

export default useZendesk
