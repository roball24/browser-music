package system

var (
	systemPl    ISystemPl
	systemTheme ISystemTheme
)

func Init() {
	systemPl = NewSystemPl()
	systemTheme = NewSystemTheme()
}

func GetSystemPl() ISystemPl {
	return systemPl
}

func GetSystemTheme() ISystemTheme {
	return systemTheme
}
