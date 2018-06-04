// Insert code here

// class test{
//   constructor(fish, algae){
//     this.fish = fish;
//     this.algae = algae;
//   }
// }

class Aquarium{
  constructor(fishes, algaes){
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fishes){
    this.fishes.push(fishes);
  }

  addAlgae(algaes){
    this.algaes.push(algaes);
  }

  endTurn(){
    let newFishList = [];
    let resteFishList = [];
    this.fishes.forEach((ele) => {
      if(ele.type === 0 || ele.type === 1){
        newFishList.push(ele);
      }else {
        resteFishList.push(ele);
      }
    });

    if (newFishList.length > this.algaes.length){
      this.fishes = newFishList.slice(this.algaes.length-1, newFishList.length-1).concat(resteFishList);
      this.algaes.length = 0;
    }else if(newFishList.length < this.algaes.length){
      this.fishes = resteFishList;
      this.algaes = this.algaes.slice(newFishList.length-1, this.algaes.length-1);
    }else {
      this.fishes = resteFishList;
      this.algaes.length = 0;
    }
  }
}

class Fish{
  constructor(name, sex, type){
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}

class Algae{
  constructor(size){
    this.size = size;
  }
}


module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
