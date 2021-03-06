import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Button from '@material-ui/core/Button'
// import { AppState } from '../../store/app-state'
import { AppState } from '../../store/store'
import yaklogo from '../../yaklogo.gif'

@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do something here
  }

  bootstrap() {
    return new Promise((resolve) => { // 只需要 resolve 就可以，因为不会出现错误的内容
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true) // 根据 true 来判断这个方法是否执行成功
      })
    })
  }

  changeName(event) {
    // this.props.appState.name = event.target.value // 不建议这样修改变量，应该使用 action
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>This is topic-list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        <Button variant="contained" color="primary">This is a button</Button>
        <input type="text" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
        <br />
        <img src={yaklogo} alt="yaklogo" />
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
