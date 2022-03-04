const toGrams = (amount, unit) => {
    if (unit == "lbs") {
        let result = amount * 454
        return result
    } else if (unit == "oz") {
        let result = amount * 28.35
        return result
    } else if (unit == "cups") {
        let result = amount * 120
        return result
    }
    else {
        console.log("not sure what happened bud")
    }
}