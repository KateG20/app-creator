# app-creator

A Clojure app designed to easily create:
- scripts for creating database (currently: only for Postgresql)
- server projects with handlers (currently: only with Spring Framework)
- client projects with API requests (currently: only mobile app for Android)
- files for your apps and databases quick containerization (currently: only with Docker)

## Usage

```
>> app-creator start
               -i my_data.yml 
               -o my_output
```
For more information, use `-h` or `--help` option.

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
