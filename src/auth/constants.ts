export const jwtConstants = {
    secret: 'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
/**
 To securely manage JWT secrets in a NestJS application:

 Use Environment Variables: Store secrets in a .env file and load them using dotenv.
 Configure Secrets Access: Access secrets with process.env and avoid hardcoding them.
 Use Configuration Modules: Leverage NestJS’s ConfigModule to manage environment variables and secrets.
 Secure Secrets: Avoid committing secrets to version control and consider using advanced tools like AWS Secrets Manager or Azure Key Vault for production environments.
 */