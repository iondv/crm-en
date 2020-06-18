# Назначение
В папке хранятся конфигурационные настройки, которые нужно применить к ядру.
Изменяются только те параметры (свойства верхнего уровня), которые заданы в конфигурационных файлах меты, причем изменяются те файлы, которые находятся в этой папке.

Пример
файл `\meta\svyaz\config\config\config.json`
``` JSON
{
    "content":{
        "serverRendering": false,
        "homeRedirect": "/reestr"
    }
}
```

будет изменен файл `\app\config\config.json`
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