input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (adjectives[randint(0, 2)]))
    basic.showString("" + (nouns[randint(0, 2)]))
    basic.showString("" + (verbs[randint(0, 2)]))
    basic.showString("" + (adverbs[randint(0, 2)]))
})
let adverbs: string[] = []
let verbs: string[] = []
let nouns: string[] = []
let adjectives: string[] = []
adjectives = ["beautiful", "delicate", "bright"]
nouns = ["bird", "butterfly", "dragonfly"]
verbs = ["eats", "flies", "flutters"]
adverbs = ["swiftly", "silently", "skilfully"]
