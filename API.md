## Public endpoints
GET at /api

## non-GET public endpoints
None

## Return on success
### GET at /api

console.log outputs all documents from the Songs collection in the database:
```
[
  {
    _id: 6082358d938b66c4e83a517c,
    name: 'Robbers',
    album: 'the 1975',
    year: 2013,
    youtube: 'https://www.youtube.com/embed/Iyy3YOpxL2k?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/73jVPicY2G9YHmzgjk69ae?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=ovqnqkQEQ1uYQZnTkNS3sA',
    apple: 'https://music.apple.com/us/music-video/robbers/1445284498'
  },
  {
    _id: 6082358d938b66c4e83a517d,
    name: "If You're Too Shy",
    album: 'Notes on a Conditional Form',
    year: 2020,
    youtube: 'https://www.youtube.com/embed/wYYQpTbBSBM?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/1C5utO1I8FoSIn6g1R5DAZ?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=rPzQatr0Ty6vP7mglntA7Q',
    apple: 'https://music.apple.com/us/album/if-youre-too-shy-let-me-know/1473599936?i=1473600490'
  },
  {
    _id: 6082358d938b66c4e83a517e,
    name: 'A Change of Heart',
    album: 'I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It',
    year: 2016,
    youtube: 'https://www.youtube.com/embed/trbwqF0d7NA?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/49clMzwHdKb5f0awEH99pg?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=oOuuiIWwQMa51SVAybyEiw',
    apple: 'https://music.apple.com/us/album/a-change-of-heart/1440832181?i=1440832188'
  },
  {
    _id: 6082358d938b66c4e83a517f,
    name: "It's Not Living (If It's Not With You)",
    album: 'A Brief Inquiry into Online Relationships',
    year: 2018,
    youtube: 'https://www.youtube.com/embed/FzfKn-hlZwo?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/2zy1qIsXrFiESE2vSuT11l?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=Hrww9gVoRCitsbuqXWKcOA',
    apple: 'https://music.apple.com/us/album/its-not-living-if-its-not-with-you/1435546528?i=1435546686'
  },
  {
    _id: 6082358d938b66c4e83a5180,
    name: 'The Sound',
    album: 'I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It',
    year: 2016,
    youtube: 'https://www.youtube.com/embed/FSnAllHtG70?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/7h6lpVuSGPW6RNjDXKpYDh?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=tRF1cMiXQymAoI7_p8qbHg',
    apple: 'https://music.apple.com/us/album/the-sound/1440832181?i=1440832202'
  },
  {
    _id: 6082358d938b66c4e83a5181,
    name: 'Somebobdy Else',
    album: 'I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It',
    year: 2016,
    youtube: 'https://www.youtube.com/embed/lCQVvXOL6Hs?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/5hc71nKsUgtwQ3z52KEKQk?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=gXHj5VICSm6HQO-vzh36sg',
    apple: 'https://music.apple.com/us/album/somebody-else/1440832181?i=1440832196'
  },
  {
    _id: 6082358d938b66c4e83a5182,
    name: 'Me & You Together Song',
    album: 'Notes on a Conditional Form',
    year: 2020,
    youtube: 'https://www.youtube.com/embed/NF47oaT6qzc?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/6SrvijeageGUiFu9iCDdmM?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=-hmYbiUaS-mlvpU3t2n0eg',
    apple: 'https://music.apple.com/us/album/me-you-together-song/1473599936?i=1473600317'
  },
  {
    _id: 6082358d938b66c4e83a5183,
    name: 'Sincerity is Scary',
    album: 'A Brief Inquiry into Online Relationships',
    year: 2018,
    youtube: 'https://www.youtube.com/embed/1K93ioXL63c?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/2a4aUMVIy5VJG6dEGTKIVe?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=mM9_sGeJRyO1BsfEDPzdcQ',
    apple: 'https://music.apple.com/us/album/sincerity-is-scary/1435546528?i=1435546676'
  },
  {
    _id: 6082358d938b66c4e83a5184,
    name: 'Be My Mistake',
    album: 'A Brief Inquiry into Online Relationships',
    year: 2018,
    youtube: 'https://www.youtube.com/embed/Onby3d2lFDc?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/0AG2l0IboWNSwjUkMr2Aq7?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=rbj7hOzsT6Oyk26x9ddFxw',
    apple: 'https://music.apple.com/us/album/be-my-mistake/1435546528?i=1435546674'
  },
  {
    _id: 6082358d938b66c4e83a5185,
    name: 'Girls',
    album: 'the 1975',
    year: 2013,
    youtube: 'https://www.youtube.com/embed/QkubQCI4Fxo?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/5WSdMcWTKRdN1QYVJHJWxz?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=NZqDzAdBRuWzmlKUutoX3g',
    apple: 'https://music.apple.com/us/album/girls/1440818989?i=1440819288'
  },
  {
    _id: 6082358d938b66c4e83a5186,
    name: 'TOOTIMETOOTIMETOOTIME',
    album: 'A Brief Inquiry into Online Relationships',
    year: 2018,
    youtube: 'https://www.youtube.com/embed/4fxPQUKfim4?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/1TQCb2DuM8L5rDjN2hPZKb?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=CHcTQMO-TlaySWgM0OlO4Q',
    apple: 'https://music.apple.com/us/album/tootimetootimetootime/1435546528?i=1435546669'
  },
  {
    _id: 6082358d938b66c4e83a5187,
    name: 'Chocolate',
    album: 'the 1975',
    year: 2013,
    youtube: 'https://www.youtube.com/embed/CHk5SWVO4p8?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/4WiiRw2PHMNQE0ad6y6GdD?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=E-Wrx7yQS8q0ZbN2PM9Gow',
    apple: 'https://music.apple.com/us/album/chocolate/1440818989?i=1440819003'
  },
  {
    _id: 6082358d938b66c4e83a5188,
    name: "She's American",
    album: 'I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It',
    year: 2016,
    youtube: 'https://www.youtube.com/embed/M3gTmd8uv5I?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/5aV4HUW9RFOB0aXq0Ud9s0?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=1Uc_YxJ7QoyS1RCvPV3bNA',
    apple: 'https://music.apple.com/us/album/shes-american/1440832181?i=1440832189'
  },
  {
    _id: 6082358d938b66c4e83a5189,
    name: 'If I Believe You',
    album: 'I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It',
    year: 2016,
    youtube: 'https://www.youtube.com/embed/hx3DonCyCmc?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/2J3ajGI1sVj9wnqThJHwPS?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=9KQ3JGS9Q6efYMTfNEPO5w',
    apple: 'https://music.apple.com/us/album/if-i-believe-you/1440832181?i=1440832190'
  },
  {
    _id: 6082358d938b66c4e83a518a,
    name: 'People',
    album: 'Notes on a Conditional Form',
    year: 2020,
    youtube: 'https://www.youtube.com/embed/EKdPxXWm7Jg?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/39sJbSgJmIrB9J1pkRbpaX?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=ucbaw95tTG6j-ZwpXbJvgQ',
    apple: 'https://music.apple.com/us/album/people/1473599936?i=1473600159'
  },
  {
    _id: 6082358d938b66c4e83a518b,
    name: 'Love Me',
    album: 'I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It',
    year: 2016,
    youtube: 'https://www.youtube.com/embed/TJ5bZuUlftI?autoplay=0&mute=0',
    spotify: 'https://open.spotify.com/track/5hRzAbY2AAO258hL6oqsqO?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=pW1rtl9bT3WMHUjIW-BFIA',
    apple: 'https://music.apple.com/us/album/love-me/1440832181?i=1440832185'
  }
]
```
and res also outputs all documents in the Songs collection of the database:
```
"[{\"_id\":\"6082358d938b66c4e83a517c\",\"name\":\"Robbers\",\"album\":\"the 1975\",\"year\":2013,\"youtube\":\"https://www.youtube.com/embed/Iyy3YOpxL2k?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/73jVPicY2G9YHmzgjk69ae?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=ovqnqkQEQ1uYQZnTkNS3sA\",\"apple\":\"https://music.apple.com/us/music-video/robbers/1445284498\"},{\"_id\":\"6082358d938b66c4e83a517d\",\"name\":\"If You're Too Shy\",\"album\":\"Notes on a Conditional Form\",\"year\":2020,\"youtube\":\"https://www.youtube.com/embed/wYYQpTbBSBM?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/1C5utO1I8FoSIn6g1R5DAZ?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=rPzQatr0Ty6vP7mglntA7Q\",\"apple\":\"https://music.apple.com/us/album/if-youre-too-shy-let-me-know/1473599936?i=1473600490\"},{\"_id\":\"6082358d938b66c4e83a517e\",\"name\":\"A Change of Heart\",\"album\":\"I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It\",\"year\":2016,\"youtube\":\"https://www.youtube.com/embed/trbwqF0d7NA?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/49clMzwHdKb5f0awEH99pg?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=oOuuiIWwQMa51SVAybyEiw\",\"apple\":\"https://music.apple.com/us/album/a-change-of-heart/1440832181?i=1440832188\"},{\"_id\":\"6082358d938b66c4e83a517f\",\"name\":\"It's Not Living (If It's Not With You)\",\"album\":\"A Brief Inquiry into Online Relationships\",\"year\":2018,\"youtube\":\"https://www.youtube.com/embed/FzfKn-hlZwo?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/2zy1qIsXrFiESE2vSuT11l?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=Hrww9gVoRCitsbuqXWKcOA\",\"apple\":\"https://music.apple.com/us/album/its-not-living-if-its-not-with-you/1435546528?i=1435546686\"},{\"_id\":\"6082358d938b66c4e83a5180\",\"name\":\"The Sound\",\"album\":\"I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It\",\"year\":2016,\"youtube\":\"https://www.youtube.com/embed/FSnAllHtG70?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/7h6lpVuSGPW6RNjDXKpYDh?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=tRF1cMiXQymAoI7_p8qbHg\",\"apple\":\"https://music.apple.com/us/album/the-sound/1440832181?i=1440832202\"},{\"_id\":\"6082358d938b66c4e83a5181\",\"name\":\"Somebobdy Else\",\"album\":\"I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It\",\"year\":2016,\"youtube\":\"https://www.youtube.com/embed/lCQVvXOL6Hs?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/5hc71nKsUgtwQ3z52KEKQk?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=gXHj5VICSm6HQO-vzh36sg\",\"apple\":\"https://music.apple.com/us/album/somebody-else/1440832181?i=1440832196\"},{\"_id\":\"6082358d938b66c4e83a5182\",\"name\":\"Me & You Together Song\",\"album\":\"Notes on a Conditional Form\",\"year\":2020,\"youtube\":\"https://www.youtube.com/embed/NF47oaT6qzc?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/6SrvijeageGUiFu9iCDdmM?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=-hmYbiUaS-mlvpU3t2n0eg\",\"apple\":\"https://music.apple.com/us/album/me-you-together-song/1473599936?i=1473600317\"},{\"_id\":\"6082358d938b66c4e83a5183\",\"name\":\"Sincerity is Scary\",\"album\":\"A Brief Inquiry into Online Relationships\",\"year\":2018,\"youtube\":\"https://www.youtube.com/embed/1K93ioXL63c?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/2a4aUMVIy5VJG6dEGTKIVe?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=mM9_sGeJRyO1BsfEDPzdcQ\",\"apple\":\"https://music.apple.com/us/album/sincerity-is-scary/1435546528?i=1435546676\"},{\"_id\":\"6082358d938b66c4e83a5184\",\"name\":\"Be My Mistake\",\"album\":\"A Brief Inquiry into Online Relationships\",\"year\":2018,\"youtube\":\"https://www.youtube.com/embed/Onby3d2lFDc?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/0AG2l0IboWNSwjUkMr2Aq7?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=rbj7hOzsT6Oyk26x9ddFxw\",\"apple\":\"https://music.apple.com/us/album/be-my-mistake/1435546528?i=1435546674\"},{\"_id\":\"6082358d938b66c4e83a5185\",\"name\":\"Girls\",\"album\":\"the 1975\",\"year\":2013,\"youtube\":\"https://www.youtube.com/embed/QkubQCI4Fxo?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/5WSdMcWTKRdN1QYVJHJWxz?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=NZqDzAdBRuWzmlKUutoX3g\",\"apple\":\"https://music.apple.com/us/album/girls/1440818989?i=1440819288\"},{\"_id\":\"6082358d938b66c4e83a5186\",\"name\":\"TOOTIMETOOTIMETOOTIME\",\"album\":\"A Brief Inquiry into Online Relationships\",\"year\":2018,\"youtube\":\"https://www.youtube.com/embed/4fxPQUKfim4?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/1TQCb2DuM8L5rDjN2hPZKb?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=CHcTQMO-TlaySWgM0OlO4Q\",\"apple\":\"https://music.apple.com/us/album/tootimetootimetootime/1435546528?i=1435546669\"},{\"_id\":\"6082358d938b66c4e83a5187\",\"name\":\"Chocolate\",\"album\":\"the 1975\",\"year\":2013,\"youtube\":\"https://www.youtube.com/embed/CHk5SWVO4p8?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/4WiiRw2PHMNQE0ad6y6GdD?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=E-Wrx7yQS8q0ZbN2PM9Gow\",\"apple\":\"https://music.apple.com/us/album/chocolate/1440818989?i=1440819003\"},{\"_id\":\"6082358d938b66c4e83a5188\",\"name\":\"She's American\",\"album\":\"I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It\",\"year\":2016,\"youtube\":\"https://www.youtube.com/embed/M3gTmd8uv5I?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/5aV4HUW9RFOB0aXq0Ud9s0?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=1Uc_YxJ7QoyS1RCvPV3bNA\",\"apple\":\"https://music.apple.com/us/album/shes-american/1440832181?i=1440832189\"},{\"_id\":\"6082358d938b66c4e83a5189\",\"name\":\"If I Believe You\",\"album\":\"I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It\",\"year\":2016,\"youtube\":\"https://www.youtube.com/embed/hx3DonCyCmc?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/2J3ajGI1sVj9wnqThJHwPS?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=9KQ3JGS9Q6efYMTfNEPO5w\",\"apple\":\"https://music.apple.com/us/album/if-i-believe-you/1440832181?i=1440832190\"},{\"_id\":\"6082358d938b66c4e83a518a\",\"name\":\"People\",\"album\":\"Notes on a Conditional Form\",\"year\":2020,\"youtube\":\"https://www.youtube.com/embed/EKdPxXWm7Jg?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/39sJbSgJmIrB9J1pkRbpaX?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=ucbaw95tTG6j-ZwpXbJvgQ\",\"apple\":\"https://music.apple.com/us/album/people/1473599936?i=1473600159\"},{\"_id\":\"6082358d938b66c4e83a518b\",\"name\":\"Love Me\",\"album\":\"I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It\",\"year\":2016,\"youtube\":\"https://www.youtube.com/embed/TJ5bZuUlftI?autoplay=0&mute=0\",\"spotify\":\"https://open.spotify.com/track/5hRzAbY2AAO258hL6oqsqO?context=spotify%3Aplaylist%3A37i9dQZF1DXchOWDSVJZqj&si=pW1rtl9bT3WMHUjIW-BFIA\",\"apple\":\"https://music.apple.com/us/album/love-me/1440832181?i=1440832185\"}]"```
