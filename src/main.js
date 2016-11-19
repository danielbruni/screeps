var helper = require('helper');
var roles = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    repairer: require('role.repairer')
};
var spawn = require('spawn');

module.exports.loop = function () {
    // Garbage Collection
    helper.garbageCollection();

    // Spawn
    spawn.run();

    // Run Roles
    for (let name in Game.creeps) {
        if (Game.creeps.hasOwnProperty(name)) {
            // get the creep object
            var creep = Game.creeps[name];
            roles[creep.memory.role].run(creep);
        }
        else {
            console.log("No Creeps found!");
        }
    }
};