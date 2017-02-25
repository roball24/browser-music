# BrowserMusic - File Definitions

## .playlist file
a .playlist file stores song and artwork data for an individual playlist -- in json format

```json
{
	"artwork": "base64 encoded string",
	"songPaths": ["path"]
}
```

## .theme file
a .theme contains application themes, with the properties below -- in json format

```json
{
	"Primary1": "",
	"Primary2": "",
	"Primary3": "",
	"Secondary1": "",
	"Secondary2": "",
	"Secondary3": "",
	"Background1": "",
	"Background2": ""
}
```