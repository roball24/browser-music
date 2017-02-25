package api

import (
	"BrowserMusic/backend-golang/config"
	"github.com/gin-gonic/gin"
)

type ThemeController struct {
}

func (self *ThemeController) Init(routes *config.Routes) {
	routes.Public.GET("/theme", self.get)
	routes.Public.PUT("/theme", self.set)
}

func (self *ThemeController) get(c *gin.Context) {

}

func (self *ThemeController) set(c *gin.Context) {

}
