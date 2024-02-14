// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Whitelist {
    uint8 public maxWhiteListedAddresses;
    uint8 public numWhiteListedAddresses;

    mapping(address => bool) whiteListedAddresses;

    constructor(uint8 _maxWhiteListedAddresses) {
        maxWhiteListedAddresses = _maxWhiteListedAddresses;
    }

    function addAddressToWhitelist() public {
        require(
            !whiteListedAddresses[msg.sender],
            "Sender already in the whitelist"
        );
        require(
            numWhiteListedAddresses < maxWhiteListedAddresses,
            "Max limit has reached"
        );
        numWhiteListedAddresses += 1;
        whiteListedAddresses[msg.sender] = true;
    }
}
