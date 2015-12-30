install:
	@npm install

test:
	@./node_modules/.bin/mocha -R spec test/

testB:
	@./node_modules/.bin/mocha -R html_table_reporter test/

.PHONY: test
