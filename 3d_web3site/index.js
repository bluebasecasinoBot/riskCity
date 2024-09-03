import { __SYD, __c, __m, __sC } from './sydneyLib/sydneyDom.js'
import './style.js'
import './threeDContainer.js'
import './entryPage.js'
import './event.js'
import './mainPage.js'
import './pole.js'

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']()
        },
        [
            __SYD.threeDContainer()
        ]
    )
}

__m(__SYD.container())

// addEventListener('')