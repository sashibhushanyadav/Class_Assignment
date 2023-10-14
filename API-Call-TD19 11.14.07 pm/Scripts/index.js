
// For smartphones category. DAY-19

// fetch('https://dummyjson.com/products')
// .then((val)=>{
//     return val.json();
// }).then((val)=>{
//     console.log(val)
//     const productsFilter=val.products.filter((item)=>{
//         return item.category==='smartphones';
//     })
//     console.log(productsFilter);
// })







// For hair color. DAY-20

fetch('https://dummyjson.com/users')
.then((val)=>{
    return val.json();
})
.then((val)=>{
    // console.log(val);
    const filterHairColor=val.users.filter((item)=>{
        return item.hair.color==='Black';
    })
    console.log(filterHairColor);
})










// For uniqueID. DAY-19

const data = [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'John' },
 // Duplicate { id: 3, name: 'Bob' }, { id: 4, name: 'Alice' },
];

// const uniqueData=data.filter((item,i)=>{
//     return item.id===id;
// })
//  console.log(uniqueData);
