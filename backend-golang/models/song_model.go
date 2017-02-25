package models

type SongInfo struct {
	Title   string
	Artist  string
	Album   string
	Artwork string
	Path    string
}

type SongData struct {
	Title string
	Data  string // base64 enc string
}
