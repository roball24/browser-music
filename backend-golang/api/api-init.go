package api

import (
	"BrowserMusic/backend-golang/config"
	"github.com/gin-gonic/gin"
	"log"
)

var (
	r *gin.Engine
)

func Init() {
	r = gin.Default()
	r.Use(CORS())

	routes := &config.Routes{
		Public: r.Group("/api"),
	}

	new(PlaylistController).Init(routes)
	new(SongController).Init(routes)
	new(ThemeController).Init(routes)
}

func Listen(uri string) {
	err := r.Run(uri)
	log.Println(err.Error())
}
