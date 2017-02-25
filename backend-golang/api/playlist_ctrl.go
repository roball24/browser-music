package api

import (
	"BrowserMusic/backend-golang/config"
	"BrowserMusic/backend-golang/errors"
	"BrowserMusic/backend-golang/system"
	"github.com/gin-gonic/gin"
	"net/http"
)

type PlaylistController struct {
	systemPl system.ISystemPl
}

func (self *PlaylistController) Init(routes *config.Routes) {
	self.systemPl = system.GetSystemPl()

	routes.Public.PUT("/playlist/generate", self.generate)
	routes.Public.GET("/playlist/songs", self.getSongs)
	routes.Public.GET("/playlist", self.getAll)
}

func (self *PlaylistController) generate(c *gin.Context) {
	err := self.systemPl.Generate()
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	c.Status(http.StatusOK)
}

func (self *PlaylistController) getSongs(c *gin.Context) {

}

func (self *PlaylistController) getAll(c *gin.Context) {

}
