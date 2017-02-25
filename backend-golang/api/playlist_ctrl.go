package api

import (
	"BrowserMusic/backend-golang/config"
	"BrowserMusic/backend-golang/errors"
	"BrowserMusic/backend-golang/system"
	"github.com/gin-gonic/gin"
	"net/http"
)

type PlaylistController struct {
	systemPlaylist system.ISystemPlaylist
}

func (self *PlaylistController) Init(routes *config.Routes) {
	self.systemPlaylist = system.GetSystemPlaylist()

	routes.Public.PUT("/playlist/generate", self.generate)
	routes.Public.GET("/playlist/songs", self.getSongs)
	routes.Public.GET("/playlist", self.getAll)
}

func (self *PlaylistController) generate(c *gin.Context) {
	err := self.systemPlaylist.Generate()
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}
	c.Status(http.StatusOK)
}

func (self *PlaylistController) getSongs(c *gin.Context) {

}

func (self *PlaylistController) getAll(c *gin.Context) {
	playlists, err := self.systemPlaylist.GetAll()
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}
	c.JSON(http.StatusOK, playlists)
}
