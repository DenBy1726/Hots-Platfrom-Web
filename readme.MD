How to setup https:
1) Get a SSL certificate (for example self-signed)

````
keytool -genkey -alias tomcat
   -storetype PKCS12 -keyalg RSA -keysize 2048
   -keystore keystore.p12 -validity 3650
````

2) Edit Spring boot config

````
server:
      port: 8443
      ssl:
          key-store: keystore.p12
          key-store-password: <your password here>
          keyStoreType: PKCS12
          keyAlias: tomcat
````
          
How to configure oauth2:
1) Register your app and get clientId and SecretId
2) Edit Spring boot config like this

````
<your provider name (google)>:
      client:
          clientId: <your client id>
          clientSecret: <your client secret>
          accessTokenUri: https://www.googleapis.com/oauth2/v3/token
          userAuthorizationUri: https://accounts.google.com/o/oauth2/auth
          tokenName: oauth_token
          authenticationScheme: query
          clientAuthenticationScheme: form
          scope: profile
      resource:
          userInfoUri: https://www.googleapis.com/userinfo/v2/me
          preferTokenInfo: false
````
How to build and run server
````
gradle build
java -jar build\libs\hots_server-1.0.0.jar
````