// program caluceter
let Calnumber = document.querySelectorAll('.number')
let OutputUser = document.querySelector('.Output')
let mark = document.querySelectorAll('.mark')
let iconBody = document.querySelector('.icon')
let bodyIcon = document.querySelector('.bodyIcon')
let caluceter = document.querySelector('.caluceter')
let iconRes = document.querySelector('#iconRes')
let BodyIconRe = document.querySelector('.icon_result')
let result = document.querySelector('.sum')
let AllResult = document.querySelector('.All_result')
let titelREsult = document.querySelector('.titelREsult')
let inputUser ;
let markinput ;

// when click on numbers
Calnumber.forEach((e) =>{
    e.addEventListener("click",function(){
        mark.forEach((el) => {
            if(el.classList.contains("Active")){
                OutputUser.value = ""
                el.classList.remove("Active")
            }
        })
        OutputUser.value =   OutputUser.value + e.textContent
    })
})
// when click on mark MAth 
mark.forEach((ele) =>{
    ele.addEventListener("click",function(){
        inputUser = Number(OutputUser.value)
        ele.classList.add("Active")
        markinput = ele.textContent
        baColorNum()
    })
})
let allValue = document.querySelector('.allValue')
let iconDelet = document.querySelector('.iconDelet')
let deletAll = document.querySelector('#deletAll')
// when click on mark (=)
result.addEventListener("click",function(){
    if(inputUser){
        titelREsult.style.display = "none"
        iconDelet.style.display = "flex"
    let elment = `
    <div class="result">
    <p class="value1">${inputUser}</p>
    <p class="markuser">${markinput}</p>
    <p class="value2">${OutputUser.value}</p>
    <p class="equals"> = </p>
    <p class="resulting">${eval(inputUser + markinput +  OutputUser.value)}</p>
    </div>
    `
    let div = document.createElement("div")
    div.innerHTML = elment
    allValue.appendChild(div)
    }
    OutputUser.value = eval(inputUser + markinput +  OutputUser.value)
    baColorNum()
    bacolorAM()
    inputUser = ""
})

// cleaer all input and output user 
function Clear(){
    OutputUser.value = ""
}

// add bacolor for button number
function baColor(number){
    baColorNum()
    Calnumber[number].classList.add("baColor")
}

// add bacolor for icons 
function MaColor(number){
    bacolorAM()
    mark[number].classList.add("Colormar")
}

// bacolo for number
function baColorNum(){
    Calnumber.forEach(elm =>{
        elm.classList.remove("baColor")
    })
}

// bacolor for Addition and multiplication signs
function bacolorAM(){
    mark.forEach(elm =>{
        elm.classList.remove("Colormar")
    })
}

// Add bacolor for all page 
iconBody.addEventListener("click",function(){
    iconBody.classList.toggle("Bodyicon")
    bodyIcon.classList.toggle("Colorbody")
    if(iconBody.classList.contains("Bodyicon")){
        document.body.style.backgroundColor = "#111"
        caluceter.style.backgroundColor = "#fff"
        OutputUser.style.boxShadow = "0 0 6px rgba(0,0,0,0.15)"
        iconRes.style.color = "#ffd700"
    }else{
        document.body.style.backgroundColor = "#E7EEF7"
        iconRes.style.color = "#111"
        OutputUser.style.boxShadow = " 0.8rem 0.8rem 2.4rem #c1d3ea,-0.8rem -0.8rem 2.4rem white, -0.2rem -0.2rem 0.2rem white"
    }
})

// icon All result 
iconRes.addEventListener("click",function(){
    AllResult.classList.toggle("Bodyresult")
    BodyIconRe.classList.toggle("BodyIconr")
})

// Delet All result in list results
deletAll.addEventListener("click",function(){
    titelREsult.style.display = "flex"
    iconDelet.style.display = "none"
    let getresult = document.querySelectorAll('.result')
    getresult.forEach(e =>{
        e.remove()
    })
})