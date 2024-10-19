# Shamir's Secret Sharing Algorithm

This project is a simple implementation of Shamir's Secret Sharing algorithm using JavaScript. It reads input from a JSON file, decodes the values, and calculates the constant term (secret) using Lagrange interpolation.

## Prerequisites

- **Node.js** installed on your machine.
  - [Download and install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/shamirs-secret-sharing-js.git
    cd shamirs-secret-sharing-js
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

    *(If your script doesn't use any specific libraries, this step can be skipped)*

## Running the Code

1. Make sure you have an input JSON file (e.g., `input.json`) in the root directory of the project.
   
2. To run the code:

    ```bash
    node shamir.js 
    ```

### Example Input Format

The input JSON should be structured like this:

```json
{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  }
}
