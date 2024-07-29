const productos = [
    {
      id: "Ex-05",
      name:"Animal Colosseum",
      description:"",
      price: 4500,
      category:"boosterpacks",
      version:"EX",
      stock: 15,
      image: "/img/ex05booster.jpg"
    },
    {
      id: "Ex-06",
      name:"Infernal Ascension",
      description:"",
      price: 5000,
      category:"boosterpacks",
      version:"EX",
      stock: 10,
      image: "/img/ex06booster.png"
    },
    {
      id: "Ex-07",
      name:"Digimon Liberator",
      description:"",
      price: 5500,
      category:"boosterpacks",
      version:"EX",
      stock: 5,
      image: "/img/ex07booster.jpg"
    },
    {
      id: "BT1-089",
      name:"Mimi Tachikawa",
      description:"Green",
      price: 500,
      category:"singles",
      version:"BT1",
      stock: 2,
      image: "/img/mimi-green-single.jpg"
    },
    {
      id: "BT3-096",
      name:"Mimi Tachikawa",
      description:"Purple",
      price: 800,
      category:"singles",
      version:"BT3",
      stock: 3,
      image: "/img/mimi-purple-single.jpg"
    },    {
      id: "ST-16",
      name:"Wolf of Friendship",
      description:"StarterDecks",
      price: 15000,
      category:"decks",
      version:"ST16",
      stock: 2,
      image: "/img/wolfoffriendship-deck.jpg"
    },    {
      id: "ST-15",
      name:"Dragon of Courage",
      description:"StarterDecks",
      price: 15000,
      category:"decks",
      version:"ST15",
      stock: 5,
      image: "/img/dragonofcourage-deck.jpg"
    }, 
      ]
    
  const getProducts = () => {
    return new Promise((resolve,reject)=> {

      // simulacion de un retraso de red
      setTimeout(() => {
        resolve(productos)        
      }, 1000);
      });
    };
      //if(condicion){
      //}else{
      //  reject("se rechazo")
      //}

export default getProducts