package system

import (
	"encoding/base64"
	"encoding/json"
	"io/ioutil"
	"os"
	"strings"

	"github.com/roball24/browser-music/backend-golang/errors"
	"github.com/roball24/browser-music/backend-golang/models"

	id3 "github.com/mikkyang/id3-go"
	"github.com/mikkyang/id3-go/v2"
)

type ISystemPlaylist interface {
	Generate() error
	GetAll() (*[]models.Playlist, error)
	GetSongs(string) (*[]models.SongInfo, error)
	Add(string) error
	AddSong(string, string) error
	Delete(string) error
	DeleteSong(string, string) error
	GetArtwork(string) ([]byte, error)
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

		if plist.Artwork == "" {
			path := dir + "/" + file.Name()
			tag, err := id3.Open(path)
			if err == nil {
				artwork := tag.Frame("APIC")
				if artwork != nil {
					plist.Artwork = base64.URLEncoding.EncodeToString(artwork.Bytes())
				}
			}
			tag.Close()
		}
		plist.SongPaths = append(plist.SongPaths, file.Name())
	}

	jsonStr, err := json.Marshal(plist)
	if err != nil {
		return err
	}

	ioutil.WriteFile("../data/All_Songs.playlist", jsonStr, 0644)
	return nil
}

func (self *SystemPlaylist) GetAll() (*[]models.Playlist, error) {
	dir := "../data"

	files, err := ioutil.ReadDir(dir)
	if err != nil {
		return nil, err
	}

	var plists []models.Playlist

	for _, file := range files {
		if file.Name()[len(file.Name())-9:] == ".playlist" {

			// get artwork for playlist
			path := dir + "/" + file.Name()
			pfile, err := ioutil.ReadFile(path)
			if err != nil {
				continue // skip file
			}

			var plist models.Playlist
			if err := json.Unmarshal(pfile, &plist); err != nil {
				continue
			}

			plist.SongPaths = nil
			plist.Artwork = ""

			plists = append(plists, plist)
		}
	}
	return &plists, nil
}

func (self *SystemPlaylist) GetSongs(pStr string) (*[]models.SongInfo, error) {
	pStr = strings.Replace(pStr, " ", "_", -1)
	file, err := ioutil.ReadFile("../data/" + pStr + ".playlist")
	if err != nil {
		return nil, err
	}

	// get filepaths to songs in playlist
	var playlist models.Playlist
	if err := json.Unmarshal(file, &playlist); err != nil {
		return nil, err
	}

	var songs []models.SongInfo
	for _, path := range playlist.SongPaths {
		// get info from mp3 tags
		tag, err := id3.Open("../library/" + path)
		if err != nil {
			tag.Close()
			continue
		}

		// title falls back to filename
		title := tag.Title()
		if title == "" {
			title = path[:len(pStr)-4]
		}

		var song models.SongInfo
		song.Title = title
		song.Artist = tag.Artist()
		song.Album = tag.Album()
		song.Path = path

		tag.Close()
		songs = append(songs, song)
	}

	return &songs, nil
}

func (self *SystemPlaylist) Add(plistName string) error {
	var playlist models.Playlist
	playlist.Name = plistName

	files, err := ioutil.ReadDir("../data")
	if err != nil {
		return err
	}
	playlist.Id = len(files)

	jsonStr, err := json.Marshal(playlist)
	if err != nil {
		return err
	}

	filename := strings.Replace(plistName, " ", "_", -1)

	ioutil.WriteFile("../data/"+filename+".playlist", jsonStr, 0644)
	return nil
}

func (self *SystemPlaylist) AddSong(pStr string, songPath string) error {
	fullPath := "../data/" + pStr + ".playlist"
	file, err := ioutil.ReadFile(fullPath)
	if err != nil {
		return err
	}

	var playlist models.Playlist
	if err := json.Unmarshal(file, &playlist); err != nil {
		return err
	}

	for _, p := range playlist.SongPaths {
		if songPath == p {
			return errors.New("error: file aleady in playlist")
		}
	}
	playlist.SongPaths = append(playlist.SongPaths, songPath)
	jsonStr, err := json.Marshal(playlist)
	if err != nil {
		return err
	}

	ioutil.WriteFile("../data/"+pStr+".playlist", jsonStr, 0644)
	return nil
}

func (self *SystemPlaylist) Delete(plistName string) error {
	plistName = strings.Replace(plistName, " ", "_", -1)
	fullPath := "../data/" + plistName + ".playlist"
	if err := os.Remove(fullPath); err != nil {
		return err
	}
	return nil
}

func (self *SystemPlaylist) DeleteSong(pStr string, songPath string) error {
	fullPath := "../data/" + pStr + ".playlist"
	file, err := ioutil.ReadFile(fullPath)
	if err != nil {
		return err
	}

	var playlist models.Playlist
	if err := json.Unmarshal(file, &playlist); err != nil {
		return err
	}

	for i, p := range playlist.SongPaths {
		if songPath == p {
			if i == len(playlist.SongPaths)-1 {
				playlist.SongPaths = playlist.SongPaths[:i]
			} else {
				playlist.SongPaths = append(playlist.SongPaths[:i], playlist.SongPaths[i+1:]...)
			}
		}
	}

	jsonStr, err := json.Marshal(playlist)
	if err != nil {
		return err
	}

	ioutil.WriteFile("../data/"+pStr+".playlist", jsonStr, 0644)
	return nil
}

func (self *SystemPlaylist) GetArtwork(pStr string) ([]byte, error) {
	// load playlist file at pStr in data directory
	pStr = strings.Replace(pStr, " ", "_", -1)
	fullPath := "../data/" + pStr + ".playlist"

	file, err := ioutil.ReadFile(fullPath)
	if err != nil {
		return nil, err
	}

	var playlist models.Playlist
	if err := json.Unmarshal(file, &playlist); err != nil {
		return nil, err
	}

	if len(playlist.SongPaths) == 0 {
		return nil, nil
	}

	// return artwork of first song in playlist
	tag, err := id3.Open("../library/" + playlist.SongPaths[0])
	if err != nil {
		return nil, err
	}
	defer tag.Close()

	if artwork := tag.Frame("APIC"); artwork != nil {
		return artwork.(*v2.ImageFrame).DataFrame.Data(), nil
	}

	return nil, nil
}
