const reviews = [
    {
      id: 1,
      name: "John Doe",
      work: "Software Engineer",
      img: "./img.jpg",
      info: "I am a software engineer and i lover this profession"
    },
    {
      id: 2,
      name: "Jane Smith",
      work: "Graphic Designer",
      img: "./img2.jpg",
      info: "I am a Graphic Designer and i lover this profession"
    },
    {
      id: 3,
      name: "Alice Johnson",
      work: "Product Manager",
      img: "./img3.jpg",
      info: "I am a software engineer and i lover this profession"
    },
    {
      id: 4,
      name: "Bob Brown",
      work: "Marketing Specialist",
      img: "./img4.jpg",
      info: "I am a Marketing Specialist and i lover this profession"
    }
  ];
  
  const img =document.getElementById("person-img");
  const job = document.getElementById("job")
  const author =document.getElementById("author");
  const info = document.getElementById("info")

  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  const randomButton = document.querySelector(".prev-btn");

let currentItem =0;


window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
})

function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    job.textContent = item.work;
    info.textContent = item.info;
}

nextButton.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length- 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevButton.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length -1 ;
    }
    showPerson(currentItem);
})


