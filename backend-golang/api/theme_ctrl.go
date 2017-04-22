package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/roball24/browser-music/backend-golang/config"
	"github.com/roball24/browser-music/backend-golang/errors"
	"github.com/roball24/browser-music/backend-golang/models"
	"github.com/roball24/browser-music/backend-golang/system"
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
