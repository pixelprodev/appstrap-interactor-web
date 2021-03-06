import React from 'react'
import { Global, css } from '@emotion/core'

export default function CSSReset ({ children }) {
  return (
    <>
      <Global
        styles={css`
          html, body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
          b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
          tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header,
          hgroup, menu, nav, section, summary, time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 14px;
            vertical-align: baseline;
          }
          article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
            display: block;
          }
          body {
            line-height: 1;
            max-width: 1600px;
            margin: 0 auto;
          }
          ol, ul {
            list-style: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          *, *:before, *:after {
            font-family: 'Montserrat', Sans-Serif;
            font-style: normal;
            box-sizing: border-box;
          }
      `} />
      { children }
    </>
  )
}