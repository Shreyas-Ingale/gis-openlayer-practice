"use client";
import VectorSource from 'ol/source/Vector';

function vector({ features, format, url }) {
	return new VectorSource({
		features,
		format,
		url
	});
}

export default vector;
