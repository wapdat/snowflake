# Node.js Snowflake SDK Integration

This repository provides a practical example of integrating the Snowflake Database with Node.js using the Snowflake SDK. It's a resource for developers who need a straightforward, executable guide to connect Node.js applications with Snowflake.

It's pretty much just this https://docs.snowflake.com/en/developer-guide/node-js/nodejs-driver but simplified

## Quickstart

### Prerequisites

- Node.js installed on your system.
- An active Snowflake account (instructions below).

### Setting Up a Snowflake Account

1. **Create an Account**: Visit [Snowflake's website](https://signup.snowflake.com/) and sign up for an account.
2. **Follow Setup Wizard**: After signing up, follow the Snowflake setup wizard to configure your account.
3. **Note Your Credentials**: Keep a record of your account name, username, and password. You will need these for setting up the SDK.

### Local Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/wapdat/nowflake.git
   ```
2. **Install Dependencies**:
   ```bash
   cd snowflake
   npm install snowflake-sdk'
   ```
3. **Configure Credentials**:
   Add your Snowflake credentials (username, password and account) into the script.

      ```javascript
   let user = 'lindsay'; // Your username that you login to the Sowflake web UI
   let password = "XXXXXXXXXXXXXXXXXXXXXX";
   let application = '';
   // get this "account' value as the first part of your Dedicated Login URL you get on your invite email
   // https://ruubhom-ua60212.snowflakecomputing.com
   let account = 'ruubhom-ua60212';
   ```
   
### Running Examples

   ```bash
lindsaysmith@Lindsays-MacBook-Pro snowflake % ./test.js
Starting
Created connection: {
    "_events": {},
    "_eventsCount": 0
}
Now trying to connect.
Successfully connected to Snowflake.
Got connection_ID: 61978a15-f894-4e50-82ad-c1e49bd1f85d
Successfully executed statement: SELECT * FROM test1.schema1.table1;
Row count: 2
[
    {
        "NAME": "lindsay"
    },
    {
        "NAME": "Hello Ed"
    }
]
Disconnected connection with id: 61978a15-f894-4e50-82ad-c1e49bd1f85d
   ```


## Contributions and License

Contributions are welcome. The project is under the MIT License.

## Contact

- Your Name: Lindsay
- Project Link: [https://github.com/wapdat/snowflake
---

