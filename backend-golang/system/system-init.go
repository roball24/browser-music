package system

var (
	systemPl    ISystemPl
	systemTheme ISystemTheme
	systemMp3   ISystemMp3
)

func Init() {
	systemPl = NewSystemPl()
	systemTheme = NewSystemTheme()
	systemMp3 = NewSystemMp3()
}

func GetSystemPl() ISystemPl {
	return systemPl
}

func GetSystemTheme() ISystemTheme {
	return systemTheme
}

func GetSystemMp3() ISystemMp3 {
	return systemMp3
}
