// javascript não tem função range() nativa


// equivalente à range(10)
for (let x = 0; x < 10; x++) {
    console.log(x);
}

console.log("\n" + "-".repeat(80) + "\n");

// equivalente à range(5, 12)
for (let y = 5; y < 12; y++) {
    console.log(y);
}

console.log("\n" + "-".repeat(80) + "\n");

// equivalente à range(0, 22, 3)
for (let z = 0; z < 22; z += 3) {
    console.log(z);
}
