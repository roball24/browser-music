package models

type PlaylistInfo struct {
	Name    string
	Artwork string // base64 enc
}

type Playlist struct {
	Name    string     `json: "name,omitempty"`
	Songs   []SongInfo `json: "songs,omitempty"`
	Artwork string     `json: "artwork,omitempty"`
}
