export const home = () => {
    const container = document.querySelector('.container')

    const content = document.createElement('div')
    const leftContent = document.createElement("div")
    const homeImg = document.createElement('img')
    const rightContent = document.createElement("div")
    const header = document.createElement('h3')
    const description = document.createElement('p')
    const quote = document.createElement('p')

    content.classList.add('contentHome')

    homeImg.src = "https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    homeImg.style.width = "433.65px"
    homeImg.style.height = "558.75px"
    homeImg.style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"

    leftContent.append(homeImg)

    rightContent.style.display = "flex"
    rightContent.style.flexDirection = "column"
    rightContent.style.justifyContent = "center"
    rightContent.style.marginRight = "200px"
    rightContent.style.marginLeft = "20px"

    header.textContent = "Welcome to Restau"
    header.style.marginBottom = "5px"
    description.textContent = "An Unforgettable Experience At Restau, we invite you to embark on a culinary journey that transcends the ordinary. Nestled in the heart of NYC, our Michelin-starred restaurant celebrates the art of fine dining with an exquisite fusion of seasonal ingredients, masterful techniques, and inspired creativity. Each dish tells a story—a harmonious blend of flavors, textures, and aromas that reflect our dedication to innovation and tradition. Our passionate team, led by Ian Ait, is committed to crafting a dining experience that captivates your senses and leaves a lasting impression. From the first sip to the final bite, every detail is thoughtfully designed to delight. Whether celebrating a special occasion or savoring a quiet moment, Restau offers an elegant, inviting space where memories are made. Indulge in the Extraordinary. Reserve your table today and join us for an evening of culinary artistry. Discover the essence of fine dining. Discover Restau."
    quote.style.fontWeight = "700"
    quote.textContent = "\"The way we eat determines the world we live in.\""
    rightContent.append(header)
    rightContent.append(description)
    rightContent.append(quote)
    content.append(leftContent)
    content.append(rightContent)

    container.append(content)
}

export function removeHome(){
    const container = document.querySelector('.container')
    const content = document.querySelector('.contentHome')
    if (content){
        container.removeChild(content)
    }

}
