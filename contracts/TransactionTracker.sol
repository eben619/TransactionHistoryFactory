// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionTracker {
    struct Transaction {
        address to;
        uint256 value;
        bytes data;
        bool success; 
    }

    Transaction[] public transactions;

    // Record every transaction executed from this contract address
    function _recordTransaction(address to, uint256 value, bytes memory data, bool success) internal {
        transactions.push(Transaction(to, value, data, success));
    }

    // Function to fetch all transactions associated with this contract
    function getTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }
}