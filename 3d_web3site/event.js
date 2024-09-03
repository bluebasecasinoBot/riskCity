import { __SYD, __c, __g, __sC, __u } from "./sydneyLib/sydneyDom.js"

const move_obj = {
    x:0,
    down:false
}

entryPage_down = (e) =>{
    move_obj.down = true
    move_obj.x = e.x
}

entryPage_up = (e) =>{
    move_obj.down = false
}

entryPage_move = (e) =>{
    e.preventDefault()
    if(move_obj.down)
    {
        const direction = Math.sign(move_obj.x - e.x)

        // console.log(direction === 1 ? 'left' : 'right')

        move_obj.x = e.x

        const state = __g('threeDButton')
        
        if(direction === -1)
        {
            state.rotateY += 2
        }
        else{
            state.rotateY -= 2
        }

        switch(state.rotateY > 120)
        {
            case true:
                state.rotateY = 90
        }

        switch(state.rotateY < -120)
        {
            case true:
                state.rotateY = -90
        }

        __u('threeDButton' , {type:'a' , value:state})
        // console.log(state.rotateY)
    }
}


entryPage_down_t = (e) =>{
    move_obj.down = true
    move_obj.x = e.touches[0].clientX
}

entryPage_up_t = (e) =>{
    move_obj.down = false
}

entryPage_move_t = (e) =>{
    if(move_obj.down)
    {
        const direction = Math.sign(move_obj.x - e.touches[0].clientX)

        // console.log(direction === 1 ? 'left' : 'right')

        move_obj.x = e.touches[0].clientX

        const state = __g('threeDButton')
        
        if(direction === -1)
        {
            state.rotateY += 2
        }
        else{
            state.rotateY -= 2
        }

        switch(state.rotateY > 90)
        {
            case true:
                state.rotateY = 90
        }

        switch(state.rotateY < -90)
        {
            case true:
                state.rotateY = -90
        }

        __u('threeDButton' , {type:'a' , value:state})
        // console.log(state.rotateY)
    }
}