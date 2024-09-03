import { __SYD, __c, __m, __sC } from './sydneyLib/sydneyDom.js'

__SYD.board_pole = () =>{
    return __c(
        'div',
        {//calc(400px - 70px)
            style:'min-height:700px;width:120%;min-width:600px;max-width:1300px;position:absolute;bottom:-50px;left:-960px;transform:translateZ(-2400px) translate(-35% , -10px) rotateY(60deg) ;transform-style:preserve-3d;perspective-origin:50% 50%;background:unset;z-index:390;',
            class:"pole"
        },
        [
            __SYD.pole_front(),
            // __SYD.pole_back(),
            __SYD.pole_left(),
            // __SYD.pole_right(),
            __SYD.pole_shadow()
        ]
    )
}

__SYD.pole_front = () =>{
    return __c(
        'div',
        {
            style:__sC['pole_sides_b']({method:'add' , style:{height:'100%' , width:'80px' , background:'linear-gradient(to top right , #012f73 , #0252a1)' , borderBottom:'10px solid #3a150cad'}}),
            class:'pole_front lines'
        },
        [
            __SYD.pole_lines(),
            __SYD.pole_lines('208px'),
            __SYD.pole_lines('308px'),
        ]
    )
}

__SYD.pole_lines = (bottom = '100px') =>{
    return __c(
        'div',
        {
            style:`bottom:${bottom}`,
            class:'lines_poles'
        }
    )
}

__SYD.pole_back = () =>{
    return __c(
        'div',
        {
            style:__sC['pole_sides_b']({method:'add' , style:{height:'100%' , width:'80px'}}),
            class:'pole_back'
        }
    )
}

__SYD.pole_left = () =>{
    return __c(
        'div',
        {
            style:__sC['pole_sides_b']({method:'add' , style:{height:'100%' , width:'80px' , left:'calc(50% - 40px)' , borderBottom:'10px solid #3a150cad' , background:'linear-gradient(45deg , #011b41 , #64acf3 90%)'}}),
            class:'pole_left lines pole_left_details'
        },
        [
            __SYD.pole_lines(),
            __SYD.pole_lines('208px'),
            __SYD.pole_lines('308px'),
        ]
    )
}

__SYD.pole_right = () =>{
    return __c(
        'div',
        {
            style:__sC['pole_sides_b']({method:'add' , style:{height:'100%' , width:'80px' , left:'calc(50% - 40px)' , boxShadow:`30px 3px  70px #555555 inset ,
                -30px 3px 40px #888888 inset , -50px 3px 15px #fff inset;`}}),
            class:'pole_right'
        }
    )
}

__SYD.pole_shadow = () =>{
    return __c(
        'div',
        {
            style:__sC['pole_sides_b']({method:'add' , style:{height:'100%' , width:'100%' , background:'unset' , transform:'translateX(-50%) rotateX(-100deg) rotateZ(0deg) scaleY(1.3)' , transformOrigin:'center bottom'}}),
            class:"pole_shadow"
        }
    )
}