const menu = () => {
    const homebtn = document.querySelector("#home")
    const menubtn = document.querySelector("#menu")
    const aboutbtn = document.querySelector("#about")
    const logo = document.querySelector('.logo')

    const container = document.querySelector('.container')
    const content  = document.createElement('div')
    const dish_1 = document.createElement('div')
    const dish_2 = document.createElement('div')
    const dish_3 = document.createElement('div')
    const dish_4 = document.createElement('div')
    const dish_5 = document.createElement('div')

    dish_1.classList.add('dish')
    dish_2.classList.add('dish')
    dish_3.classList.add('dish')
    dish_4.classList.add('dish')
    dish_5.classList.add('dish')

    const img_1 = document.createElement('img')
    img_1.src = "/Users/mhamed/TOP/repos/Restaurant-Page/img/Behind-Guinea Fowl.jpeg"
    const img_2 = document.createElement('img')
    img_2.src = "/Users/mhamed/TOP/repos/Restaurant-Page/img/Benares - Baked Malabar Scallop.jpg"
    const img_3 = document.createElement('img')
    img_3.src = "/Users/mhamed/TOP/repos/Restaurant-Page/img/Cail Bruich - West coast crab, raw Orkney scallop, Exmoor caviar .jpg"
    const img_4 = document.createElement('img')
    img_4.src = "/Users/mhamed/TOP/repos/Restaurant-Page/img/Cornerstone - Hake Kiev.jpg"
    const img_5 = document.createElement('img')
    img_5.src = "/Users/mhamed/TOP/repos/Restaurant-Page/img/Davies and Brook - Venison.jpg"

    const title_1 = document.createElement('p')
    title_1.textContent = "Behind - Guinea Fowl"
    const title_2 = document.createElement('p')
    title_2.textContent = "Benares - Baked Malabar scallop" 
    const title_3 = document.createElement('p')
    title_3.textContent = "Cail Bruich - West coast crab, raw Orkney scallop, Exmoor caviar"
    const title_4 = document.createElement('p')
    title_4.textContent = "Cornerstone - Hake Kiev"
    const title_5 = document.createElement('p')
    title_5.textContent = "Davies and Brook - Venison"

    const desc_1 = document.createElement('p')
    desc_1.textContent = "Seafood may be the primary focus at Behind but the kitchen shows it handles meat dishes with equal aplomb. The guinea fowl had been aged and rolled with a farce; it was just so flavoursome and succulent. The pumpkin was the perfect companion and enriched the meat with its creaminess. As a contrast, the confit of leg served on the side provided a deeper, more intense flavour."
    const desc_2 = document.createElement('p')
    desc_2.textContent = "The three hand-dived Scottish scallops were perfectly cooked and came with a rich, creamy coconut curry sauce that was sweet but well balanced, with the spices expertly judged. The paratha on the side was really special; it was a soft as a whisper but dotted with crispiness and was the perfect vessel for soaking up the delicious curry in the shell."
    const desc_3 = document.createElement('p')
    desc_3.textContent = "The fine quality white crab meat was topped with thin slices of scallop. But it was the accompanying elements that really brought this dish alive and added considerable depth: celeriac purée, a little grapefruit and a homemade dashi adding a wonderful umami element to the dish. Stunning ingredients and long, lingering flavours."
    const desc_4 = document.createElement('p')
    desc_4.textContent = "A clever re-working of an old classic. The Kiev was enticingly golden and super crisp on the outside while the exceptional piece of hake inside was flawlessly cooked; it was moist and assured in flavour and the mushroom butter ran out in a gratifyingly tantalising way. A very moreish dish that provided wonderfully contrasting textures."
    const desc_5 = document.createElement('p') 
    desc_5.textContent = "A dish of elegance and refinement that showed an innate understanding of balance and control. The roasted venison loin was caramelised on the outside while the centre was pink and tender yet robust in flavour. The rich, deep and glossy juniper reduction sauce and the fondant of sweet potato and caramelised onion were the perfect partners for the stunning piece of meat."


    dish_1.append(img_1)
    dish_1.append(title_1)
    dish_1.append(desc_1)
    
    dish_2.append(img_2)
    dish_2.append(title_2)
    dish_2.append(desc_2)

    dish_3.append(img_3)
    dish_3.append(title_3)
    dish_3.append(desc_3)

    dish_4.append(img_4)
    dish_4.append(title_4)
    dish_4.append(desc_4)

    dish_5.append(img_5)
    dish_5.append(title_5)
    dish_5.append(desc_5)

    content.append(dish_1)
    content.append(dish_2)
    content.append(dish_3)
    content.append(dish_4)
    content.append(dish_5)
    container.append(content)

    homebtn.addEventListener('click', () => {
        if (content){
            container.removeChild(content)
        }
    })

    menubtn.addEventListener('click', () => {
        if (content){
            container.removeChild(content)
        }
    })

    aboutbtn.addEventListener('click', () => {
        if (content){
            container.removeChild(content)
        }
    })

    logo.addEventListener('click', () => {
        if (content){
            container.removeChild(content)
        }
    })
    
}

export default menu;