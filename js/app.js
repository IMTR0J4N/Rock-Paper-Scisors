const dict = { P: "F", F: "C", C: "P" };
const pfcp = "PFCP";

const shifoumi = str => {
    let returnStr = '';

    for (const i of str) {
        console.log(i)
        returnStr += dict[i]
    }

    return returnStr
}

console.log(shifoumi(pfcp));