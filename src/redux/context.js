import React from 'react'

import store from './index'

const reduxContext = React.createContext(store)

// 导出一个Context对象
export default reduxContext