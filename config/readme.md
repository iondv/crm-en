# Purpose
The folder stores configuration settings that need to be applied to the core.
Only the parameters (top-level properties) that are set in the meta configuration files are changed, and only the files that are located in this folder are changed.

Example
file `\meta\svyaz\config\config\config.json`
``` JSON
{
    "content":{
        "serverRendering": false,
        "homeRedirect": "/reestr"
    }
}
```

the following file will be changed `\app\config\config.json`
```{
    "runmode": "production",
    "port": [8888, 8889],
    "appURL": "localhost",
    "db": "mongodb",
    "mongodb": {
        "uri": "mongodb://127.0.0.1:27017/ion",
        "options": {
            "server": {
                "socketOptions":{
                    "keepAlive": 1
                }
            }
        },
        "connectionLimit": 10,
        "schema": "ion",
        "user": "root",
        "password": "ION-sql1"
    },
    "content":{
        "serverRendering": false,
        "homeRedirect": "/home"
    },
}```

на
```{
    "runmode": "production",
    "port": [8888, 8889],
    "appURL": "localhost",
    "db": "mongodb",
    "mongodb": {
        "uri": "mongodb://127.0.0.1:27017/ion",
        "options": {
            "server": {
                "socketOptions":{
                    "keepAlive": 1
                }
            }
        },
        "connectionLimit": 10,
        "schema": "ion",
        "user": "root",
        "password": "ION-sql1"
    },
    "content":{
        "serverRendering": false,
        "homeRedirect": "/reestr"
    },
}```