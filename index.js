const homeScore = document.querySelector("#home--score")
const guestScore = document.querySelector("#guest--score")
const homeButtonOne = document.querySelector("#home-button--one")
const homeButtonTwo = document.querySelector("#home-button--two")
const homeButtonThree = document.querySelector("#home-button--three")
const guestButtonOne = document.querySelector("#guest-button--one")
const guestButtonTwo = document.querySelector("#guest-button--two")
const guestButtonThree = document.querySelector("#guest-button--three")


let homeCount = 0
let guestCount = 0


homeButtonOne.addEventListener("click", () => {
    homeCount++
    homeScore.textContent = homeCount
})

homeButtonTwo.addEventListener("click", () => {
    homeCount += 2
    homeScore.textContent = homeCount
})

homeButtonThree.addEventListener("click", () => {
    homeCount += 3
    homeScore.textContent = homeCount
})

guestButtonOne.addEventListener("click", () => {
    guestCount++
    guestScore.textContent = guestCount
})

guestButtonTwo.addEventListener("click", () => {
    guestCount += 2
    guestScore.textContent = guestCount
})
guestButtonThree.addEventListener("click", () => {
    guestCount += 3
    guestScore.textContent = guestCount
})
