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
	routes.Public.GET("/playlist", self.getAll)
	routes.Public.GET("/playlist/songs", self.getSongs)
	routes.Public.POST("/playlist", self.add)
	routes.Public.POST("/playlist/songs", self.addSong)
	routes.Public.DELETE("/playlist", self.delete)
	routes.Public.DELETE("/playlist/songs", self.deleteSong)
}

func (self *PlaylistController) generate(c *gin.Context) {
	err := self.systemPlaylist.Generate()
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}
	c.Status(http.StatusOK)
}

func (self *PlaylistController) getAll(c *gin.Context) {
	playlists, err := self.systemPlaylist.GetAll()
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}
	c.JSON(http.StatusOK, playlists)
}

func (self *PlaylistController) getSongs(c *gin.Context) {
	playlist := c.DefaultQuery("playlist", "All_Songs")
	songs, err := self.systemPlaylist.GetSongs(playlist)
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	c.JSON(http.StatusOK, songs)
}

func (self *PlaylistController) add(c *gin.Context) {
	playlist := c.Query("playlist")
	if playlist == "" {
		err := errors.New("No playlist name in post query")
		errors.Response(c, http.StatusBadRequest, err.Error(), err)
		return
	}

	err := self.systemPlaylist.Add(playlist)
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	c.Status(http.StatusOK)
}

func (self *PlaylistController) addSong(c *gin.Context) {
	playlist := c.DefaultQuery("playlist", "All_Songs")
	song := c.Query("song")
	if song == "" {
		err := errors.New("No song name in post query")
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	err := self.systemPlaylist.AddSong(playlist, song)
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	c.Status(http.StatusOK)
}

func (self *PlaylistController) delete(c *gin.Context) {
	playlist := c.Query("playlist")
	if playlist == "" || playlist == "All_Songs" {
		err := errors.New("No playlist name in post query")
		errors.Response(c, http.StatusBadRequest, err.Error(), err)
		return
	}

	err := self.systemPlaylist.Delete(playlist)
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	c.Status(http.StatusOK)
}

func (self *PlaylistController) deleteSong(c *gin.Context) {
	playlist := c.DefaultQuery("playlist", "All_Songs")
	song := c.Query("song")
	if song == "" {
		err := errors.New("No song name in post query")
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	err := self.systemPlaylist.DeleteSong(playlist, song)
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}

	c.Status(http.StatusOK)
}
