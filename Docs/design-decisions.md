# eSchool Market Place design-decisions

1. No direct client to microservice communication

2. Client must go through API Gateway

3. Communiction b/w API gateway and other microservices will be HTTP and socket.io based

4. Inte-process communication b/w microservices will be be event driven, no HTTP req/res.

5. Token Generation will be handled by API Gateway

6. Microservices will send clinet errors to API Gateway but other erros will be sent to monitoring and logging system