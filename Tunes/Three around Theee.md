[[Singing Stream]]
[[Skylark]]

Tune Name: `$= dv.current().file.name`
Key:
Style: 
Suggested Sets:
Notes:

Learned: 
- [ ]  

Creation Date: `$= dv.current().file.ctime`
Modified Data: `$= dv.current().file.mtime`

Session: 
```dataviewjs
await dv.view("Scripts/get_tune_dv", dv.current());
```

Page:
```dataviewjs
await dv.view("Scripts/display_tune_dv", dv.current());
```


#tune
