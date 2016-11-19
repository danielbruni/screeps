module.exports.harvesters = function(){
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    if(harvesters.length < 5) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
};

module.exports.upgraders = function(){
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < 2){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new Upgrader: ' + newName);
    }
};

module.exports.builders = function(){
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if(upgraders.length < 3){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new Builder: ' + newName);
    }
};

module.exports.repairers = function(){
    var healers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

    if(healers.length < 2){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'repairer'});
        console.log('Spawning new Repairer: ' + newName);
    }
};