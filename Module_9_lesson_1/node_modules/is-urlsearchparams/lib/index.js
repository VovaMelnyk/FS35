"use strict";
const {default:hasToStringTag} = require("has-to-string-tag-x");
const isObject = require("is-object");
const {LENIENT_PROPERTIES, STRICT_PROPERTIES} = require("./props");

const SEARCH_PARAMS_CLASS = "[object URLSearchParams]";

const toStringTag = Object.prototype.toString;



const isURLSearchParams = (searchParams, supportIncomplete=false) =>
{
	if (!isObject(searchParams))
	{
		return false;
	}
	else if (hasToStringTag && toStringTag.call(searchParams)!==SEARCH_PARAMS_CLASS)
	{
		// Shimmed implementation with incorrect constructor name
		return false;
	}
	else if (!STRICT_PROPERTIES.every(prop => prop in searchParams))
	{
		return false;
	}
	else if (supportIncomplete)
	{
		return true;
	}
	else
	{
		return LENIENT_PROPERTIES.every(prop => prop in searchParams);
	}
};



isURLSearchParams.lenient = searchParams => isURLSearchParams(searchParams, true);



module.exports = Object.freeze(isURLSearchParams);
