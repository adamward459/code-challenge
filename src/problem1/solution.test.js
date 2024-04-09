import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from './solution';
import { suite, test, expect } from 'vitest';

suite('Sum Functions', () => {
  // Test cases for sum_to_n_a
  test('sum_to_n_a should return 0 when n is 0', () => {
    expect(sum_to_n_a(0)).toBe(0);
  });

  test('sum_to_n_a should return the correct sum for positive integers', () => {
    expect(sum_to_n_a(1)).toBe(1);
    expect(sum_to_n_a(5)).toBe(15);
    expect(sum_to_n_a(10)).toBe(55);
  });

  test('sum_to_n_a should return the correct sum for negative integers', () => {
    expect(sum_to_n_a(-1)).toBe(0);
    expect(sum_to_n_a(-5)).toBe(0);
    expect(sum_to_n_a(-10)).toBe(0);
  });

  // Test cases for sum_to_n_b
  test('sum_to_n_b should return 0 when n is 0', () => {
    expect(sum_to_n_b(0)).toBe(0);
  });

  test('sum_to_n_b should return the correct sum for positive integers', () => {
    expect(sum_to_n_b(1)).toBe(1);
    expect(sum_to_n_b(5)).toBe(15);
    expect(sum_to_n_b(10)).toBe(55);
  });

  test('sum_to_n_b should return the correct sum for negative integers', () => {
    expect(sum_to_n_b(-1)).toBe(0);
    expect(sum_to_n_b(-5)).toBe(0);
    expect(sum_to_n_b(-10)).toBe(0);
  });

  // Test cases for sum_to_n_c
  test('sum_to_n_c should return 0 when n is 0', () => {
    expect(sum_to_n_c(0)).toBe(0);
  });

  test('sum_to_n_c should return the correct sum for positive integers', () => {
    expect(sum_to_n_c(1)).toBe(1);
    expect(sum_to_n_c(5)).toBe(15);
    expect(sum_to_n_c(10)).toBe(55);
  });

  test('sum_to_n_c should return the correct sum for negative integers', () => {
    expect(sum_to_n_c(-1)).toBe(0);
    expect(sum_to_n_c(-5)).toBe(0);
    expect(sum_to_n_c(-10)).toBe(0);
  });
});
