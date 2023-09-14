# CRUD API Documentation

This document provides detailed information on how to use the CRUD API for managing persons.


## API Endpoints

The API offers the following endpoints for managing persons:

- **Create a new person:**
  - **POST** /api
  - Request Body:
    ```json
    {
      "name": "Ololade Akinloye"
    }
    ```
  - Response (Success - 201 Created):
    ```json
    {
      "person": {
        "_id": "unique_id",
        "name": "Ololade Akinloye",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    }
    ```

- **Retrieve details of a person:**
  - **GET** /api/:id
  - Response (Success - 200 OK):
    ```json
    {
      "person": {
        "_id": "unique_id",
        "name": "Ololade Akinloye",
      }
    }
    ```

- **Update details of an existing person:**
  - **PATCH** /api/:id
  - Request Body:
    ```json
    {
      "name": "Updated Name"
    }
    ```
  - Response (Success - 200 OK):
    ```json
    {
      "person": {
        "_id": "unique_id",
        "name": "Updated Name",
      }
    }
    ```

- **Remove a person:**
  - **DELETE** /api/:id
  - Response (Success - 200 OK):
    ```json
    {
      "person": {
        "_id": "unique_id",
        "name": "Ololade Akinloye",
      }
    }
    ```

## Request and Response Formats

- All requests and responses are in JSON format.

## UML Diagram

Here is the UML (Unified Modeling Language) diagram representing the structure and relationships of this API's classes and models:

![UML Diagram](CRUD.png)

## Sample Usage

### Creating a New Person

```http
POST /api

Request Body:
{
  "name": "Ololade Akinloye"
}
```

Response (Success - 201 Created):
```json
{
  "person": {
    "_id": "unique_id",
    "name": "Ololade Akinloye",
  }
}
```

### Retrieving a Person's Details

```http
GET /api/:id
```

Response (Success - 200 OK):
```json
{
  "person": {
    "_id": "unique_id",
    "name": "Ololade Akinloye",
  }
}
```

### Updating a Person's Details

```http
PATCH /api/:id

Request Body:
{
  "name": "Updated Name"
}
```

Response (Success - 200 OK):
```json
{
  "person": {
    "_id": "unique_id",
    "name": "Updated Name",
  }
}
```

### Removing a Person

```http
DELETE /api/:id
```

Response (Success - 200 OK):
```json
{
  "person": {
    "_id": "unique_id",
    "name": "Ololade Akinloye",
  }
}
```

## Known Limitations and Assumptions

- The API assumes that persons are uniquely identified by their MongoDB `_id` field.

## Setting Up and Deploying the API

To deploy this API, you can use a platform like [Render](https://render.com/) for simplicity. Follow these steps to get your API up and running:

1. **Sign Up for Render**:

   If you haven't already, sign up for an account on the [Render website](https://render.com/).

2. **Create a New Web Service**:

   - Log in to your Render account.
   - Click the "Create a New" button.
   - Choose "Web Service" from the options.

3. **Configure Deployment Settings**:

   - Choose a name for your service (e.g., "my-api").
   - Connect your Git repository (GitHub, GitLab, or Bitbucket) where your API code is hosted.

4. **Specify Build and Run Settings**:

   - Choose your build environment, which is typically Node.js for a Node.js API.
   - Specify the build command, usually `npm install && npm run start` or a similar command based on your project setup.
   - Set the listening port for your application, often the default port like 3000.

5. **Configure Environment Variables**:

   - If your API relies on environment variables (e.g., database connection string), you can set them in the Render dashboard under the "Environment Variables" section.

6. **Review and Deploy**:

   - Review the configuration settings to ensure they match your project's requirements.
   - Click the "Create Web Service" or "Deploy" button to initiate the deployment process.

7. **Monitor Deployment**:

   - Render will automatically build and deploy your API based on the settings you provided. You can monitor the deployment progress in the Render dashboard.

8. **Access Your Deployed API**:

   - Once the deployment is successful, Render will provide you with a URL where your API is hosted (e.g., `https://my-api.onrender.com`).

9. **Test Your Deployed API**:

   - Use tools like Postman or cURL to test your API's endpoints on the provided URL to ensure everything is working as expected.

10. **Custom Domain (Optional)**:

    - If you have a custom domain, you can configure it to point to your Render-hosted API through the Render dashboard.

11. **Scaling and Maintenance**:

    - Render provides scaling and maintenance features to ensure your API is highly available and performant. You can configure auto-scaling based on traffic patterns.

12. **Monitoring and Logs**:

    - Utilize Render's monitoring and logging features to keep an eye on your API's health and performance.

