"use strict";

const LENIENT_PROPERTIES =
[
	"entries",
	"sort",
	"values"
];

const STRICT_PROPERTIES =
[
	"append",
	"delete",
	"get",
	"getAll",
	"has",
	"keys",
	"set",
	// "toString" excluded because Object::toString exists
];



module.exports = { LENIENT_PROPERTIES, STRICT_PROPERTIES };
