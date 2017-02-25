package system

import (
	"encoding/base64"
	id3 "github.com/mikkyang/id3-go"
	"io/ioutil"
)

type ISystemMp3 interface {
	GetArtwork(string) (string, error)
	Load(string) (string, error)
}

type SystemMp3 struct{}

func NewSystemMp3() *SystemMp3 {
	return &SystemMp3{}
}

func (self *SystemMp3) GetArtwork(path string) (string, error) {
	tag, err := id3.Open("../library/" + path)
	defer tag.Close()
	if err != nil {
		return "", err
	}
	artwork := tag.Frame("APIC")
	var b64 string
	if artwork != nil {
		b64 = base64.URLEncoding.EncodeToString(artwork.Bytes())
	}
	return b64, nil
}

func (self *SystemMp3) Load(path string) (string, error) {
	file, err := ioutil.ReadFile("../library/" + path)
	if err != nil {
		return "", err
	}
	b64 := base64.URLEncoding.EncodeToString(file)
	return b64, nil
}
