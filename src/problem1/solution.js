/**
 *
 * @param {number} n
 * @returns {number}
 */
export const sum_to_n_a = function (n) {
	if (n < 0) return 0;
	return (n * (n + 1)) / 2;
};

/**
 *
 * @param {number} n
 * @returns {number}
 */
export const sum_to_n_b = function (n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

/**
 *
 * @param {number} n
 * @returns {number}
 */
export const sum_to_n_c = function (n) {
	if (n <= 0) return 0;
	return n + sum_to_n_c(n - 1);
};
