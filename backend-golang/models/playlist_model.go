package models

type PlaylistInfo struct {
	Name    string
	Artwork string // base64 enc
}

type Playlist struct {
	Name      string   `json: "name,omitempty"`
	SongPaths []string `json: "songPaths,omitempty"`
	Artwork   string   `json: "artwork,omitempty"`
}
