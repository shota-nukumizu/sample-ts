interface FullName {
    first: string;
    last: string;
}

interface Callback {
    (result: number): void
}

let myName: FullName = { first: "Andy", last: "Li" }

const outputToConsole: Callback = function (result) {
    console.log("Output: " + result)
}

function getNameLength(name: FullName, callback: Callback): void {
    const len = name.first.length + name.last.length
    callback(len)
}

getNameLength(myName, outputToConsole)