

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