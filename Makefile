install:
	@npm install

test:
	@./node_modules/.bin/mocha -R spec test/

.PHONY: test
