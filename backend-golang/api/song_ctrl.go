package api

import (
	"net/http"

	"github.com/roball24/browser-music/backend-golang/config"
	"github.com/roball24/browser-music/backend-golang/errors"
	"github.com/roball24/browser-music/backend-golang/system"

	"github.com/gin-gonic/gin"
)

type SongController struct {
	systemMp3 system.ISystemMp3
}

func (self *SongController) Init(routes *config.Routes) {
	self.systemMp3 = system.GetSystemMp3()

	routes.Public.GET("/song", self.load)
	routes.Public.GET("/song/artwork", self.getArtwork)
}

func (self *SongController) load(c *gin.Context) {
	path := c.Query("song")
	if path == "" {
		err := errors.New("No path in artwork query")
		errors.Response(c, http.StatusBadRequest, err.Error(), err)
		return
	}

	data, err := self.systemMp3.Load(path)
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	c.JSON(http.StatusOK, data)
}

func (self *SongController) getArtwork(c *gin.Context) {
	path := c.Query("song")
	if path == "" {
		err := errors.New("No path in artwork query")
		errors.Response(c, http.StatusBadRequest, err.Error(), err)
		return
	}

	artwork, err := self.systemMp3.GetArtwork(path)
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	if artwork == nil {
		c.Writer.WriteHeader(http.StatusNoContent)
		return
	}

	c.Data(http.StatusOK, "image", artwork)
}
