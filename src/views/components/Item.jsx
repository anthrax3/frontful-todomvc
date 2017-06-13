import React from 'react'
import {style} from 'frontful-style'
import {resolver} from 'frontful-resolver'
import Input from './Input'

@resolver((resolve) => {
  resolve(({item, remove}) => ({
    uid: item.uid,
    remove: remove,
    completed: item.completed,
    text: item.text,
    toggle: item.toggle,
    change: item.change,
    Input: <Input item={item} />
  }))
})
@style(require('./Item.style').style)
export default class Item extends React.PureComponent {
  state = {
    mode: 'view'
  }

  toggleModes = () => {
    this.setState({
      mode: this.state.mode === 'view' ? 'edit' : 'view'
    })
  }

  render() {
    const {uid, style, completed, text, toggle, Input, remove} = this.props

    return (
      <div key={uid} className={style.css('item')}>
        {this.state.mode === 'view' ?
          <div>
            <input
              className={style.css('checkbox')}
              type="checkbox"
              checked={completed}
              onChange={toggle}
            />
            <label
              className={style.css('text', completed && 'completed')}
              onDoubleClick={this.toggleModes}>
              {text}
            </label>
            <button className={style.css('button')} onClick={remove} />
          </div> :
          <Input onBlur={this.toggleModes} focus/>
        }
      </div>
    )
  }
}
