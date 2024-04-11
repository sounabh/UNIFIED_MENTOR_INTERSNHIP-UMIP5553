const questionsBucket = [
    {
     "que" : "Inside which HTML element do we put the JavaScript?" , 
     "a": "<script>",
     "b": "<js>",
     "c": "<scripting>",
     "d": "<javascript",
     "co" : "a"
    },
    {
        "que" : "Which of the following is a server-side Java Script object?" , 
        "a": "Function",
        "b": "File",
        "c": "FileUpload",
        "d": "Data",
        "co" : "a"
    },
    {
        "que" : "Which of the following is the tainted property of a window object in Java Script?" , 
        "a": "Pathname",
        "b": "Protocol",
        "c": "Defaultstatus",
        "d": "Host",
        "co" : "c"
    },
    {
        "que" : "Which of the following is used to capture all click events in a window?" , 
        "a": "window.captureEvents(Event.CLICK);",
        "b": "window.routeEvents(Event.CLICK );",
        "c": "window.handleEvents (Event.CLICK);",
        "d": "window.raiseEvents(Event.CLICK );" ,
        "co" : "a"
    }
]

let index = 0
let right = 0
let wrong = 0
let total = questionsBucket.length //length of the array questions

//dom

const quesbox = document.getElementById("question-box")
const options = document.querySelectorAll(".option")

//function to load the questions

const questionLoad = () => {
    if(index === total){
        return endQuiz()
    }
    reset() //calling reset function when que is finished
const data = questionsBucket[index]
    quesbox.innerText = `${index+1}) ${data.que}`
    options[0].nextElementSibling.innerText = data.a
    options[1].nextElementSibling.innerText = data.b
    options[2].nextElementSibling.innerText = data.c
    options[3].nextElementSibling.innerText = data.d

}
const submitQuiz = () => {
    const data = questionsBucket[index]
    const ans = getAns()
    if(ans === data.co){ //checking answer
right++
    }else{
        wrong++
    }
    index++
    questionLoad()
    return

}



const getAns = () => {
    let answer
options.forEach((inp)=>{
    if(inp.checked){
        answer =  inp.value
       
    }
})
return answer

}

const reset = () => { //reseting 
    options.forEach(
        (inp)=>{
            inp.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById('box-container').innerHTML = `<h1>thank you</h1> \n <h2> ${right}/${total} are correct`
}
 questionLoad()
