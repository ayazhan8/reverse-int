module.exports = function reverse(n) {
    var reversed = 0;

    if (n < 0) {
        n = n * -1;
    }

    while (n > 0) {
        reversed = (n % 10) + reversed * 10;
        n = parseInt(n / 10);
    }

    return reversed;
};
