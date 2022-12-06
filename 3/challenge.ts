interface Challenge {
    calculateAnswer1: () => number;
    calculateAnswer2: () => number;

}

export const createCalculator = (input: string): Challenge => {

    const parseInput = (input: string): number[][] => {
        const binaryStrings: string[] = input.split(/\n/)
        return binaryStrings.map((binaryString) => {
            return binaryString.split("").map(Number)
        })
    }

    const binaryNumbers: number[][] = parseInput(input)

    function getGammaRateInBinary() {
        let gammaRate = ""
        for (let i = 0; i < binaryNumbers[0].length; i++) {
            const numZeros = binaryNumbers
                .map((binaryNumber) => binaryNumber[i])
                .filter((number) => number === 0)
                .length
            if (numZeros > binaryNumbers.length / 2)
                gammaRate += "0"
            else
                gammaRate += "1"
        }
        return gammaRate

    }

    function getGammaRate() {
        const gammaRateBinary = getGammaRateInBinary()
        return parseInt(gammaRateBinary, 2)
    }

    function getEpsilonRate() {
        const gammaRateBinary = getGammaRateInBinary()
        const epsilonRateBinary = gammaRateBinary
            .split("")
            .map((bit) => {
                if (bit === "0") {
                    return 1
                }
                return 0
            }).join("")

        return parseInt(epsilonRateBinary, 2)
    }

    const calculateAnswer1 = () => {
        const gammaRate = getGammaRate();
        const epsilonRate = getEpsilonRate();
        return gammaRate * epsilonRate
    };


    function getRate(compare) {
        let keep = binaryNumbers

        for (let i = 0; i < keep[0].length; i++) {
            let ones = []
            let zeros = []
            for (let j = 0; j < keep.length; j++) {
                if (keep[j][i] == 1) {
                    ones.push(keep[j])
                } else {
                    zeros.push(keep[j])
                }
            }
            keep = compare(ones.length,zeros.length)?ones:zeros
            if(keep.length==1){
                break
            }

        }
        return parseInt(keep[0].join(""),2)

    }
    const calculateAnswer2 = () => {
        const oxygenRate = getRate((n1,n2)=>n1>=n2)
        const co2Rating = getRate((n1,n2)=>n1<n2)
        return co2Rating * oxygenRate
    };


    return {
        calculateAnswer1: calculateAnswer1,
        calculateAnswer2: calculateAnswer2,
    }

}
