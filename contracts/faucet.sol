pragma solidity ^0.8.17;

contract Faucet {
    uint8 private balanceOf;

    mapping(address => uint8) test;

    function addFunds() public returns (uint8) {
        address funder = msg.sender;
        return test[funder];
    }
}
