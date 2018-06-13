export function exponentialProgression(index, radix) {
    let progression = [1];
    for (let n = 1; n < index; n++)
        progression.push(progression[n - 1] * radix);
    return progression;
}
