package api

import (
	"BrowserMusic/backend-golang/config"
	"github.com/gin-gonic/gin"
)

type SongController struct {
}

func (self *SongController) Init(routes *config.Routes) {

	routes.Public.GET("/song", self.load)
}

func (self *SongController) load(c *gin.Context) {

}
