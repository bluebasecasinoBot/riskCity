import { __SYD, __c, __g, __p, __sC, __u, __v } from "./sydneyLib/sydneyDom.js";

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
}

addEventListener('dblclick' , () =>{
    toggleFullScreen()
})


__SYD.entryPage = () =>{
    return __c(
        'div',
        {
            style:__sC['entryPage']({method:'add' , style:{zIndex:__p(['threeDContainer','current'],true) ? '200' : '100',opacity:__p(['threeDContainer','current'],true) ? '1' : '0'}}),
            // onmousedown:'btn_down(e)',
            // onmouseup:'btn_up()',
            // onmousemove:'btn_move()',
        },
        [
            __SYD.threeDButton(),
            __SYD.entry_floor()
        ],
        {
            events:{
                onmousedown:entryPage_down,
                onmousemove:entryPage_move,
                onmouseup:entryPage_up,
                ontouchstart:entryPage_down_t,
                ontouchmove:entryPage_move_t,
                ontouchend:entryPage_up_t
            }
        }
    )
}

__SYD.entry_floor = () =>{
    return __c(
        'div',
        {
            style:__sC['entry_floor'](),
            class:'entry_floor'
        },
        [
            
        ]
    )
}

__SYD.threeDButton = () =>{
    return __c(
        'div',
        {
            style:`height:50px;width:125px;position:absolute;top:60%;left:50%;transform-style:preserve-3d;cursor:pointer;transform:translateZ(${__p(['threeDButton','mouseDown'],'0px')}) translate(-50% , -50%) rotateY(${__p(['threeDButton','rotateY'],0)}deg) translateY(${__p(['threeDButton','z_trans']) ? '20px' : '0px'});transition:transform ease 1s;`,
            class:'button_D',
        },
        [
            __SYD.button_top(),
            __SYD.button_bottom(),
            __SYD.button_front(),
            __SYD.button_back(),
            __SYD.button_left(),
            __SYD.button_right(),
            __SYD.button_shadow()
        ],
        {
            createState:{
                stateName:'threeDButton',
                state:{z_trans:false , rotateY:0 , mouseDown:'0px'}
            },
            events:{
                onmousedown:() =>{
                    const state = __g('threeDButton')
                    state.mouseDown = '-120px'
                    __u('threeDButton' , {type:'a' , value:state})
                },
                onmouseup:() =>{
                    const state = __g('threeDButton')
                    state.mouseDown = '0px'
                    __u('threeDButton' , {type:'a' , value:state})
                },

                ontouchstart:() =>{
                    const state = __g('threeDButton')
                    state.mouseDown = '-120px'
                    __u('threeDButton' , {type:'a' , value:state})
                },
                ontouchend:() =>{
                    const state = __g('threeDButton')
                    state.mouseDown = '0px'
                    __u('threeDButton' , {type:'a' , value:state})
                },
                onclick:() =>{
                    const state = __g('threeDContainer');
                    state.current = false;
                    __u('threeDContainer' , {type:"a" , value:state});
                    __v['main_video'].loop = true;

                    // setTimeout(() => {
                        // __v['main_video'].src = './memeVideo.mp4'
                            __v['main_video'].play();
                    // }, 1000);

                      toggleFullScreen()
                }
            }
        }
    )
}

__SYD.button_top = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{background:'radial-gradient(circle , #3e3f46 , #333 90%)'}}),
            class:'top_cover'
        }
    )
}

__SYD.button_bottom = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b'](),
            class:'bottom_cover'
        }
    )
}

__SYD.button_front = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{color:'#08f7d8' ,background:'linear-gradient(to top right  , #3e3f46 30% , #3e3f46 70%)'}}),
            class:'front_cover'
        },[
            __c(
                'p',
                {
                    style:`font-weight:900;font-size:30px;text-transform:uppercase;font-family:kage;letter-spacing:3px;
                    text-shadow:1px 1px 0px #02917e,
                                2px 2px 0px #02917e,
                                3px 3px 0px #02917e,
                                4px 4px 0px #000`
                },
                [
                    'enter'
                ]
            )
        ]
    )
}


__SYD.button_back = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{}}),
            class:'back_cover'
        }
    )
}

__SYD.button_left = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{height:'50px',width:'50px'}}),
            class:'left_cover'
        }
    )
}

__SYD.button_right = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{height:'50px',width:'50px' , right:'0' , left:'unset'}}),
            class:'right_cover'
        }
    )
}

__SYD.button_shadow = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']([{method:'add' , style:{transform:`translate( 0 , 100%) rotateX(90deg) scale(${__p(['threeDButton','z_trans']) ? '.6' : '1'})`,transition:'transform ease 2s',background:'#0a0a0a8a' , opacity:'.6'}},{method:'remove' , style:['height' , 'width']}]),
            class:'button_shadow'
        }
    )
}

window.onload = () =>{
    setInterval(() => {
        const button_state = __g('threeDButton');
        button_state.z_trans = button_state.z_trans === false ? true : false;
        __u('threeDButton' , {type:'a' , value:button_state})
    }, 1000);

    console.log(visualViewport)
}
