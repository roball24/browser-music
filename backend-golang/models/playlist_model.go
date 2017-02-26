package models

type Playlist struct {
	Id        int      `json: "id,omitempty"`
	Name      string   `json: "name,omitempty"`
	SongPaths []string `json: "songPaths,omitempty"`
	Artwork   string   `json: "artwork,omitempty"`
}
