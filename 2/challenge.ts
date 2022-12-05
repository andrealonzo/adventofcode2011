interface Challenge {
    calculateAnswer1: () => number;
    calculateAnswer2: () => number;

}


interface Command {
    command: string,
    distance: number
}

export const createCalculator = (input: string): Challenge => {

    const parseInput = (input: string): Command[] => {
        const commands: string[] = input.split(/\n/)
        return commands.map((command) => {
            const commandStr: string[] = command.split(" ")
            return {
                command: commandStr[0],
                distance: parseInt(commandStr[1])
            }
        })
    }

    const commands: Command[] = parseInput(input)


    function getForwardDistance() {
        return commands
            .filter((command) => command.command === "forward")
            .map((commands) => commands.distance)
            .reduce((totalDistance, curDistance) => totalDistance + curDistance);
    }

    function getUpDepth() {
        return commands
            .filter((command) => command.command === "up")
            .map((commands) => commands.distance)
            .reduce((totalDistance, curDistance) => totalDistance + curDistance);
    }

    function getDownDepth() {
        return commands
            .filter((command) => command.command === "down")
            .map((commands) => commands.distance)
            .reduce((totalDistance, curDistance) => totalDistance + curDistance);
    }

    const calculateAnswer1 = () => {
        const forwardDistance = getForwardDistance()
        const upDepth = getUpDepth()
        const downDepth = getDownDepth()
        const depth = downDepth - upDepth
        return forwardDistance * depth
    };

    const calculateAnswer2 = () => {
        let forwardDistance = 0
        let depth = 0
        let aim = 0
        commands.forEach((command) => {
            if (command.command === "forward") {
                forwardDistance += command.distance
                depth += command.distance * aim
            } else if (command.command === "up") {
                aim -= command.distance
            } else if (command.command === "down") {
                aim += command.distance
            }
        })

        return forwardDistance * depth
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
