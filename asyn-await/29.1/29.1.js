// 1

const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const printIds = async () => {
  const res = await getIDs();
  console.log(res);
};

printIds();

//2

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

getRecipe(4).then((data)=> console.log(data));

async function fun2 (){
    const res = await getRecipe(4);
    console.log(res);  
}

fun2();

//3 
