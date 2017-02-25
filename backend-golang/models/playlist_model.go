package models

type PlaylistInfo struct {
	Id      int
	Name    string
	Artwork string // base64 enc
}

type Playlist struct {
	Id        int      `json: "id,omitempty"`
	Name      string   `json: "name,omitempty" binding:"required"`
	SongPaths []string `json: "songPaths,omitempty"`
	Artwork   string   `json: "artwork,omitempty"`
}
