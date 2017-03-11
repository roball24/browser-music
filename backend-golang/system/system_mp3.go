package system

import (
	"encoding/base64"
	"io/ioutil"

	id3 "github.com/mikkyang/id3-go"
	"github.com/mikkyang/id3-go/v2"
)

type ISystemMp3 interface {
	GetArtwork(string) ([]byte, error)
	Load(string) (string, error)
}

type SystemMp3 struct{}

func NewSystemMp3() *SystemMp3 {
	return &SystemMp3{}
}

func (self *SystemMp3) GetArtwork(path string) ([]byte, error) {
	tag, err := id3.Open("../library/" + path)
	if err != nil {
		return nil, err
	}
	defer tag.Close()

	if artwork := tag.Frame("APIC"); artwork != nil {
		return artwork.(*v2.ImageFrame).DataFrame.Data(), nil
	}

	return nil, nil
}

func (self *SystemMp3) Load(path string) (string, error) {
	file, err := ioutil.ReadFile("../library/" + path)
	if err != nil {
		return "", err
	}

	b64 := base64.URLEncoding.EncodeToString(file)
	return b64, nil
}
