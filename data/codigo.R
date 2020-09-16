library(stringr)
library(dplyr)
#Descargar data
system("wget https://cloud.minsa.gob.pe/s/Md37cjXmjT9qYSa/download")
system("mv download fallecidos.csv")
# Fallecidos
a <- read.csv("fallecidos.csv")
depa<-read.csv("departamentos.csv")
fallecidos<-matrix(,25,1)
for(i in 1:nrow(depa)){
	c<-depa[i,"Departamentos"]
	d<-(filter(a,str_detect(DEPARTAMENTO,as.character(c))) %>% nrow)
	fallecidos[i]=d
}
data<-cbind(depa,fallecidos)
#Exportar dataframe como png
library(gridExtra)
png("../img/fallecidos.png",height=22*nrow(data),width=100*ncol(data))
grid.table(data)
dev.off()
