const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Function to calculate and display the required statistics
function analyzeAges(ages) {
    // Sort the array
    ages.sort((a, b) => a - b);
    console.log('Sorted ages:', ages);

    // Find the minimum and maximum age
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];
    console.log('Minimum age:', minAge);
    console.log('Maximum age:', maxAge);

    // Find the median age
    const midIndex = Math.floor(ages.length / 2);
    let medianAge;
    if (ages.length % 2 === 0) {
        // Even number of elements, median is the average of two middle elements
        medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
    } else {
        // Odd number of elements, median is the middle element
        medianAge = ages[midIndex];
    }
    console.log('Median age:', medianAge);

    // Calculate the average age
    const totalAge = ages.reduce((sum, age) => sum + age, 0);
    const averageAge = totalAge / ages.length;
    console.log('Average age:', averageAge);

    // Find the range of the ages
    const range = maxAge - minAge;
    console.log('Range of ages:', range);

    // Compare the value of (min - average) and (max - average)
    const diffMinAvg = Math.abs(minAge - averageAge);
    const diffMaxAvg = Math.abs(maxAge - averageAge);
    console.log('Absolute difference (min - average):', diffMinAvg);
    console.log('Absolute difference (max - average):', diffMaxAvg);
}

// Execute the function with the ages array
analyzeAges(ages);
