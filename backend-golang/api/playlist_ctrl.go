package api

import (
	"BrowserMusic/backend-golang/config"
	"github.com/gin-gonic/gin"
)

type PlaylistController struct {
}

func (self *PlaylistController) Init(routes *config.Routes) {
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
