// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    name: 'Ahmed',
    email: 'ahmed@example.com',
    id: 'afhaque89',
    phone: '000-000-0000'
  }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray
