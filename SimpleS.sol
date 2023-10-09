// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract TestS {
    uint256 public myNumber;

    struct family {
        uint256 age;
        string name;
    }

    family public yash = family({age: 20, name: "Yash"});

    function storeS(uint _myNumber) public {
        myNumber = _myNumber + 1;
    }

    function retreiveS() public view returns (uint256) {
        return myNumber;
    }
}
