
const colors = ['red','orange', 'yellow', 'green','green', 'blue', 'purple'];
const printRainbow = (colorArr)=>{
    for(let i = 0; i<colorArr.length;i++){
        const color = colorArr[i];
        printToDom(color, 'rainbow');
    }
}
const printToDom = (toPrint, diviId)=>{
    document.getElementById(diviId).innerHTML +=toPrint;
}
printRainbow(colors);

//prints first and last name
const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];
  for(let i=0;i<instructors.length;i++){
      document.write(`<p> ${instructors[i].first} ${instructors[i].last}`);
  }
  