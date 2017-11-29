const names = ['andrew', 'steve', 'jen'];

// create a new array with names, then ass mike at the end
[...names, 'Mike']
// it doesn change the array, it create a new one

["adam", ...names, 'mike']
// add adam to the start, mike to the end



//////////// for objects
const user = {
  name: 'john',
  age: 24
};
// add properties
{...user, location: 'Toronto'}

//override existing properties
{
  ...user,
  age: 29
  /// to override, must come after the sprread
}
