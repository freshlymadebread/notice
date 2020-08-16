let count = 5
let timer = undefined
let op = function (fun){
    if(timer){
        throw new Error('有在执行！')
        return
    }
    timer = setTimeout(()=>{
        fun()
        clearTimeout(timer)
        timer = undefined
    },1000) 
}
function add (){
    count++
} 
op(add)
// 怎么执行完一个再执行另一个呢

let taskQueue = []
let op = function(fun){
    if(taskQueue.length > 0){
        taskQueue.push(fun)
        return
    }
    taskQueue.push(fun)
    while(taskQueue.length !== 0){
        let fun = taskQueue.shift()
        fun()
    }
}