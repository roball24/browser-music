package system

import (
	"BrowserMusic/backend-golang/models"
	"encoding/base64"
	"encoding/json"
	id3 "github.com/mikkyang/id3-go"
	"io/ioutil"
	"log"
)

type ISystemPl interface {
	Generate() error
}

type SystemPl struct{}

func NewSystemPl() *SystemPl {
	return &SystemPl{}
}

func (self *SystemPl) Generate() error {
	dir := "../library"

	// TODO: add error handling, when folder does not exist
	files, err := ioutil.ReadDir(dir)
	if err != nil {
		return err
	}

	plist := models.Playlist{}
	plist.Name = "All_Songs"

	for _, file := range files {
		if file.Name()[len(file.Name())-4:] != ".mp3" {
			continue
		}

		// title falls back to filename
		// title := tag.Title()
		// if title == "" {
		// 	title = file.Name()[:len(file.Name())-4]
		// }

		if plist.Artwork == "" {
			path := dir + "/" + file.Name()
			tag, err := id3.Open(path)
			if err != nil {
				log.Fatal("Error while opening mp3 file tag: ", err)
				return err
			}
			defer tag.Close()

			artwork := tag.Frame("APIC")
			if artwork != nil {
				plist.Artwork = base64.URLEncoding.EncodeToString(artwork.Bytes())
			}
		}

		// song := models.SongInfo{}
		// song.Title = title
		// song.Artist = tag.Artist()
		// song.Album = tag.Album()

		plist.SongPaths = append(plist.SongPaths, file.Name())
	}

	jsonStr, err := json.Marshal(plist)
	if err != nil {
		return err
	}

	ioutil.WriteFile("../data/All_Songs.playlist", jsonStr, 0644)

	return nil
}
