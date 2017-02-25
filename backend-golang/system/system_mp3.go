package system

type ISystemMp3 interface{}

type SystemMp3 struct{}

func NewSystemMp3() *SystemMp3 {
	return &SystemMp3{}
}
