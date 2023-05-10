Tune Name: `$= dv.current().file.name`
Key: #G
Style: #Reel
Session: 
```dataviewjs
await dv.view("Scripts/get_tune_dv", dv.current());
```
Suggested Sets:
Notes: [[Brennan's Reel]]
https://open.spotify.com/track/672iCvMm3pLGXtPaWruVr1?si=KWpedYvGQ0yOZWAAcdCVoA&dd=1
Learned: 
- [x]  ✅ 2023-05-09


Creation Date: `$= dv.current().file.ctime`
Modified Data: `$= dv.current().file.mtime`

Page:
```dataviewjs
await dv.view("Scripts/display_tune_dv", dv.current());
```

