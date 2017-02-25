package api

import (
	"BrowserMusic/backend-golang/config"
	"BrowserMusic/backend-golang/system"
	"github.com/gin-gonic/gin"
)

type ThemeController struct {
	systemTheme system.ISystemTheme
}

func (self *ThemeController) Init(routes *config.Routes) {
	self.systemTheme = system.GetSystemTheme()

	routes.Public.GET("/theme", self.get)
	routes.Public.PUT("/theme", self.set)
}

func (self *ThemeController) get(c *gin.Context) {

}

func (self *ThemeController) set(c *gin.Context) {

}
