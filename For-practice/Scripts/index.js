// const subtraction=(a,b,callback)=>{
//     setTimeout(()=>{
//         callback(a-b)
//     },3000)
// }

// const total=(value)=>{
//     console.log("the subtration is",value)
// }
// subtraction(5,3,total)

// // console.log(subtraction(5,3,total))

// let object = { 0: 'x', 1: 'y', 2: 'z' };
// console.log(Object.keys);

const body = document.body;
const container = document.createElement('div')
container.className='container'
container.id='container'
container.style.margin = '0'
container.style.padding = '0'
container.style.width = '100%'
container.style.height = '100vh'
container.innerHTML = '<h1><strong>Our Team</strong></h1>'
body.append(container)

const maindiv_2 = document.createElement('div')
maindiv_2.innerText = 'hey! hello, who are you?'
container.append(maindiv_2)

// Starting first
for (let i=1; i<=8; i++){
    const maindiv = document.createElement('div')
maindiv.className = 'card'
maindiv.style.border = '2px solid black'
maindiv.style.margin = '5px'
maindiv.style.padding = '5px'
maindiv.style.width = '15%'
maindiv.style.height = 'auto'
maindiv.style.display='flex'
container.append(maindiv)

const img = document.createElement('img')
img.src = './Scripts/nature.jpeg'
img.className = 'card-img'
alt = 'nature pic'
img.style.width = '99%'
maindiv.append(img)


const childdiv = document.createElement('div')
childdiv.className = 'card-body'
maindiv.append(childdiv)


const h3 = document.createElement('h3')
h3.className = 'card-tittle'
h3.innerText = 'Nature 1'
h3.style.marginBottom = '0'
childdiv.append(h3)

const p = document.createElement('p')
p.className = 'card-paragraph'
p.innerText = 'Swimming is the hardest exercise in the world'
p.style.marginBottom = '0'
p.style.marginTop = '0'
childdiv.append(p)

const button = document.createElement('button')
button.className = 'button'
button.innerText = 'View Details'
button.style.backgroundColor = 'yellow'
button.style.color = 'red'
childdiv.append(button)
// Ending first
}






