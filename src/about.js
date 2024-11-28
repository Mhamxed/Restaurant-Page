const about = () => {
    const homebtn = document.querySelector("#home")
    const menubtn = document.querySelector("#menu")
    const aboutbtn = document.querySelector("#about")
    const logo = document.querySelector('.logo')

    const container = document.querySelector('.container')
    const content  = document.createElement('div')

    const phone = document.createElement('p')
    const address = document.createElement('p')
    const map = document.createElement('p')

    phone.textContent = "Call us: ☎️ 123-456-7890"
    phone.style.fontWeight = "bold"
    phone.style.alignSelf = "left"
    
    address.style.fontWeight = "bold"
    address.style.alignSelf = "left"
    address.textContent = "Visit us: 28 Liberty St 60th floor, New York, NY 10005, United States"
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.82044437798!2d-74.02639120817183!3d40.70799669400136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bc797d635a1%3A0x60b055910436a0a4!2sManhatta!5e0!3m2!1sen!2sma!4v1732787564517!5m2!1sen!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    content.style.display = "flex"
    content.style.flexDirection = "column"
    content.style.justifyContent = "center"
    content.style.alignItems = "center"
    content.style.border = "1px solid black"
    content.style.padding = "20px"
    content.style.gap = "5px"



    content.append(phone)
    content.append(address)
    content.append(map)
    
    container.append(content)

    homebtn.addEventListener('click', () => {
        if (content) {
            container.removeChild(content)
        }
    })

    menubtn.addEventListener('click', () => {
        if (content) {
            container.removeChild(content)
        }
    })

    aboutbtn.addEventListener('click', () => {
        if (content) {
            container.removeChild(content)
        }
    })

    logo.addEventListener('click', () => {
        if (content) {
            container.removeChild(content)
        }
    })
}

export default about;