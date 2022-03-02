interface Person {
    firstName: string,
    lastName: string,
    job?: job,
    isVisitor?: boolean
}

type job = 'Engineer' | 'Programmer'

function generateEmail(input: Person, force?: boolean): string | undefined {
    if (input.isVisitor && !force) {
        return undefined
    } else {
        return `${input.firstName}.${input.lastName}@email.com`
    }
}

console.log(generateEmail({
    firstName: 'John',
    lastName: 'Doe',
    isVisitor: true
}, true));