# Todo App

This is a simple Todo application built with NestJS and PostgreSQL. It provides basic functionality to create, read, update, and delete tasks.

## Prerequisites

Before you get started, ensure that you have the following software installed on your local machine:

- [Docker](https://www.docker.com/)

## Getting Started

To run this project on your local machine, follow the steps below:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TechAsif/todo-app.git

2. Navigate to the project directory:

   ```bash
   cd todo-app
3. Build and run the Docker containers using docker-compose:

   ```bash
   docker-compose up --build

This command will set up two containers: one for the NestJS application and one for the PostgreSQL database.

4. Once the containers are running, the NestJS application should be accessible at http://localhost:3000.    You can use a web browser or API client (e.g., Postman) to interact with the API.
