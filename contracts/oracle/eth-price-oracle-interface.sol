// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract EthPriceOracleInterface {
    function getLatestEthPrice() public virtual returns (uint256) {
        return 0;
    }
}

