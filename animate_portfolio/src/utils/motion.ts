const variantFromTop = (delay:number) => {
    return {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                type: "tween",
                duration: 0.5
            }
        }
    }
}

const variantFromLeft = (delay:number) => {
    return {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                type: "tween",
                duration: 0.5
            }
        }
    }
}
    
const variantFromBottom = (delay:number) => {
    return {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                type: "tween",
                duration: 0.5
            }
        }
    }
}

const variantFromRight = (delay:number) => {
    return {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                type: "tween",
                duration: 0.5
            }
        }
    }
}

export { variantFromTop, variantFromLeft, variantFromBottom, variantFromRight }
