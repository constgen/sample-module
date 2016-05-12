'use strict';

var publicAPI = require('../../src/index.js'),
	packageManifest = require('../../package.json');

describe(packageManifest.name, function () {
	describe('has a correct interface', function () {
		it('"version" is the same as in the package.json', function () {
			expect(publicAPI.version).toEqual(packageManifest.version)
		})
	})
})
