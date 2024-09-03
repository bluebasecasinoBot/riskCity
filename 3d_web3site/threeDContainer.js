import { __SYD, __c, __sC , __p , __v} from "./sydneyLib/sydneyDom.js"

__SYD.threeDContainer = () =>{
    return __c(
        'div',
        {
            style:__sC['3d_container']({method:'add' , style:{}})
        },
        [
            __SYD.entryPage(),
            __SYD.mainPage(),
            __SYD.memeIcon(),
            __SYD.icons_float()
        ],
        {
            genericStyle:['bg_cover'],
            createState:{
                stateName:'threeDContainer',
                state:{current:true}
            }
        }
    )
}

__SYD.icons_float = () =>{
    return __c(
        'div',
        {
            style:`position:fixed;bottom:20px;left:50%;transform:translateX(-50%);column-gap:50px;z-index:700;display:${__p(['threeDContainer','current'],true) ? 'none' : 'flex'};row-gap:10px;padding:10px;height:fit-content;width:fit-content;border:2px solid #ac7468;border-radius:10px;`,
            // class:'thin_border'
        },
        [
            __c(
                'a',
                {
                    style:'height:30px;width:30px;background-image:url("./tele.png")',
                    class:'scale'
                },[],
                {
                    genericStyle:['bg_fit']
                }
            ),
            __c(
                'a',
                {
                    style:'height:30px;width:30px;background-image:url("./x.png")',
                    class:'scale'
                },[],
                {
                    genericStyle:['bg_fit']
                }
            ),
            __c(
                'a',
                {
                    style:'height:30px;width:30px;background-image:url("./sol.png")',
                    class:'scale'
                },[],
                {
                    genericStyle:['bg_fit']
                }
            ),
            __c(
                'a',
                {
                    style:'height:30px;width:30px;background-image:url("./head.png")',
                    class:'scale',
                    href:'/'
                },[],
                {
                    genericStyle:['bg_fit']
                }
            ),
        ]
    )
}