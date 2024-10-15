# AWS S3 JS/TS Example

This repository contains an Express.js application demonstrating various operations with AWS S3 using JavaScript/TypeScript. The application serves as a practical example for interacting with AWS S3, including functionalities for listing, uploading, and deleting objects in S3 buckets.

## Table of Contents

- [Features](#features)
- [Documentation](#documentation)
- [Local Development](#local-development)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

- List all S3 buckets
- List objects within a specified S3 bucket
- Upload files to an S3 bucket
- Delete files from an S3 bucket

## Documentation

For detailed usage and API reference, check the official AWS SDK documentation:

- [ListBucketsCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketsCommand/)
- [ListObjectsV2Command](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListObjectsV2Command/)
- [PutObjectCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/PutObjectCommand/)
- [DeleteObjectCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/DeleteObjectCommand/)

Additional resources:

- [Cloudflare R2 with AWS SDK for JavaScript](https://developers.cloudflare.com/r2/examples/aws/aws-sdk-js-v3/)
- [AWS SDK for JavaScript v2: S3 Example](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html)

## Local development

To set up the project for local development, follow these steps:

1. **Clone the Repository**
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Environment Configuration Create a .env file from the .env.example template and fill in the required data:

```text
PORT=3000
ACCESS_KEY=your-access-key
SECRET_KEY=your-secret-key
BUCKET=your-bucket-name
BUCKET_REGION=your-bucket-region
```

3. Install Dependencies Run the following commands to install dependencies:

```sh
npm install
```

4. Run the Application Start the development server:

```sh
npm run dev
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

### Improvements Made:

1. **Structured Format**: Added a table of contents to improve navigation.
2. **Features Section**: Listed the main functionalities of the application.
3. **Detailed Local Development Instructions**: Clarified the setup steps with more details and included the command to navigate into the cloned directory.
4. **Contributing Section**: Encouraged community contributions.
5. **License Section**: Included a section for licensing information.

This structure makes the README more user-friendly and informative, especially for beginners looking to understand and contribute to the project.
