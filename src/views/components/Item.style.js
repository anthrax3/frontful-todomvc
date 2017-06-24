import imgChecked from '../../../assets/img/checked.svg'
import imgUnchecked from '../../../assets/img/unchecked.svg'
import {font} from '../style/utils'

export default ({css}) => {
  css('.item', {
    position: 'relative',
    borderBottom: '1px solid #ededed',
    overflow: 'hidden',
  })

  css('.item:last-child', {
    borderBottom: 'none',
  })

  css('.checkbox', {
    position: 'absolute',
    left: '-9999px',
    userSelect: 'none',
  })

  css('.checkbox + label', {
    position: 'absolute',
    top: '0',
    bottom: '0',
    height: '40px',
    width: '40px',
    outline: 'none',
    margin: 'auto 0',
  })

  css('.checkbox + label:after', {
    content: `url(${imgUnchecked})`,
  })

  css('.checkbox:checked + label:after', {
    content: `url(${imgChecked})`,
  })

  css('.button', {
    display: 'none',
    position: 'absolute',
    top: '0',
    bottom: '5px',
    right: '0',
    width: '60px',
    outline: 'none',
    appearance: 'none',
    border: 'none',
    background: 'none',
    margin: 'auto 0',
    userSelect: 'none',
    color: '#cc9a9a',
    ...font(30),
  })

  css('.item:hover .button', {
    display: 'inline',
  })

  css('.button:after', {
    content: '"×"',
  })

  css('.button:hover', {
    color: '#af5b5e',
  })

  css('.text', {
    whiteSpace: 'pre-line',
    wordBreak: 'break-all',
    padding: '16px 60px 16px 60px',
    display: 'block',
    lineHeight: '1.1em',
    fontSize: '24px',
    transition: 'color 0.4s',
  })

  css('.text.completed', {
    color: '#d9d9d9',
    textDecoration: 'line-through',
  })

  css('.item > input[type="text"]', {
    lineHeight: '1.1em',
  })
}
