const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
];

var orderList = document.createElement('ol');

users.forEach((el)=>{
    let li=document.createElement("li");
    li.textContent=`${el.firstName} ${el.lastName}`
    orderList.append(li);
})

const list = document.querySelector(".list");
list.append(orderList);
console.dir(orderList);

