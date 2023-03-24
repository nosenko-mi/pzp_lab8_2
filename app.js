

function task1(a, b) {

    console.log('TASK 1\n')

    a = parseFloat(prompt('A : ', 0))
    b = parseFloat(prompt('B : ', 0))

    console.log(`before: a = ${a}; b = ${b}`)
    // swap
    a += b
    b = a - b
    a = a - b

    console.log(`after: a = ${a}; b = ${b}`)
    alert(`after: a = ${a}; b = ${b}`)
    return [a, b]
}


function task2(a, b) {
    console.log('TASK 2\n')

    a = parseFloat(prompt('A : ', 0))
    b = parseFloat(prompt('B : ', 0))
    console.log(`a: ${a}; b: ${b}`)
    if (a > b) {
        console.log(`max: c = ${a}`)
        alert(`max: c = ${a}`)
        return a
    }
    console.log(`max: c = ${b}`)
    alert(`max: c = ${b}`)
    return b
}


function task3(a) {
    console.log('TASK 3\n')

    a = parseFloat(prompt('A : ', 0))
    console.log(`given: ${a}`)
    if (a < 0) {
        a *= -1
    }
    console.log(`abs: a = ${a}`)
    return a
}


function task4() {
    console.log('TASK 4\n')

    x = parseFloat(prompt('X : ', 0))
    z = parseFloat(prompt('Z : ', 0))

    let y = 0;
    y = Math.pow(x, 2) + 3 * x * z + 0.5 * Math.pow(z, 2) - (12 / 17)

    console.log(`x = ${x}; z = ${z}; y = ${y}`)
    return y
}


function task5() {
    console.log('TASK 5\n')

    let age = parseInt(prompt('Age : ', ''))

    if (age < 18) {
        return
    }
    if (confirm(`Вам дійсно ${age} років?`) == true && age >= 18) {
        alert('Доступ дозволено')
    } else {
        alert('Доступ заборонено')
    }
}


function task6() {
    console.log('TASK 6\n')

    let a = parseFloat(prompt('A : ', ''))

    if (a > 0) {
        console.log(`number [${a}] is positive`)
    }
    else if (a < 0) {
        console.log(`number [${a}] is negative`)
    }
    else {
        console.log(`[${a}] is not a number`)
    }
}


function task7() {
    console.log('TASK 7\n')

    let pass = prompt('password : ', '')

    checkPassword(pass, () => { alert('correct') }, () => { alert('wrong') })
}


// Part of task7
function checkPassword(password, fun1, fun2) {
    if (password === "password") {
        fun1()
    } else {
        fun2()
    }
}


function task8() {
    console.log('TASK 8\n')

    let a = parseInt(prompt('A : ', ''))
    let b = parseInt(prompt('B : ', ''))
    if (canDivide(a, b)) {
        alert(`${a} is divisible by ${b}`)
    }
    else {
        alert(`${a} is not divisible by ${b}`)
    }
}


// Part of task8
function canDivide(a, b) {
    return a % b == 0 ? true : false
}


function task9() {
    console.log('TASK 9\n')

    let n = parseInt(prompt('N : ', ''))

    let start = performance.now();
    console.log(sumRecursion(n))
    let end = performance.now();
    console.log(`[sumRecursion]: Execution time: ${end - start} ms`);

    start = performance.now();
    console.log(sumFormula(n))
    end = performance.now();
    console.log(`[sumFormula]: Execution time: ${end - start} ms`);

    start = performance.now();
    console.log(sumCycle(n))
    end = performance.now();
    console.log(`[sumCycle]: Execution time: ${end - start} ms`);

}


function sumRecursion(n) {
    if (n == 1) return 1;
    let res = n
    return res + sumRecursion(n - 1);
}


function sumFormula(n) {
    return n * ((1 + n) / 2)
}


function sumCycle(n) {
    res = 0
    for (i = 1; i <= n; i++) {
        res += i
    }
    return res
}


function task10() {
    console.log('TASK 10\n')

    let n = parseInt(prompt('N : ', ''))

    console.log("fibonacciCycle:\n")
    fibonacciCycle(n)

    console.log("fibonacciRecursion:\n")
    for (let i = 1; i <= n; i++) {
        console.log(fibonacciRecursion(i));
    }
}


function fibonacciRecursion(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2)
}


function fibonacciCycle(n) {
    let first = 0
    let second = 1
    for (i = 0; i < n; i++) {
        let sum = first + second

        first = second
        second = sum
        console.log(first)
    }

    return first
}


function task11() {
    console.log('TASK 11\n')

    let words = []

    while (true) {
        let word = prompt('Enter a word', '')

        if (word === 'exit') {
            break
        }
        words.push(word)
    }

    console.log(words)
}


function task12() {
    console.log('TASK 12\n')

    let a = parseInt(prompt('A : ', ''))
    let b = parseInt(prompt('B : ', ''))

    let items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
    console.log(`given: ${items}`)

    function replace(oldVal, newVal) {

        items.forEach((element, i) => {
            if (element === oldVal) {
                items[i] = newVal
            }
        });
    }

    replace(a, b)
    console.log(`new: ${items}`)
}


function task13() {
    console.log('TASK 13\n')

    let items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
    console.log(`given: ${items}`)

    let count = 0
    items.forEach(e => {
        if (e % 2 === 0) {
            count++
        }
    })
    console.log(`amount of even: ${count}`)
}


function task14() {
    console.log('TASK 14\n')

    let items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
    console.log(`given: ${items}`)

    let max = items[0]

    for (i = 1; i < items.length; i++) {
        if (items[i] > max) {
            max = items[i]
        }
    }

    console.log(`maximum: ${max}`)
}


function task15() {
    console.log('TASK 15\n')

    let items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
    console.log(`given: ${items}`)

    let avg = 0

    for (i = 0; i < items.length; i++) {
        avg += items[i]
    }
    avg /= items.length

    console.log(`average: ${avg}`)
}

function task16() {
    console.log('TASK 16\n')

    let items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
    console.log(`given: ${items}`)

    let positiveCount = 0
    let negativeCount = 0
    items.forEach(e => {
        if (e > 0) {
            positiveCount++
        }
        else if (e < 0) {
            negativeCount++
        }
    })

    let zeroCount = items.length - positiveCount - negativeCount

    console.log(`positive: ${positiveCount}; negative: ${negativeCount}; zero: ${zeroCount}`)
}
