function areAnagrams(str1, str2) {
  
    const normalizeString = (str) => {
        return str
            .toLowerCase() // Convert to lowercase for case-insensitive comparison
            .replace(/[^a-z0-9]/g, '') // Remove all characters that are NOT a-z or 0-9
            .trim(); // Trim any leading/trailing whitespace
    };

    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);

    // If the normalized strings have different lengths, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Sort the characters of both normalized strings and compare them
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// --- Test Cases ---
console.log("--- Anagram Test Cases ---");
console.log(`"Astronomer" vs "Moon starer": ${areAnagrams("Astronomer", "Moon starer")}`); // Expected: true
console.log(`"School master" vs "The classroom": ${areAnagrams("School master", "The classroom")}`); // Expected: true
console.log(`"The Morse Code" vs "Here come dots": ${areAnagrams("The Morse Code", "Here come dots")}`); // Expected: true
console.log(`"listen" vs "silent": ${areAnagrams("listen", "silent")}`); // Expected: true
console.log(`"hello" vs "world": ${areAnagrams("hello", "world")}`); // Expected: false
console.log(`"Debit card" vs "Bad credit": ${areAnagrams("Debit card", "Bad credit")}`); // Expected: true
console.log(`"A gentleman" vs "Elegant man": ${areAnagrams("A gentleman", "Elegant man")}`); // Expected: true
console.log(`"restful" vs "fluster": ${areAnagrams("restful", "fluster")}`); // Expected: true
console.log(`"Elevator" vs "Elevatord": ${areAnagrams("Elevator", "Elevatord")}`); // Expected: false (different length)
console.log(`"Race" vs "Care": ${areAnagrams("Race", "Care")}`); // Expected: true (case-insensitive)
console.log(`"Race" vs "Cares": ${areAnagrams("Race", "Cares")}`); // Expected: false
console.log(`"A" vs "A": ${areAnagrams("A", "A")}`); // Expected: true
console.log(`"" vs "": ${areAnagrams("", "")}`); // Expected: true (empty strings are anagrams of each other)