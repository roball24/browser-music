package models

// theme color settings
type Theme struct {
	Primary1 string `json: "primary1,omitempty"`
	Primary2 string `json: "primary2,omitempty"`
	Primary3 string `json: "primary3,omitempty"`

	Secondary1 string `json: "secondary1,omitempty"`
	Secondary2 string `json: "secondary2,omitempty"`
	Secondary3 string `json: "secondary3,omitempty"`

	Background1 string `json: "background1,omitempty"`
	Background2 string `json: "background2,omitempty"`
}
