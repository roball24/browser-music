package api

import (
	"github.com/gin-gonic/gin"
	"log"
)

var (
	r *gin.Engine
)

func Init() {
	r = gin.Default()
	r.Use(CORS())
}

func Listen(uri string) {
	err := r.Run(uri)
	log.Println(err.Error())
}
