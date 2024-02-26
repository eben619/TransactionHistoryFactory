// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./TransactionTracker.sol";

contract TransactionHistoryFactory {
    mapping(address => address) public userTrackers;

    // Deploys a new TransactionTracker contract for a user
    function createTracker() public {
        require(userTrackers[msg.sender] == address(0), "Tracker already exists for user");
        TransactionTracker tracker = new TransactionTracker();
        userTrackers[msg.sender] = address(tracker);
    }

    // Gets the TransactionTracker address for a user
    function getTracker(address user) public view returns (address) {
        return userTrackers[user];
    }
}
