Tune Name: `$= dv.current().file.name`
Key: #Amin
Style: #Reel #Irish
Suggested Sets: [[The Banshee]] [[The Congress]] [[The Sally Gardens]] [[The Pigeon on the Gate]]
Notes:

Learned: 
- [x]  

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
