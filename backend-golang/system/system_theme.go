package system

import (
	"BrowserMusic/backend-golang/models"
	"encoding/json"
	"io/ioutil"
)

type ISystemTheme interface {
	Set(*models.Theme) error
	Get() (*models.Theme, error)
}

type SystemTheme struct{}

func NewSystemTheme() *SystemTheme {
	return &SystemTheme{}
}

func (self *SystemTheme) Set(theme *models.Theme) error {
	jsonStr, err := json.Marshal(*theme)
	if err != nil {
		return err
	}
	ioutil.WriteFile("../data/current.theme", jsonStr, 0644)
	return nil
}

func (self *SystemTheme) Get() (*models.Theme, error) {
	file, err := ioutil.ReadFile("../data/current.theme")
	if err != nil {
		return nil, err
	}

	var theme models.Theme
	if err := json.Unmarshal(file, &theme); err != nil {
		return nil, err
	}

	return &theme, nil
}
