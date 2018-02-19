## Overview
RecordService provides a common API for frameworks such as MR and Spark to read data
from Hadoop storage managers and return them as canonical records. This eliminates the
need for applications and frameworks to support individual file formats, handle data
security, perform auditing, implement sophisticated IO scheduling and other common
processing that is at the bottom of any computation.

This repo contains the RecordService service definition, the client libraries to use the
RecordService, tests and some automation scripts.

## Getting Started
### Prereqs
We require a thrift 0.9+ compiler, maven, cmake and java 7.

Increase your maven heap size:

    export MAVEN_OPTS="-Xmx2g -XX:MaxPermSize=512M -XX:ReservedCodeCacheSize=512m"

On Ubuntu:

    apt-get install cmake

On OSX:

    brew install thrift maven cmake

### Environment
thrift must be set up. The default locations will be checked. If using a custom thrift
version, set THRIFT_HOME.

### Build
After cloning, you can build it by just running:

    ./buildall.sh

This will build all the client artifacts and tests. Note that on OSX, portions of
c++ client libraries are currently not supported and not built.

### Running the tests
The tests require a running RecordService server running with the test data loaded. If
this server already exists, you can direct the tests to that server by setting
RECORD_SERVICE_PLANNER_HOST in your environment. This defaults to localhost if not set.

    export RECORD_SERVICE_PLANNER_HOST=<>
    cd $RECORD_SERVICE_HOME/java
    mvn test

This will run all of the non-Kerberos Java client tests.

To run the Kerberos Java client tests, you'll have to specify the module and the
test group to use. For now, this command will do that.

    mvn test -Dgroups=com.cerebro.test.group.TokenTests -pl core

### Setting up eclipse
The client is a mvn project and can be simply imported from eclipse. If running against
a remote server, be sure to set RECORD_SERVICE_PLANNER_HOST before starting up eclipse.

On OSX this can be done by opening a terminal and doing

     export RECORD_SERVICE_PLANNER_HOST=<>
     open -a Eclipse

### First steps
The repo comes with a few samples that demonstrate how to use the RecordService client
APIs, as well as examples of how to integrate with MapReduce and Spark. The examples can
be found in
* java/examples
* java/examples-spark

### Repo structure
* api/: Thrift file(s) containing the RecordService API definition
* cpp/: cpp sample and client code
* java/: java sample and client code
* tests/: Scripts to load test data, run tests and run benchmarks.
* jenkins/: Scripts intended to be run from jenkins builds.
