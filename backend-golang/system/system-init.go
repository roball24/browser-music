package system

var (
	systemPlaylist ISystemPlaylist
	systemTheme    ISystemTheme
	systemMp3      ISystemMp3
)

func Init() {
	systemPlaylist = NewSystemPlaylist()
	systemTheme = NewSystemTheme()
	systemMp3 = NewSystemMp3()
}

func GetSystemPlaylist() ISystemPlaylist {
	return systemPlaylist
}

func GetSystemTheme() ISystemTheme {
	return systemTheme
}

func GetSystemMp3() ISystemMp3 {
	return systemMp3
}
