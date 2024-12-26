# CRUD API

This is a basic CRUD API built with Express and MongoDB.

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:Wahablawerl/CRUD-APP.git
    ```
2. Navigate to the project directory:
    ```sh
    cd CRUD API
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

### Development Server

To start the development server with nodemon, run:
```sh
npm run dev
```

### Production Server

To start the production server, run:
```sh
npm run serve
```

The server will be running on `http://localhost:3000`.

## Endpoints

- `GET /api/products` - Returns all products.
- `GET /api/products/:id` - Returns a product by ID.
- `POST /api/products` - Creates a new product.
