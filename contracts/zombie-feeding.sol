pragma solidity ^0.8.0;

import "./zombie-factory.sol";

// Create KittyInterface here
contract KittyInterface {
    function getKitty(uint256 _id)
        public
        view
        virtual
        returns (
            bool isGestating,
            bool isReady,
            uint256 cooldownIndex,
            uint256 nextActionAt,
            uint256 siringWithId,
            uint256 birthTime,
            uint256 matronId,
            uint256 sireId,
            uint256 generation,
            uint256 genes
        ) {
            return (true,true,0,0,0,0,0,0,0,0);
        }
}

contract ZombieFeeding is ZombieFactory {
    // ^ The address of the KittyInterface contract on Ethereum
    // address ckAddress = 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d;

    // Now `kittyContract` is pointing to the other contract
    KittyInterface kittyContract;

    modifier onlyOwnerOf(uint256 _zombieId) {
        require(msg.sender == zombieToOwner[_zombieId]);
        _;
    }

    function setKittyContractAddress(address _address) external onlyOwner {
        kittyContract = KittyInterface(_address);
    }

    function _triggerCooldown(Zombie storage _zombie) internal {
        _zombie.readyTime = uint32(block.timestamp + cooldownTime);
    }

    function _isReady(Zombie storage _zombie) internal view returns (bool) {
        return (_zombie.readyTime <= block.timestamp);
    }

    function feedAndMultiply(
        uint256 _zombieId,
        uint256 _targetDna,
        string memory _species
    ) internal onlyOwnerOf(_zombieId) {
        // user is owner of zombie
        Zombie storage myZombie = zombies[_zombieId];

        require(_isReady(myZombie));

        _targetDna = _targetDna % dnaModulus;
        uint256 newDna = (myZombie.dna + _targetDna) / 2;

        if (
            keccak256(abi.encodePacked(_species)) ==
            keccak256(abi.encodePacked("kitty"))
        ) {
            newDna = newDna - (newDna % 100) + 99;
        }

        _createZombie("NoName", newDna);
        _triggerCooldown(myZombie);
    }

    function feedOnKitty(uint256 _zombieId, uint256 _kittyId) public {
        uint256 kittyDna;
        (, , , , , , , , , kittyDna) = kittyContract.getKitty(_kittyId);
        feedAndMultiply(_zombieId, kittyDna, "kitty");
    }
}
