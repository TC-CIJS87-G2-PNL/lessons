/**
 * Fix bug
 */

function run() {
    const b = "Bar";

    console.log(a, b)
    b = "Bar1"
    {
        let c = "Fooz"
        let d = "Bazz"
        let a = "Foo";

        console.log(c, d)
    }

    console.log(c)
    console.log(d)
}

run()