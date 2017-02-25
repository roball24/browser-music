package system

import (
	"BrowserMusic/backend-golang/models"
	"encoding/base64"
	"encoding/json"
	id3 "github.com/mikkyang/id3-go"
	"io/ioutil"
	"log"
	"strconv"
	"strings"
)

type ISystemPlaylist interface {
	Generate() error
	GetAll() (*[]models.PlaylistInfo, error)
}

type SystemPlaylist struct{}

func NewSystemPlaylist() *SystemPlaylist {
	return &SystemPlaylist{}
}

func (self *SystemPlaylist) Generate() error {
	dir := "../library"

	files, err := ioutil.ReadDir(dir)
	if err != nil {
		return err
	}

	plist := models.Playlist{}
	plist.Name = "All Songs"
	plist.Id = 0

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

	ioutil.WriteFile("../data/0_All_Songs.playlist", jsonStr, 0644)

	return nil
}

func (self *SystemPlaylist) GetAll() (*[]models.PlaylistInfo, error) {
	dir := "../data"

	files, err := ioutil.ReadDir(dir)
	if err != nil {
		return nil, err
	}

	var plists []models.PlaylistInfo

	for _, file := range files {
		if file.Name()[len(file.Name())-9:] == ".playlist" {
			plist := models.PlaylistInfo{}

			// get artwork for playlist
			path := dir + "/" + file.Name()
			pfile, err := ioutil.ReadFile(path)
			if err != nil {
				continue // skip file
			}

			var tempPlst models.Playlist
			json.Unmarshal(pfile, &tempPlst)

			pid, err := strconv.Atoi(file.Name()[:strings.Index(file.Name(), "_")])
			if err != nil {
				continue
			}

			plist.Id = pid
			plist.Name = tempPlst.Name
			plist.Artwork = tempPlst.Artwork

			plists = append(plists, plist)
		}

	}

	return &plists, nil
}
