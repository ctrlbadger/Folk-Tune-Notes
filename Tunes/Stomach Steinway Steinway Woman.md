Tune Name: `$= dv.current().file.name`
Learned: 
- [ ] 
Key: #Dmin
Style: #Reel 
Session: 
```dataviewjs
await dv.view("Scripts/get_tune_dv", dv.current());
```
Suggested Sets:
Notes:


Creation Date: `$= dv.current().file.ctime`
Modified Data: `$= dv.current().file.mtime`

Page:
```dataviewjs
await dv.view("Scripts/display_tune_dv", dv.current());
```

