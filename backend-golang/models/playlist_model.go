package models

type PlaylistInfo struct {
	Name    string
	Artwork string // base64 enc
}

type Playlist struct {
	Name string
	Songs SongInfo[]
}
