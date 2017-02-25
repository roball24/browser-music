package api

import (
	"BrowserMusic/backend-golang/config"
	"BrowserMusic/backend-golang/system"
	"github.com/gin-gonic/gin"
)

type PlaylistController struct {
	systemPl system.ISystemPl
}

func (self *PlaylistController) Init(routes *config.Routes) {
	self.systemPl = system.GetSystemPl()

	routes.Public.PUT("/playlist/reload", self.reload)
	routes.Public.GET("/playlist/songs", self.getSongs)
	routes.Public.GET("/playlist", self.getAll)
}

func (self *PlaylistController) reload(c *gin.Context) {
}

func (self *PlaylistController) getSongs(c *gin.Context) {

}

func (self *PlaylistController) getAll(c *gin.Context) {

}
