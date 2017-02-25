package system

type ISystemTheme interface{}

type SystemTheme struct{}

func NewSystemTheme() *SystemTheme {
	return &SystemTheme{}
}
