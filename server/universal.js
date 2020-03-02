import { renderToString } from 'react-dom/server'
import { ServerStyleSheets } from '@material-ui/styles'

export const setRenderUniversal = (locals, app) => {
  const { htmlData } = locals

  const sheets = new ServerStyleSheets()

  const renderString = renderToString(sheets.collect(app))

  const materialStyle = `<style id="jss-server-side">${sheets.toString()}</style>`

  return {
    prevHtml: htmlData.replace('<head>', `<head>${materialStyle}`),
    renderString
  }
}
