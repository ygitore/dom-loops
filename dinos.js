

const dinosaurs = [
    {
      dinoType: 't-rex',
      dinoName: 'Many teeth.',
      emoji:'🦕'
    },
    {
      dinoType: 'stegosaurus',
      dinoName: 'Spiky back',
      emoji:'🦕'
    },
    {
      dinoType: 'velociraptor',
      dinoName: 'Will eat your face',
      emoji:'🦕'
    }
  ];
  const dinoPrinter = (dinoArr)=>{
      for (let i = 0; i < dinosaurs.length; i++) {
          const dino = dinoArr[i];
         const stringToPrint = 
            `<div class="dino-card">
                <h3>${dino.dinoType}</h3>
                <p>${dino.dinoName}</p>
                <h1>${dino.emoji}</h1>
            </div>`
       printToDom(stringToPrint,'dino-div');       
      }
  }
  dinoPrinter(dinosaurs);



  //This is the program that displays the list of vehicles with their make, model and year
var veh = [
    {
        make:'Toyota',
        model:'camery',
        year:'2019'
    },
    {
        make:'Nissan',
        model:'altima',
        year:'2013'
    },
    {
        make:'Honda',
        model:'civic',
        year:'2014'
    }
];

var printStudInfo = (carList, did)=>{
    document.getElementById(did).innerHTML+=carList;
}
const vehicle = (car)=>{
    for (let i = 0; i < car.length; i++) {
        const mm = `<div class = "carInfo">
                <p>Make:${car[i].make}</p>
                <p>Model:${car[i].model}</p>
                <p>Year:${car[i].year}</p>
                <hr>
            </div>`;
        printStudInfo(mm, 'car-info');
    }    
};
vehicle(veh);