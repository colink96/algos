/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

//Solution
//Time: O(n)
//Space: Constant

var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};
