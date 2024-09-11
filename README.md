# ASL-Recognition-Certification-Platform

Welcome to the **Sign Language Certification with NFTs** project! This repository contains the codebase for a fully automated course designed to teach sign language, culminating in a certification issued as an NFT. This project was developed as part of the **Status Code 1** initiative.

![ab72c4e6-6111-4dc0-b48f-2f17169f69f0](https://github.com/user-attachments/assets/9f7d7950-0c87-4e0f-837b-8150731f3077)

## Overview

This project leverages cutting-edge technologies to create a seamless learning experience for sign language enthusiasts. The course is fully automated and ensures that users learn and demonstrate their proficiency in sign language before receiving a certification. The certification is minted as an NFT on a blockchain network and stored in IPFS.

### Key Features

- **Hand Recognition with Mediapipe**: We use Mediapipe's hand recognition technology to capture hand coordinates, which are stored in a CSV format with labels for each sign in the dataset.
- **Machine Learning for Sign Prediction**: A machine learning model predicts the letter being signed based on the captured hand coordinates.
- **Interactive Learning Modules**: The app uses Mediapipe to capture hand coordinates in real-time, sending them to the ML model for prediction. If the user correctly signs a letter five consecutive times, they can proceed to the next module.
- **Final Examination**: A randomized word is generated during the exam. Users must correctly sign each letter of the word to pass.
- **NFT Certification**: Upon passing the exam, the certification is minted on **Avalanche/Polygon/Sepolia** and stored as an NFT in IPFS.

## Project Architecture

The architecture behind the project is as follows:

1. **Data Collection**:
   - Hand coordinates are captured using Mediapipe and stored in a CSV format.
   - Each sign in the dataset is labeled accordingly.

2. **Model Training**:
   - A machine learning model is trained on the labeled dataset to recognize and predict the sign being shown.

3. **Application Workflow**:
   - In the application, Mediapipe captures hand coordinates in real-time.
   - The coordinates are sent to the trained ML model for prediction.
   - If a sign is correctly identified five times in a row, the user progresses to the next module.
   - The final exam generates a random word, and the user must sign it correctly to pass.

4. **NFT Certification**:
   - After successfully completing the exam, a certificate is minted on the selected blockchain network and stored as an NFT in IPFS.

## Demo

Check out our demo video to see the project in action: 
[Demo Video](https://youtu.be/f3TI6trx3UU?si=JI3OTPYm__hmKJ-J)

## Technologies Used

- **Mediapipe** for hand recognition
- **Machine Learning** for sign prediction
- **Python** for backend development
- **React** for frontend development
- **Avalanche/Polygon/Sepolia** for NFT minting
- **IPFS** for storing NFTs

## Team and Acknowledgments

This project wouldn't have been possible without the incredible contributions from our team:

- **Jishnu Ghosh** - Full Stack Development
- **Debdutta Roy Chowdhury** - Design
- **Moumita Saha** - Frontend Development
- **Souvik Ghosh** - Backend Assistance


## Getting Started

To get started with this project, clone the repository and follow the setup instructions below.

### Prerequisites

- Python 3.x
- Node.js
- React
- Mediapipe

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mochoye/ASL-Recognition-Certification-Platform
   ```
   
2. Navigate to the project directory:

  ```
  cd ASL-Recognition-Certification-Platform
  ```

3. Install the required dependencies for the backend:
4. Install the frontend dependencies:
   ```
    cd frontend
    npm install

5. Run the application:


  ```
  npm start
  ```

### Contributing

We welcome contributions to this project. Please fork the repository, create a new branch, and submit a pull request with your changes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
If you have any questions or feedback, feel free to reach out to us at mochoye.official@gmail.com , jishnughosh2023@gmail.com 
