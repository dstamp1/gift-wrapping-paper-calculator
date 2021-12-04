let bulbs = document.querySelectorAll('.lightbulb')
let totalClicks = 0

bulbs.forEach((bulb) =>{
  bulb.addEventListener('click', e => {
    bulb.classList.toggle('active')
    totalClicks += 1
    if (totalClicks >= 50 ){
      bulbs.forEach((bulb)=>{
        bulb.classList.add('hidden')
        bulb.classList.remove('active')
      })
    }
  })
})


let theButton = document.querySelector('.button')
let resultDiv = document.querySelector('#result')
let lightsOn = 0
let totalLights = 0
let lightsOff = 0

theButton.addEventListener('click', (e)=>{
  lightsOn = 0
  totalLights = 0
  lightsOff = 0

  bulbs.forEach(bulb =>{
    totalLights += 1
    if (bulb.classList.contains('active')){
      lightsOn+=1
    }
  })
  lightsOff = totalLights-lightsOn

  if (lightsOn == 1){
    resultDiv.innerHTML = `${lightsOn} light is on!`
  } else {
    resultDiv.innerHTML = `${lightsOn} lights are on!`
  }

  if (lightsOn == totalLights){
    resultDiv.innerHTML = `Wow! All lights are on`
  }

  resultDiv.classList.remove('hidden')
})
