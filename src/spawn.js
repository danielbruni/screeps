var helper = require('helper');

module.exports = {

    // Amount of different Creeps to build
    config: {
        harvester: 5,
        upgrader: 2,
        builder: 3,
        repairer: 2
    },

    // Creep Templates
    templates: {
        harvester: [WORK,WORK,WORK,CARRY,CARRY,MOVE],
        upgrader: [WORK,CARRY,CARRY,MOVE,MOVE],
        builder: [WORK,CARRY,MOVE],
        repairer: [WORK,CARRY,MOVE]
    },

    run: function(){
        for (var prop in this.config) {
            if(this.config.hasOwnProperty(prop)) {
                if(helper.getCreepByRole(prop).length < this.config[prop]) {
                    var newCreep = Game.spawns['Spawn1'].createCreep(this.templates[prop], undefined, { role: prop });
                    console.log('Spawning new Builder: ' + newCreep);
                } else {
                    console.log("We have enough " + prop);
                }
            }
        }
    }
};