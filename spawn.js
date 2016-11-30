var helper = require('helper');
var spawn = {};

spawn.config = {
    harvester: 5,
    upgrader: 2,
    builder: 3,
    repairer: 2
};

spawn.templates = {
    harvester: [WORK,CARRY,MOVE],
    //harvester: [WORK,WORK,WORK,CARRY,CARRY,MOVE],
    upgrader: [WORK,CARRY,CARRY,MOVE,MOVE],
    builder: [WORK,CARRY,MOVE],
    repairer: [WORK,CARRY,MOVE]
};

spawn.makeCreep = function(spawn, role) {
    var newCreep = spawn.createCreep(this.templates[role], undefined, { role: role });
    console.log ('Spawning new ' + role + ' with the Name: ' + newCreep);
};

spawn.run = function() {
    // Return if the SpawnPoint has not enough Energy for a simple harvester
    if (Game.spawns.Spawn1.energy < helper.getCreepCost(this.templates['harvester'])) {
        return;
    }

    if (helper.getCreepsByRole('harvester').length < this.config.harvester)
    {
        this.makeCreep(Game.spawns.Spawn1, 'harvester');
    }
    else if (helper.getCreepsByRole('upgrader').length < this.config.upgrader)
    {
        this.makeCreep(Game.spawns.Spawn1, 'upgrader');
    }
    else if (helper.getCreepsByRole('builder').length < this.config.builder)
    {
        this.makeCreep(Game.spawns.Spawn1, 'builder');
    }
    else if (helper.getCreepsByRole('repairer').length < this.config.repairer)
    {
        this.makeCreep(Game.spawns.Spawn1, 'repairer');
    }
    else
    {
        console.log('Max Config reached. Nothing to spawn');
    }
};

module.exports = spawn;