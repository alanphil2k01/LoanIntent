// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract LoanIntent {
    address private _owner;

    uint256 private _borrowerCount;
    uint256 private _lenderCount;

    enum Status {
        Pending,
        Borrowed,
        Lended,
        Done,
        Canceled
    }

    struct Collateral {
        uint nftId;
        address nftAddress;
    }

    struct BorrowerIntent {
        uint256 id;
        address owner;
        address tokenAddress;
        uint value;
        uint maxInterest;
        Collateral collateral;
        Status status;
    }

    struct LenderIntent {
        uint256 id;
        address owner;
        address tokenAddress;
        uint minInterest;
        uint value;
        Status status;
    }

    BorrowerIntent[] private _borrowerIntents;
    LenderIntent[] private _lenderIntents;

    modifier onlyOwner() {
        require(msg.sender == _owner, "Not the owner");
        _;
    }

    constructor() {
        _borrowerCount = 0;
        _lenderCount = 0;
        _owner = msg.sender;
    }

    function getBorrowerIntents() external view returns (BorrowerIntent[] memory borrowerIntents) {
        return _borrowerIntents;
    }

    function getLenderIntents() external view returns (LenderIntent[] memory lenderIntents) {
        return _lenderIntents;
    }

    function createBorrowerIntent(address tokenAddress, uint256 value, uint256 maxInterest, uint256 nftId, address nftAddress) external returns (uint256 borrowerIntentId) {
        IERC20 token = IERC20(tokenAddress);
        require(token.allowance(msg.sender, address(this)) >= value, "Add allowances of amount to this contract");

        IERC721 nftContract = IERC721(nftAddress);
        require(nftContract.ownerOf(nftId) == address(this), "Add allowances of amount to this contract");

        Collateral memory collateral = Collateral({
            nftId: nftId,
            nftAddress: nftAddress
        });

        BorrowerIntent memory newBorrowerIntent = BorrowerIntent({
            id: _borrowerCount,
            owner: msg.sender,
            tokenAddress: tokenAddress,
            value: value,
            maxInterest: maxInterest,
            collateral: collateral,
            status: Status.Pending
        });

        _borrowerIntents.push(newBorrowerIntent);
        _borrowerCount++;
        return _borrowerCount;
    }

    function createLenderIntent(address tokenAddress, uint256 value, uint256 minInterest) external returns (uint256 lenderIntentId) {
        IERC20 token = IERC20(tokenAddress);
        require(token.allowance(msg.sender, address(this)) >= value, "Add allowances of amount to this contract");

        LenderIntent memory newBorrowerIntent = LenderIntent({
            id: _borrowerCount,
            owner: msg.sender,
            tokenAddress: tokenAddress,
            value: value,
            minInterest: minInterest,
            status: Status.Pending
        });

        _lenderIntents.push(newBorrowerIntent);
        _lenderCount++;
        return _lenderCount;
    }

    function solve(uint256[] calldata borrowerIds, uint256[] calldata lenderIds, address tokenAddress) external onlyOwner {
        IERC20 token = IERC20(tokenAddress);

        for (uint i = 0; i < lenderIds.length; i++) {
            LenderIntent memory lender = _lenderIntents[i];
            token.transferFrom(lender.owner, address(this), lender.value);
            lender.status = Status.Lended;
            _lenderIntents[i] = lender;
        }

        for (uint i = 0; i < borrowerIds.length; i++) {
            BorrowerIntent memory borrower = _borrowerIntents[i];
            token.transferFrom(borrower.owner, address(this), borrower.value);
            borrower.status = Status.Borrowed;
            _borrowerIntents[i] = borrower;
        }

    }

}

