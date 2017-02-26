package api

import (
	"BrowserMusic/backend-golang/config"
	"BrowserMusic/backend-golang/errors"
	"BrowserMusic/backend-golang/models"
	"BrowserMusic/backend-golang/system"
	"github.com/gin-gonic/gin"
	"net/http"
)

type ThemeController struct {
	systemTheme system.ISystemTheme
}

func (self *ThemeController) Init(routes *config.Routes) {
	self.systemTheme = system.GetSystemTheme()

	routes.Public.GET("/theme", self.get)
	routes.Public.PUT("/theme", self.set)
}

func (self *ThemeController) get(c *gin.Context) {
	theme, err := self.systemTheme.Get()
	if err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}
	c.JSON(http.StatusOK, theme)
}

func (self *ThemeController) set(c *gin.Context) {
	theme := &models.Theme{}
	err := c.BindJSON(theme)
	if err != nil {
		errors.Response(c, http.StatusBadRequest, err.Error(), err)
		return
	}

	if err := self.systemTheme.Set(theme); err != nil {
		errors.Response(c, http.StatusInternalServerError, err.Error(), err)
		return
	}
	c.Status(http.StatusOK)
}
