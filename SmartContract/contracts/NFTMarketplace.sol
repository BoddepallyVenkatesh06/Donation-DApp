// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract NFTMarketplace {
  

    address contractAddress;
    uint256 listingPrice = 0.025 ether;
    address payable owner;

    event Donation(address indexed from, string name, string message, uint256 timestamp, uint256 amount);

   
    function buyChai(string memory name, string memory message) public payable {
     
    

        // Emit the Donation event

         emit Donation(msg.sender, name, message, block.timestamp, msg.value);
        
    }


}