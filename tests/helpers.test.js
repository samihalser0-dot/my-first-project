// Tests for utility functions

const helpers = require('../utils/helpers');

/**
 * Test suite for helper functions
 */
const runTests = () => {
  console.log('\n🧪 Running Tests...\n');

  let passed = 0;
  let failed = 0;

  /**
   * Test assertion helper
   */
  const assert = (testName, condition, expected, actual) => {
    if (condition) {
      console.log(`✅ ${testName}`);
      passed++;
    } else {
      console.log(`❌ ${testName}`);
      console.log(`   Expected: ${expected}, Got: ${actual}`);
      failed++;
    }
  };

  // Test capitalizeFirstLetter
  assert(
    'capitalizeFirstLetter("hello")',
    helpers.capitalizeFirstLetter('hello') === 'Hello',
    'Hello',
    helpers.capitalizeFirstLetter('hello')
  );

  assert(
    'capitalizeFirstLetter("world")',
    helpers.capitalizeFirstLetter('world') === 'World',
    'World',
    helpers.capitalizeFirstLetter('world')
  );

  // Test getRandomNumber
  const random = helpers.getRandomNumber(1, 100);
  assert(
    'getRandomNumber(1, 100) returns number between 1 and 100',
    random >= 1 && random <= 100,
    'number between 1-100',
    random
  );

  // Test isEmpty
  assert(
    'isEmpty([])',
    helpers.isEmpty([]) === true,
    'true',
    helpers.isEmpty([])
  );

  assert(
    'isEmpty({})',
    helpers.isEmpty({}) === true,
    'true',
    helpers.isEmpty({})
  );

  assert(
    'isEmpty("text")',
    helpers.isEmpty('text') === false,
    'false',
    helpers.isEmpty('text')
  );

  // Test Results
  console.log('\n' + '='.repeat(40));
  console.log(`📊 Test Results: ${passed} passed, ${failed} failed`);
  console.log('='.repeat(40) + '\n');

  return { passed, failed };
};

module.exports = { runTests };
