Tune Name: `$= dv.current().file.name`
Key:
Style: 
Suggested Sets:
Notes: [[The Reconciliation Reel]]

Learned: 
- [x]  ✅ 2023-07-27

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

