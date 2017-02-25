package system

type ISystemPl interface{}

type SystemPl struct{}

func NewSystemPl() *SystemPl {
	return &SystemPl{}
}
