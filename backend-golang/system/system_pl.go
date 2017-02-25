package system

type ISystemPl interface {
	Generate() error
}

type SystemPl struct{}

func NewSystemPl() *SystemPl {
	return &SystemPl{}
}

func (self *SystemPl) Generate() error {
	return nil
}
