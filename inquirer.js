// get inquirer https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');
const playGame = () =>{
    inquirer
        .prompt([{
            type:'input',
            message: 'What is your trainer name',
            name: 'trainerName'
        },
        {
            type: 'password',
            message: 'Set your password',
            name: 'password'
        },
        {
            type: 'list',
            message: 'Choose your starter pokemon!',
            choices: ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu', 'Reggie' ],
            name: 'pokemon'

        }
        ])
        .then(res =>{
            inquirer
                .prompt([{
                    type: 'input',
                    message: `What would you like to name your ${res.pokemon}`,
                    name: 'pokemonName'
                }]).then(inqRes => {
                    let trainerName = res.trainerName;
                    let pokemonType = res.pokemon;
                    let pokemonName = inqRes.pokemonName;
                    console.log(`Welcome ${trainerName}`)
                    console.log(`Your ${pokemonType}, ${pokemonName}, is ready for battle!`)
                    console.log(`A wild caterpie appeared`)
                    console.log(`${trainerName} called ${pokemonName}`);
                    let pokemon_hp = 50;
                    let cat_hp = 30;
                    const battleSequence = (p_hp, c_hp, pokemonName) =>{
                        inquirer
                            .prompt([{
                                type: 'list',
                                message: 'Which move wil you attack with?',
                                choices: ['Tackle', 'Sand Attack', 'Glare'],
                                name: 'attack'
                            }])
                            .then(res =>{
                                p_hp -= Math.floor(Math.random()*10);
                                c_hp -= Math.floor(Math.random()*10);
                                console.log(`${pokemonName} used ${res.attack}`);
                                console.log(`Caterpie has ${c_hp} health points remaining`);
                                console.log(`Caterpie used Tackle`);
                                console.log(`${pokemonName} has ${p_hp} health points remaining`);
                                if(p_hp <= 0){
                                    console.log(`${pokemonName} has fainted, you blacked out`)
                                }else if(c_hp <= 0){
                                    console.log(`Caterpie fainted, you won!`)
                                }else{
                                    battleSequence(p_hp, c_hp, pokemonName)
                                }
                            })
                    };
                    battleSequence(pokemon_hp, cat_hp, pokemonName);
                })
        })

}
playGame();