# Receipt Processor

A webservice to process and calculate points from a json receipt

## Tech Stack

- **Runtime**: Node.js (v22.0.0)
- **Language**: TypeScript (v5.7.3)
- **Framework**: Express
- **Linting**: ESLint + Prettier

## **Installation using docker**

```sh
# Clone the repository
git clone https://github.com/aadi-nair/receipt-processor.git

# Navigate to the project directory
cd receipt-processor

#run using docker
docker compose up -d
```

The webservice will run on ```http://localhost:3000```

## Project Structure

```
📦 receipt-processor
 ┣ 📂 src
 ┃ ┣ 📂 controllers   # Route handlers
 ┃ ┣ 📂 routes        # API routes
 ┃ ┣ 📂 types         # Type definition for models(Receipt/Item)
 ┃ ┣ 📂 utils         # Utility functions
 ┃ ┣ 📜 index.ts      # Express app initialization
 ┣ 📜 .dockerignore   # Files to ignore for docker build
 ┣ 📜 .env            # Environment variables
 ┣ 📜 .gitignore      # Files to ignore for git
 ┣ 📜 docker-compose.yml     
 ┣ 📜 Dockerfile      # Commands to assemble image   
 ┣ 📜 package.json    # Dependencies and scripts
 ┣ 📜 README.md       # Project documentation
 ┗ 📜 tsconfig.json   # TypeScript configuration

```