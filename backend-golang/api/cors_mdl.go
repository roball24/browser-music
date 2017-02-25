package api

import (
	"BrowserMusic/backend-golang/config"
	"github.com/gin-gonic/gin"
)

func CORS() gin.HandlerFunc {
	return corsMiddleware
}

func corsMiddleware(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", config.CorsHost)
	c.Writer.Header().Set("Access-Control-Max-Age", "86400")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, Access-Control-Allow-Origin")
	c.Writer.Header().Set("Access-Control-Expose-Headers", "Content-Length")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Next()
}
