# App-creator

A Clojure app designed to easily create:
- scripts for creating and filling databases (currently: only for Postgresql)
- server projects with handlers (currently: only with Spring Framework)
- client projects with API requests (currently: only mobile app for Android)
- files for your apps and databases quick containerization (currently: only with Docker)

**Notice.** While server and client projects will be created and filled and be ready for use, 
the resulting sql-commands, as well as the commands for running containers, 
will not be called. You will just get .bat-files with scripts which you can edit and run
whenever you want. This is because it's *highly likely* that you will need to edit or 
concrete something in the generated data before running containers or creating databases.

## Usage

```
>> app-creator start
               -i my_data.yml 
               -o my_output
```
For more information about command format, use `-h` or `--help` option.

Here, output is a correct absolute path to directory with quotes.

Input is a correct absolute path to existing .yml/.yaml-file with quotes. 
It contains all the information about what you need to create.
Contents of the input file **must have the following format**:

```yaml
--- 
db: # specifications for database creating scripts; optional  
  postgresql: # DBMS you want to use, currently only postgresql
    db-name: MyName # name of your database
    host: localhost # ip-address of your database
    username: funnyCat # username for your database
    password: pwd # password for your database
    tables: # list of tables you want to create
      - table-name: t1 # table name must satisfy the requirements of postgresql
        columns:
          - col-name: c1 # column name
            opts: string # type of column data
          - col-name: c2
            opts: date
          # any number of columns
      # and any number of tables
      - table-name: t2 
        columns: 
          - col-name: c1 
            opts: bool
server: # specifications for server creating; optional
  spring: # framework you want to use, currently only spring
    project:
      build: gradle # build system, optional, default gradle
      language: java # language, optional, currently only java
      boot-version: 2.6.6 # spring boot version, optional, default 2.6.2
      group: com.my.company # your project group, optional, default "com.example"
      artifact: demo_proj # artifact name, optional, default "demo"
      proj-name: my_demo_project # your future project name, optional, default "demo"
      description: demo_description # optional, default "Demo project for Spring Boot" 
      packaging: war # project archive packaging, optional, default "jar"
      java-version: "11" # java-version must be string, optional, default 11
      project-version: 0.0.1-SNAPSHOT # optional, default "0.0.1-SNAPSHOT"
      deps: # optional. Look for list of available deps in spring boot documentation
        - security
        - web
    properties: 
      db: # database to connect with 
        type: postgresql
        username: funnyDog
        password: pwd
        sql-host: localhost
        sql-port: 5432
        db-name: postgres
    controllers: # server handlers
      - controller-name: UserController # must have format <entity-name>Controller
        requests:
          - req-name: login # must be correct java-method name
            uri: "/login" # must be correct uri path
            mapping: get # get, post and other spring-acceptable request mappings
          - req-name: deleteUser
            uri: "/user/delete"
            mapping: delete
        # any number of controllers and requests inside
      - controller-name: ShoutController
        requests:
          - req-name: shout
            uri: "/shout"
            mapping: post
client: # specifications for client creating; optional
  android: # type of project, currently only android mobile app
    proj-name: android_app # android project name
    language: java # project language, currently only java
    package-name: com.android_app_package # must contain at least one dot
    test-framework: junit
    host: localhost
    port: 8080
    # any number of requests
    requests:
      - req-name: getUser # name of request method
        uri: "/user" # endpoint uri
        type: get # request type, get, post etc.
        entity: User # entity that request is operating with
      - req-name: postShout
        uri: "/shout"
        type: post
        entity: Shout
containerization: # specifications for containerization; optional
  docker: # currently, only docker platform can be used
    jars: # jar-files of projects that need to be containerized, optional
      - image-name: kate-java # name of docker image
        dir-name: java-dir # name of directory where to build docker image
        jar-path: "path/to.jar" # correct path to existing jar
    nginx: # similar specifications for nginx container, optional
      - image-name: kate-nginx
        dir-name: nginx-dir
        backend-image-name: kate-java # name of image to deploy
    postgres: # specifications for postgres container, optional
      - image-name: kate-postgres
        password: pwd
    network: # specifications for network for all containers, mandatory
        network-name: kate-network
```
To find more about Spring project initializing properties, please 
read [spring init docs](https://docs.spring.io/spring-boot/docs/current/reference/html/cli.html#cli.using-the-cli.initialize-new-project).

Postgresql keywords [naming rules](https://www.postgresql.org/docs/7.0/syntax525.htm) may also be useful.

## License

Copyright © 2022

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
