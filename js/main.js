const tariffAll = document.querySelectorAll(".tariff")

const isActive = (el) => {
   if (el.classList.value.indexOf("active") === -1) {
      return false
   } else {
      return true
   }
}

tariffAll.forEach(el => {
   el.addEventListener("click", () => {
      const priceSum = el.parentElement.parentElement.parentElement.children[1].children[0]
      const tariffList = el.parentElement.children

      Array.prototype.forEach.call(tariffList, child => {
         child.classList.remove("active")
      });

      if (!isActive(el)) {
         el.classList.add("active")
      }

      priceSum.innerHTML = el.children[0].innerHTML

      console.log(priceSum)
   })
})

const priceRU = (el) => {
   if (Number(el) > 999) {
      arr = []
      k = Math.floor(Number(el) / 1000)
      for (let i = 0; i < Math.floor(el.length / 3); i++) {
         arr[i] = el.slice(-3)
         arr[i + 1] = el.slice(0, el.indexOf(arr[i]))
      }
      newEl = ''
      arr.forEach(el => {
         newEl = " " + el + newEl
      })
      return newEl.trim()
   } else {
      return el
   }
}

tariffAll.forEach(el => {
   price = el.children[0].innerHTML
   price = price.slice(price.indexOf(">") + 1, -1)
   price = price.slice(0, price.indexOf("<")).trim()
   priveN = Number(price)

   const priceSum = el.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML.trim()

   newPrice = priceRU(price)
   newPriceSum = priceRU(priceSum)

   el.children[0].children[0].innerHTML = newPrice + " "
   el.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML = newPriceSum
})

priceRU()

// Slider
const slider = document.querySelector(".slider .slider-container")
const sliderNav = document.querySelector(".slider-nav")

for (let i = 0; i < slider.children.length; i++) {
   sliderNav.innerHTML = sliderNav.innerHTML + '<div class="slider-nav__item"></div>'
}

const sliderNavItems = document.querySelectorAll(".slider-nav__item")
sliderNavItems.forEach(el => {
   el.addEventListener("click", () => {
      sliderNavItems.forEach(el => {
         el.classList.remove("active")
      })
      el.classList.add("active")
      
      
      let slideActiveIndex = 0
      for (i = 0; i < sliderNavItems.length; i++) {
         if (sliderNavItems[i].classList.value.indexOf("active") !== -1) {
            slideActiveIndex = i
         }
      }
      
      Array.prototype.forEach.call(slider.children, child => {
         // console.log(child.classList.value)
         child.classList.remove("active")
      });

      slider.children[slideActiveIndex].classList.add("active")

      // console.log(slideActiveIndex)
      console.log(slider.children)
   })
})

sliderNav.children[1].classList.add("active")
slider.children[1].classList.add("active")
