Tune Name: `$= dv.current().file.name`
Key: #A
Style: #scottish #reel 
Suggested Sets: 
Notes:

SaltfishForty have a version of this 

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
