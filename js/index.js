var Quote =[
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:" اينشتاين العالمي",
        img:"IMG/albert-einstein.jpg",
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"الكاتب الفنان ماركوس",
        img:"IMG/marcus Cicero.jpg",
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"الفنانه المرحومه ماري ",
        img:"IMG/Mae-West.webp",
    },
    {
        quote:"Try to be a light that does not go out",
        author:"معرفش الصراحه عشان مسروقه",
        img:"IMG/m2raf4.png",
    },
    {
        quote:"كل لما اغمض عيني اروح لسنين سابتني وسيبتها",
        author:"الرائع العظيم امير عيد",
        img:"IMG/amir eid.jpg",
    },
    {
        quote:"it is all too much and not enough at the same",
        author:"الفنانه انا",
        img:"IMG/mee.png",
    },
    {
        quote:"كدبت لما قولت هنسي ,انا زي الغريق مش لاقي مرسي ",
        author:" الغالي يوسف الراوي",
        img:"IMG/el rawyy.png",
    },
    {
        quote:"يارب  ال 12 ل الاهلي و ال15 ل مدريد ",
        author:"انا وكل انسان سالك",
        img:"IMG/loly.jpg",
    },
];
function displayQuotes(){
    var newNum = Math.floor(Math.random()*Quote.length)
    console.log(newNum);
   
    document.getElementById("quote").innerHTML=Quote[newNum].quote;
    document.getElementById("author").innerHTML=Quote[newNum].author;
    document.getElementById("img").setAttribute('src',Quote[newNum].img);
}
