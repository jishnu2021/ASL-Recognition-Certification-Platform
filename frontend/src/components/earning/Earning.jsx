import React from 'react';
import certificate from '../img/certificate.jpeg'
function Earning() {
  // Simulate fetching the NFTs from a data source like localStorage or an API
  const earnedNfts = [
    {
      id: 1,
      title: 'Course Completion NFT',
      imageUrl: certificate, // Replace with actual NFT image URL
      description: 'This NFT was awarded for completing the course.',
    },
    // Add more NFTs as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8"><b>Your Earned NFTs</b></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"style={{width:'60%'}}>
        {earnedNfts.map((nft) => (
          <div key={nft.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={nft.imageUrl} alt={nft.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{nft.title}</h3>
              <p className="text-gray-600 mt-2">{nft.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Earning;
