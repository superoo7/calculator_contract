pragma solidity ^0.4.22;


contract Calculator {
    uint result;
    constructor(uint initial) public {
        result = initial;
    }

    function getResult() public view returns (uint) {
        return result;
    }

    function addToNumber(uint num) public {
        result = result + num;
    }

    function minusToNumber(uint num) public {
        result = result - num;
    }
}
