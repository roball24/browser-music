package system

import (
	"BrowserMusic/backend-golang/models"
	"encoding/base64"
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

	for _, file := range files {
		if file.Name()[len(file.Name())-4:] != ".mp3" {
			continue
		}

		// Open file and find tag in it
		path := dir + "/" + file.Name()
		tag, err := id3.Open(path)
		if err != nil {
			log.Fatal("Error while opening mp3 file tag: ", err)
			return err
		}
		defer tag.Close()

		// title falls back to filename
		title := tag.Title()
		if title == "" {
			title = file.Name()[:len(file.Name())-4]
		}

		artwork := tag.Frame("APIC")
		b64str := ""
		if artwork != nil {
			b64str = base64.URLEncoding.EncodeToString(artwork.Bytes())
		}

		song := models.SongInfo{}
		song.Title = title
		song.Artist = tag.Artist()
		song.Album = tag.Album()
		song.Artwork = b64str
	}

	return nil
}
