src := src
out := out

npm := $(shell which npm)
babel := ./node_modules/.bin/babel
webpack := ./node_modules/.bin/webpack
nodemon := ./node_modules/.bin/nodemon

all: node_modules node web
node_modules: package.json; $(npm) i && touch $@
node:; $(babel) -d $(out)/node $(src)/node
web:; $(webpack)

watch:; $(MAKE) -j2 watch_node watch_web
watch_node:; $(babel) -w -d $(out)/node $(src)/node
watch_web:; $(webpack) --watch
nodemon:; $(nodemon) -w $(out)/node $(out)/node/bin/httpd

clean:; rm -rf $(out)

.PHONY: all node web watch watch_node watch_web nodemon clean
